# i-biza Residence Rama 9 rental page

A bilingual, single-page rental website for a studio at i-biza Residence. It uses plain HTML, CSS, and JavaScript so it works directly on GitHub Pages.

## Local preview

From this repository folder, run:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`. No install or build is required.

## Editing property information

- Edit the `PROPERTY` object near the top of `app.js` for rent, size, floor, phone, lease conditions, map destination, and the verified direct LINE URL.
- Edit `COPY.th` and `COPY.en` in `app.js` for bilingual descriptions, features, facilities, nearby places, gallery captions, and rental labels.
- When changing the property facts, update the static first-load text and SEO metadata in `index.html` as well. The static text makes the offer visible before JavaScript loads and to social preview crawlers.
- Replace images in `assets/images/` only with photos of the actual unit. `scripts/prepare-media.py` shows how the supplied originals were converted to WebP and stripped of EXIF/GPS metadata. It expects the originals in the parent folder, as supplied in this project workspace.
- The walkthrough is `assets/video/room-walkthrough.mp4`; video playback begins only after a visitor presses play.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys the repository root on every push to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The expected URL is `https://ramajittilearn-ctrl.github.io/Ibizacondo922/`.

All site assets use relative paths, so the page works below the repository URL path. The navigation uses same-page anchors and remains valid on refresh.

## Content sources

- Unit details, rent, conditions, and owner contact were supplied by the property owner.
- Building facilities: [official i-biza Residence facilities page](https://www.ibizarca.com/en/facilities.html).
- Nearby destinations: [official i-biza Residence location page](https://www.ibizarca.com/en/location.html). Travel times and distances are intentionally omitted because route conditions vary.
- The LINE URL was decoded from the supplied `line-qr.jpg` and is not an invented ID.

The supplied photo set does not include verified bathroom, balcony, or building facility photographs. The site therefore uses room photographs only and presents building facilities as illustrated icons.
