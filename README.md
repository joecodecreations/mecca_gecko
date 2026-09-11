# Mecca Gecko website

Public marketing, support, purchase information, privacy, and terms for Mecca Gecko. Plain HTML/CSS hosted through the existing GitHub Pages custom domain at https://www.meccagecko.com.

## Preview

Run `python3 -m http.server 8766 --bind 127.0.0.1` from this directory, then open http://127.0.0.1:8766. No build or dependencies are required.

## Content and launch

The September 11 refresh uses the game project's character/emote/map artwork and September 7 in-game captures. Artwork is identified separately from gameplay. WebP assets are resized delivery copies; originals remain in the private game repository. Existing social-preview artwork is preserved.

The homepage intentionally says coming soon: Apple's public US lookup for app 6801449754 returned no results on September 11, 2026. When the listing is publicly available, update the homepage launch panel, header action, and support availability answer with the verified App Store link. Do not advertise a release date or purchase prices before confirmation.

All launch maps are included. The retired map Upgrade is not sold. Keep `upgrade.html` as the purchase-information URL for compatibility. Direct Apple non-consumables and device-local diamond purchases have different restoration rules.

Legal/support content was reconciled with the game source and existing September 11 privacy/release records. Operator details, rights clearance, final Apple privacy disclosures, and actual deletion behavior still require owner acceptance; this website update does not certify the game for release. Recheck disclosures if services or retention change.

## Publication

Use the existing repository's GitHub Pages publishing flow. Publishing is authorized for this refresh: commit to `main` and push to the existing GitHub remote; GitHub Pages serves the root. Preserve CNAME and .nojekyll. Check homepage, support.html, privacy.html, terms.html, upgrade.html, and a nested missing URL after publication.

## Verification

Check all local image/link/fragment targets and page titles. Review desktop and 390px mobile layouts, keyboard focus, FAQ expansion, screenshot links, and reduced-motion support. Cache-version the shared CSS when releasing updates.

Reference guidance: [Apple restore purchases](https://support.apple.com/en-us/108096), [Apple refunds](https://support.apple.com/en-us/118223), and [Firestore asynchronous TTL deletion](https://firebase.google.com/docs/firestore/ttl).

Dark-theme refresh: heroes use the game’s `assets/ui/loading/load_standoff.jpg`, `load_seeker_squad.jpg`, and `load_toy_shelf.jpg`. Map images use real game captures from the house gameplay capture, Palm village review, Castle medieval hall review, and Conservatory orangery review. Loading artwork is decorative promotional art, distinct from map/gameplay captures.
