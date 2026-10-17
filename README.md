# MedLearn

MedLearn is a static, offline-capable medical learning web app. The published page is a single `index.html` file with CSS, JavaScript, and images inlined, so it opens from disk and from GitHub Pages.

Live site: https://ahmed0011-c.github.io/medlearn/

GitHub Pages deploys the `main` branch from the repository root. An empty `.nojekyll` file is at the root so Pages serves the files as-is.

## Folder layout

- `index.html` — built single-file app (the Pages entry point)
- `src/` — sources: `shell.html`, `app.css`, `data.js` (glossary and `COURSE`), `lesson5.js` (module 5), `app.js`
- `build.py` — rebuilds `index.html` from `src/` and inlines `adrenal_lab.jpg`
- `adrenal_lab.jpg` — illustration source embedded by the build
- `images/` — place for lesson illustrations (see `image-requests.md`)
- `image-requests.md` — prompts for Module 5 illustrations
- `.nojekyll` — disables Jekyll processing on GitHub Pages

## Modules

- **CBL 5. Case: Adrenal insufficiency (Schmidt syndrome)** — case-based module (`src/cbl5_glossary.js`, `src/cbl5_steps1.js`, `src/cbl5_steps2.js`, `src/cbl5_data.js`, `src/cbl5_widgets.js`)
- **2.2 Adrenal insufficiency** — theory module in the Adrenal disorders chapter (`src/d2_glossary.js`, `src/d2_steps1.js`, `src/d2_steps2.js`, `src/d2_data.js`, `src/d2_widgets.js`)

## Add a module

1. Add a module data object in `src/`, in the same shape as `M5` in `src/lesson5.js`.
2. In `src/data.js`, set `built: true` on that module inside `COURSE.modules`.
3. Run `python3 build.py` from any working directory. The script resolves paths from its own file location and writes `index.html` next to itself.

## Images

`build.py` base64-inlines `adrenal_lab.jpg`, so the built page does not request that file at runtime.

New illustrations are listed in `image-requests.md`. For each item: generate the image from its prompt, save it to the given filename under `images/`, commit, and tick the checkbox. Prompts ask for atlas-style realistic medical illustrations with no text in the image.
