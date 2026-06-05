# That Good Media Static Site

Static HTML/CSS/JS website ready for deployment on any static host.

## Entry Point

Use `index.html` as the homepage.

The old `tgm_homepage_mockup.html` file is kept only as a redirect for preview links created during design.

## Structure

- `index.html` - homepage
- `about.html`, `services.html`, `work.html`, `contact.html`, `academy.html` - main pages
- `project-*.html` - project detail pages
- `assets/css/home.css` - homepage-specific styles
- `assets/css/site.css` - shared inner-page styles
- `assets/js/home.js` - homepage counter animation
- `assets/images/` - logo assets

## Local Preview

```sh
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080/
```
