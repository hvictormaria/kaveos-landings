# Деплой

Статика без сборки: HTML + `shared.css` + `shared.js` + `config.js` + `tags.js`. Любой веб-сервер или GitLab Pages.

## GitLab Pages
`.gitlab-ci.yml` уже в репозитории: на push в default-ветку публикует корень как Pages.
Settings → Pages → добавить домены. Планируемая схема:

| Домен | Что отдаём |
|---|---|
| поддомен kaveos.com (имя уточнить у Maria) | корень репозитория: `/id/play/`, `/my/kocok/` … и `/play/`, `/gut/`, `/kocok/` (международные EN) |
| отдельный бесбрендовый домен | те же файлы; наружу должны смотреть только `/{geo}/trade/` и `/{geo}/learn/` — закрыть остальные пути правилом на сервере или 404 |

Если проще — два деплоя из одного репозитория с разными `include`-списками в `cp`.

## Что заполнить перед трафиком (`config.js`)
- `tracking.branded` / `tracking.unbranded` — GTM (предпочтительно) или GA4 + Ads + Meta Pixel ID. Пусто = тег не грузится.
- `signup` / `help` и `tracks.trader|learn.signup|help` — адреса CTA. Каждая кнопка добавляет `track`, `lang`, `geo`, `utm_*`, при заполненном поле — `contact`.
- `legal.branded` / `legal.unbranded` / `legal.company` — юрлицо в футере и в блоке «Кто мы».
- Meta domain verification: метатег `facebook-domain-verification` добавить в `<head>` всех `index.html` (или DNS TXT).

## Где что в коде
- `shared.js`: вверху `GEO` (языки, валюта, методы оплаты по гео), `UI` (yes/no и служебные слова по языку), `BRAND`, затем `C` — вся копи по трекам и языкам (en, id, ms, tl, pt, es, en_ng). Суммы в копи — токены `{MIN_DEP}`, `{AMT}`, `{AMT_RET}` …, заполняются из `GEO`.
- События аналитики: функция `ev()` → `dataLayer` (+ PostHog, если подключён). Список имён в README.
- Прототипы с панелью состояний (для дизайна, не для прода) живут в артефактах Claude, не здесь.
