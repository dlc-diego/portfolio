# Diego De Los Cobos | Portfolio

A static professional portfolio built with semantic HTML, CSS, and a small script for navigation. No installation or build is required.

## Preview locally

Run `python3 -m http.server 4173 --bind 127.0.0.1` from the repository root and open `http://127.0.0.1:4173/`.

## Maintain the site

- Update section content in `index.html`, styling in `assets/site.css`, and navigation behavior in `assets/site.js`.
- Replace the desktop and mobile screenshot placeholders in the Somewhere case study with approved WebP images, descriptive alternative text, and the original dimensions. Add verified project details and demo or repository links alongside the screenshots.
- Replace the workshop and Hermes evidence placeholders with approved materials. Redact identifiers, workplace information, private messages, and credentials before adding any files. Update the architecture diagram only with verified integrations.
- To add a project, use an article under Selected work and describe its problem, current status, validated capabilities, and lessons. Keep proposed behavior identifiable.

## Deploy to GitHub Pages

In the GitHub repository, open **Settings → Pages** and set the source to **GitHub Actions**. The deploy workflow runs when changes reach `main` or when manually dispatched. It publishes only `index.html` and `assets/`. Check the deployment result in the Actions tab, then visit the Pages URL shown there.

The expected site address is `https://dlc-diego.github.io/portfolio/`. If the site moves, update `og:url` and `og:image` in the HTML head. Asset paths are relative so the site can be served under a repository path.
