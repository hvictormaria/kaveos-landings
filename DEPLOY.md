# Деплой

Статика без сборки. Весь репозиторий — готовая папка для веб-сервера (nginx / S3+CDN / что угодно). Pages не используем.

## Поддомены

| Хост | Что отдаём | Корень |
|---|---|---|
| **go.kaveos.com** | брендовые треки `play`, `gut`, `kocok` для всех гео | этот репозиторий целиком |
| **отдельный бесбрендовый домен** (имя — у Maria после покупки) | `trade`, `learn` для всех гео | этот же репозиторий |

Оба хоста отдают одну и ту же папку. Разница — только в том, какие пути открыты наружу (ниже). Так одно изменение в `shared.js` попадает на оба.

## Пути

Все страницы — `index.html` в своей папке, нужна отдача каталога (`try_files $uri $uri/index.html`).

| Гео | Язык по умолчанию | Брендовые (go.kaveos.com) | Бесбрендовые (отдельный домен) |
|---|---|---|---|
| Индонезия | ID | `/id/play/` `/id/gut/` `/id/kocok/` | `/id/trade/` `/id/learn/` |
| Малайзия | MS | `/my/…` | `/my/…` |
| Филиппины | TL | `/ph/…` | `/ph/…` |
| Бразилия | PT-BR | `/br/…` | `/br/…` |
| Мексика | ES-MX | `/mx/…` | `/mx/…` |
| Нигерия | EN | `/ng/…` | `/ng/…` |
| Международный | EN, USD | `/play/` `/gut/` `/kocok/` | `/trade/` `/learn/` |

`?lang=en` переключает на английский внутри гео. `/index.html` в корне — служебный индекс со всеми ссылками (noindex), на проде можно отдавать или заменить редиректом на `/id/play/`.

## Закрыть лишние пути
- на **go.kaveos.com** вернуть 404 для `*/trade/` и `*/learn/`;
- на **бесбрендовом домене** вернуть 404 для `*/play/`, `*/gut/`, `*/kocok/` и для `/index.html` — там не должно быть ни бренда, ни бесплатной зоны.

Пример nginx:
```
# go.kaveos.com
location ~ ^/([a-z]{2}/)?(trade|learn)/ { return 404; }
# unbranded host
location ~ ^/([a-z]{2}/)?(play|gut|kocok)/ { return 404; }
location = / { return 404; }
```

## Заголовки и кэш
- `shared.js`, `shared.css`, `tags.js`: `Cache-Control: max-age=300` (копи правится часто) или версионировать query-строкой.
- `config.js`: `no-cache` — там ID пикселей и адреса CTA.
- HTTPS обязателен (Meta Pixel и GTM не работают по http).
- Никаких `X-Frame-Options: DENY` не требуется, но `Content-Security-Policy` должен пропускать `googletagmanager.com`, `connect.facebook.net`, `fonts.googleapis.com`, `fonts.gstatic.com`.

## Что заполнить перед трафиком (`config.js`)
- `tracking.branded` / `tracking.unbranded` — GTM ID (предпочтительно) или GA4 + Ads + Meta Pixel ID. Пусто = тег не грузится.
- `signup` / `help` (брендовые) и `tracks.trader|learn.signup|help` (бесбрендовые) — адреса CTA. Кнопка добавляет `track`, `lang`, `geo`, `utm_*`, при заполненном поле — `contact`.
- `legal.branded` / `legal.unbranded` / `legal.company` — юрлицо в футере и в блоке «Кто мы» на `/trade/`.
- Meta domain verification: метатег `facebook-domain-verification` в `<head>` всех `index.html`, либо DNS TXT на домене.

## Где что в коде
- `shared.js` — вверху `GEO` (языки, валюта, платёжные методы по гео), `UI` (служебные слова по языку), `BRAND`, затем `C` — вся копи по трекам и языкам (en, id, ms, tl, pt, es, en_ng). Суммы — токены `{MIN_DEP}`, `{AMT}`, `{AMT_RET}`…, заполняются из `GEO`. Реальные суммы и сроки вывода — за кассой, сейчас лестница $10/$1/$18 с округлением.
- События аналитики: `ev()` → `dataLayer` (+ PostHog, если на странице). Имена — в README.
- `tags.js` грузится до `shared.js` и читает `tracking` из `config.js`.
