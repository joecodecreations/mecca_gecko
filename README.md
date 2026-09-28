# Mecca Gecko website

Public marketing, support, purchase information, privacy, terms and party-invite pages for Mecca Gecko. Plain HTML/CSS/JS hosted through GitHub Pages at https://www.meccagecko.com (keep `CNAME` and `.nojekyll`).

## Preview

Run `python3 -m http.server 8766 --bind 127.0.0.1` from this directory, then open http://127.0.0.1:8766. No build or dependencies are required.

## Current state (September 28, 2026 refresh)

- **Launch:** Mecca Gecko 0.2.0 is live on the App Store (id 6801449754, released September 26, 2026). The homepage, header and support FAQ link to `https://apps.apple.com/us/app/mecca-gecko/id6801449754`. Android is not published; do not advertise Google Play until it is.
- **Content source of truth is the game repo** (`~/projects/mecca-gecko`): maps in `scripts/levels/map_catalog.gd`, characters in `scripts/meta/skins.gd`, emotes in `scripts/meta/emotes.gd`, powerups in `scripts/meta/powerups.gd`, diamond packs in `scripts/meta/packs.gd`. The homepage roster (34 characters: 22 hiders, 12 seekers) and emote list (11) were generated from those catalogs. A few catalog blurbs that read as developer notes are overridden on the site only.
- **Modes:** Hide and Paint, Prop Hunt, Red vs Blue and Infection. Mini games (Neon Rally, Prism Breaker, Star Dodge) are for seekers during the hide phase.
- **Features called out:** invite links (`join.html`), locked rooms with a 4-digit PIN, FILL: HUMANS ONLY, Game Clips/Clip Studio, Game Center, optional proximity voice.
- **Prices:** the site gives in-game diamond costs and pack sizes, but no dollar prices. Apple bills localized prices shown in the app.

## Assets

All images are WebP delivery copies; originals stay in the game repo.

| Folder | Source |
|---|---|
| `assets/maps/<map>/` | Real in-game renders from `tools/map_review/map_review.tscn --quality=2` (Cinematic), captured Sept 28, 2026 after the Sept 27 map glow-up. `*-sm.webp` are 480px thumbnails. `waiting_room` is the `holding_area` lobby. |
| `assets/characters/` | `assets/characters/<folder>/<folder>_card.png`, 360px, transparent |
| `assets/emotes/` | `assets/ui/emotes/icon_<id>.png` |
| `assets/loading/` | Loading-screen art, `assets/ui/loading/load_*.jpg` (promotional, not gameplay) |
| `assets/posters/` | `assets/promo/ios/poster_*.png` |
| `assets/modes/` | `assets/ui/modes/*.png` |
| `assets/shots/` | App Store screenshots from `website/store/out/iphone_6_9/` |
| `assets/og.jpg` | 1200×630 crop of `load_castle_party.jpg` |

To refresh the map renders, from the game repo:

```sh
GODOT_NOFOCUS=1 godot --path . --audio-driver Dummy res://tools/map_review/map_review.tscn -- \
  --map=<gecko_house|palm_island|castle_keep|conservatory|holding_area> --out=/abs/dir --tag=site --quality=2
```

## Party invites

`join.html` plus `.well-known/apple-app-site-association` and `.well-known/assetlinks.json` back the in-game COPY INVITE LINK button (`join.html?code=XXXXXX&invite=<token>` → `meccagecko://join/CODE`). Keep them in sync with `website/join.html` in the game repo. Do not rename or move these files.

## Legal

Privacy and terms text was not changed in the September 28 refresh. Recheck disclosures if services, invite tokens, locked rooms or retention change. Operator details and rights clearance still require owner acceptance.

## Publication

Commit to `main` and push. GitHub Pages serves the root. After publishing, check the homepage, support.html, privacy.html, terms.html, upgrade.html, join.html?code=ABCDEF and a missing URL. Cache-version `css/site.css` and `js/site.js` (`?v=YYYYMMDD`) on every release.

## Verification

Check all local image/link/fragment targets and page titles. Review desktop and 390px mobile layouts, keyboard focus, roster tabs (arrow keys), FAQ expansion, the screenshot viewer and reduced motion.

Reference guidance: [Apple restore purchases](https://support.apple.com/en-us/108096), [Apple refunds](https://support.apple.com/en-us/118223).
