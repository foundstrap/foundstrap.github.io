---
title: Customization
weight: 60
type: docs
breadcrumbs: true
cascade:
  type: docs
---

Learn how to customize Teachflex colors, typography, spacing, and layout to match your brand.

## Changing colors and theme

Primary colors are defined in assets/css/main.css:

### Primary color variables

```css
:root {
  --foundstrap-color-primary: #d9900f;
  --foundstrap-color-secondary: #e3e3e3;
  --foundstrap-color-text: #2a2a2a;
  --foundstrap-color-accent: #d9d30f;
  --foundstrap-color-primary-dark: #c3720b;
  --foundstrap-color-accent-dark: #c3af0b;
  --foundstrap-color-text-light: #626262;
  --foundstrap-color-white: #ffffff;
  --foundstrap-color-border: #c6c6c6;
  --foundstrap-color-transparent: #00000000;
  /* other tokens variable */
}
```

**To change colors:**

1. Open assets/css/main.css
2. Replace hex values (e.g. #2563eb → your brand color)
3. Save and refresh browser

### Quick color swaps

```css
/* Primary Button */
.btn-tf-primary {
  background-color: var(--foundstrap-color-primary);
  color: var(--foundstrap-color-white);
  border: none;
}

/* Footer */
#footer {
  color: var(--foundstrap-color-white);
  background-color: var(--foundstrap-color-text);
  border-radius: var(--foundstrap-border-radius-medium) var(--foundstrap-border-radius-medium) 0 0;
  margin-top: 24px;
  padding: 64px;
}
```

## Typography (Fonts)

Teachflex uses Google Fonts + system fonts. To change:

### Method 1: Google Fonts (Recommended)

1. Go to fonts.google.com
2. Pick your font family
3. Replace in `<head>` section:

```html
<!-- Google Fonts : Start here -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Georama:wght@400;500;600;700&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

4. Update CSS:

   ```css
   :root {
     --foundstrap-font-body: "Be Vietnam Pro", sans-serif;
   }

   body {
     font-family: var(--foundstrap-font-body);
   }
   ```

### Method 2: Custom font files

1. Add .woff2 files to assets/fonts/
2. Update main.css:
   ```css
   @font-face {
     font-family: "CustomFont";
     src: url("../fonts/customfont.woff2") format("woff2");
   }
   ```

## Header and Navbar customization

### Logo replacement

The log is in the header section of all HTML pages. To edit logo:

1. Find the `<header>` and `<ul class="navbar-brand ">` section in any HTML file
2. Edit the `<img>` src:

```html
<!-- Logo : Start here -->
<a class="navbar-brand d-flex align-items-center" href="index.html">
  <img src="assets/img/teachflex-logo.png" alt="TeachFlex Logo" class="p-0" />
</a>
<!-- Logo : End here -->
```

### Navbar background

```css
/* Header */
#header .navbar {
  background: var(--foundstrap-color-white);
}
```

## Footer customization

Footer content is in each HTML page footer section:

```html
<!-- Footer : Start Here -->
<footer id="footer">
  <div class="container-fluid px-0">
    <div class="row">
      <div class="col-xl-7">
        <div class="d-flex flex-column h-100 justify-content-between">
          <!-- Footer Logo Text : Start here -->
          <h3 class="tf-heading footer-logo m-xl-0 mb-4">TeachFlex</h3>
          <!-- Footer Logo Text : End here -->

          <!-- Footer Contact Information : Start here -->
          <ul class="list-unstyled footer-contact m-xl-0 mb-md-4">
            <li class="d-flex align-items-start mb-3">
              <i class="bi bi-geo-alt me-3 text-white"></i>
              <span> 2158 Madison Avenue Montgomery, AL 36107, United States </span>
            </li>
            <li class="d-flex align-items-start">
              <i class="bi bi-telephone me-3 text-white"></i>
              <a href="tel:+18003456789" class="text-decoration-none text-reset"> +1 (800) 345-6789 </a>
            </li>
          </ul>
          <!-- Footer Contact Information : End here -->
        </div>
      </div>
      <div class="col-xl-5">
        <div class="row flex-column flex-lg-row">
          <div class="col-xl-7">
            <!-- Footer Menu : Start here -->
            <ul class="list-unstyled d-flex flex-column gap-4 footer-menu m-xl-0 mb-md-4">
              <li><a href="about-us.html" class="footer-link">About Us</a></li>
              <li><a href="bootcamp.html" class="footer-link">Bootcamp</a></li>
              <li><a href="faq.html" class="footer-link">FAQ</a></li>
              <li><a href="contact.html" class="footer-link">Contact</a></li>
              <li><a href="pricing.html" class="footer-link">Pricing</a></li>
              <li><a href="testimonials.html" class="footer-link">Community Stories</a></li>
              <li><a href="blog-list.html" class="footer-link">Our Stories</a></li>
            </ul>
            <!-- Footer Menu : End here -->
          </div>
          <div class="col-xl-5">
            <!-- Footer CTA : Start here -->
            <div class="d-flex flex-column h-100 justify-content-lg-end align-items-start align-items-lg-end">
              <strong class="text-lg-end d-block mb-4 lh-base"> Build Your Career at TeachFlex. </strong>
              <a
                href="career.html"
                class="btn btn-tf-white btn--rotate-top-right  w-100 w-lg-auto"
                aria-label="Explore Careers"
              >
                <span class="btn-text">Join Us</span>
                <span class="btn-icon" aria-hidden="true">
                  <i class="bi bi-arrow-up-short"></i>
                </span>
              </a>
            </div>
            <!-- Footer CTA : End here -->
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <!-- Footer Divider : Start here -->
        <hr class="footer-divider" />
        <!-- Footer Divider : End here -->
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-xl-7">
        <!-- Footer Copyright : Start here -->
        <span class="lh-base d-block text-medium text-center text-xl-start m-xl-0 mb-4">
          &copy; All rights reserved 2026, <strong>Teachflex - Foundstrap Studio</strong>&nbsp;| Envato
        </span>
        <!-- Footer Copyright : End here -->
      </div>

      <div class="col-xl-5">
        <!-- Footer Social Media : Start here -->
        <ul class="footer-social list-unstyled d-flex justify-content-center justify-content-xl-end gap-3 mb-0">
          <li>
            <a
              class="tf-social-square"
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com"
              aria-label="Twitter"
            >
              <i class="bi bi-twitter-x"></i>
            </a>
          </li>
          <li>
            <a
              class="tf-social-square"
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com"
              aria-label="Instagram"
            >
              <i class="bi bi-instagram"></i>
            </a>
          </li>
          <li>
            <a
              class="tf-social-square"
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com"
              aria-label="LinkedIn"
            >
              <i class="bi bi-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              class="tf-social-square"
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtube.com"
              aria-label="YouTube"
            >
              <i class="bi bi-youtube"></i>
            </a>
          </li>
        </ul>
        <!-- Footer Social Media : End here -->
      </div>
    </div>
  </div>
</footer>
<!-- Footer : End Here -->
```

## Favicon and browser icons

Replace these files in assets/img/:

- favicon.png (32x32)
- apple-touch-icon.png (180x180)

Update <head>:

```html
<!-- Favicon : Start here -->
<link rel="shortcut icon" href="assets/img/favicon.png" />
```

## Testing your customizations

1. **Clear browser cache** (Ctrl+Shift+R)
2. **Test responsive** (F12 → device toolbar)
3. **Check contrast** with browser dev tools
4. **Validate CSS** at css-validator.org

## Reverting changes

To reset customizations:

1. Download fresh copy from ThemeForest
2. Replace assets/css/main.css and assets/js/main.js
3. Copy only your content changes from HTML files

Continue to **Components** for slider/animation customization, or **Deployment Guide** when ready to launch.
