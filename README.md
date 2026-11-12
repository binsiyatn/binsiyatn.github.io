# Binsiya T.N | Embedded Software Engineer Portfolio

Personal portfolio site: https://binsiyatn.github.io

Plain HTML, CSS and JavaScript. No build step and no frameworks.

## Structure

```
index.html                    page markup and SEO tags
css/style.css                 styles, light and dark themes
js/main.js                    content data and page behavior
assets/                       resume PDF and images
.github/workflows/deploy.yml  deploys to GitHub Pages on every push to main
```

## Edit content

All text lives in `js/main.js`:

- `CONFIG` holds the GitHub link and the resume link.
- `STATS`, `PROJ`, `JOBS` and `SK` hold the impact numbers, projects, experience and skills.

## Run locally

Open the folder in VS Code and use the Live Server extension on `index.html`.

## Deploy

Push to `main`. The GitHub Actions workflow publishes the site automatically.
In the repo, open Settings, then Pages, and set Source to "GitHub Actions" (one time only).
