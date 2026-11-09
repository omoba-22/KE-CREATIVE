# KE Creatives — Portfolio Website

Portfolio site for **Kemi Esther Kareem** (KE Creatives): social media strategist, content creator, graphic designer and video editor based in Lagos, Nigeria.

It is a plain **static website** (HTML, CSS, JavaScript) with no build step and no frameworks. You can open it by double-clicking `index.html`, and it deploys anywhere that serves static files (Vercel, Netlify, GitHub Pages).

## Pages

| File | Page | Contents |
|------|------|----------|
| `index.html` | Home | Hero with floating stats, client testimonial screenshots, banner image |
| `about.html` | About | Bio and photo, count-up stats, expertise, tools and platforms, selected works, brands, results screenshots, how to work with her |
| `services.html` | Services | Service cards with "Book This" buttons |
| `portfolio.html` | Portfolio | Tabbed gallery (Social Media, Graphic Design, Video Editing) with image/video lightbox |
| `contact.html` | Contact | Contact details and inquiry form |
| `thank-you.html` | Thank you | Shown after the contact form is sent |

All pages share the same navigation bar and footer.

## Project structure

```
index.html, about.html, services.html,
portfolio.html, contact.html, thank-you.html
css/
  base.css         variables (colours), reset, typography, buttons, eyebrow labels, scroll reveal
  layout.css       navbar and footer
  components.css   portfolio cards, testimonial screenshots, lightbox
  home.css         home page hero
  about.css        about page sections
  services.css     services page
  portfolio.css    filter tabs and portfolio grid
  contact.css      contact section and form
js/
  main.js          mobile menu and scroll reveal (every page)
  video.js         plays and pauses videos as they scroll into view
  lightbox.js      image and video lightbox
  portfolio.js     filter tabs and ?tab= links
  about.js         count-up stats and mobile brands slider
  contact.js       pre-selects the service from ?service= links
media/
  (design images, KE-photo.jpg, header.jpg)
  brands/          brand logos and social media project images
  tools/           tool and platform icons
  testimonials/    client message and results screenshots
  videos/          portfolio videos
```

### Which files each page loads

| Page | CSS | JS |
|------|-----|----|
| Home | base, layout, components, home | main, lightbox |
| About | base, layout, components, about | main, video, lightbox, about |
| Services | base, layout, services | main |
| Portfolio | base, layout, components, portfolio | main, video, lightbox, portfolio |
| Contact, Thank you | base, layout, contact | main, contact |

Each CSS file keeps its own `@media` queries at the bottom. Keep mobile rules in the same file as the desktop rules they change. That way they can't be overridden by a later file.

## How things connect

- The **navbar** links point to real pages. The current page has the `active` class.
- The **"Book This"** buttons on Services link to `contact.html?service=...`, which auto-selects that service in the contact form.
- The **"View all"** links on the About page link to `portfolio.html?tab=social`, `?tab=design` and `?tab=video`, which open the matching tab.
- The **contact form** submits through [FormSubmit](https://formsubmit.co/) to `kareemkemiesther8@gmail.com`. The `_next` field should point to the live `thank-you.html` URL.
- Clicking a design, video or testimonial screenshot opens it in the **lightbox**. Close it with the ✕ button, by clicking the dark background, or with Esc.

## Editing the site

1. Edit the relevant `.html` file for content, or the matching file in `css/` for styling.
2. To add a portfolio item, copy an existing `.portfolio-card` block in `portfolio.html`. Set its `data-category` to `social`, `design` or `video`. Put new images or videos in the right `media/` subfolder first.
3. To add a testimonial screenshot, copy a `<figure class="shot">` block and add the image to `media/testimonials/`.
4. To add a brand or tool, copy an existing `.brand` or `.tool` block. If the logo file is missing, a letter shows instead.
5. Save, then commit and push:
   ```bash
   git add -A
   git commit -m "Describe your change"
   git push
   ```
   If the repo is connected to Vercel, the live site updates automatically.

## Tips

- **Filenames matter.** Hosting servers treat `Photo.JPG` and `photo.jpg` as different files. Keep names lowercase with no spaces (use `food-arena.jpg`, not `food arena.jpg`), and make sure the name in the HTML matches exactly.
- **Keep videos small.** Aim for under about 5 MB each, because the portfolio loads several at once. Compress them with HandBrake before adding them.
- **Test on phones.** Check the pages at 320px, 375px, 768px and desktop width (F12, then the device toolbar).

## Local preview

Open `index.html` in a browser. No server is required. To test it the way it behaves online, run `python -m http.server` in this folder and visit `http://localhost:8000`.

## Deployment

Hosted as a static site on **Vercel**:
- Framework preset: Other
- Build command: none
- Output directory: repository root (leave blank)