---
title: Project Structure
weight: 40
type: docs
breadcrumbs: true
---

This section explains the organization and naming conventions within the `html` folder, so you know exactly where to find and edit different parts of the template.

## Overall structure

The `html` folder follows a standard static website structure:

```text
html/
├── index.html              # Homepage
├── [other HTML pages...]
├── php/                    # All PHP files
└── assets/                 # All static assets
    ├── css/
    ├── fonts/
    ├── img/
    └── js/
```

## HTML pages organization

All HTML pages follow consistent naming and structure:

- **Main pages** use descriptive names (`about-us.html`, `contact.html`)
- **Listing pages** end with `-list.html` (`blog-list.html`, `bootcamp.html`)
- **Detail pages** end with `-details.html` (`blog-details.html`, `bootcamp-details.html`)
- **Utility pages** have clear names (`404-page.html`, `pricing.html`)

Each HTML page has the same basic structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Meta tags, title, favicon -->
    <!-- CSS includes -->
  </head>
  <body>
    <!-- Header -->
    <!-- Main Wrapper -->
    <!-- Page content -->
    <!-- Footer -->
    <!-- JavaScript includes -->
  </body>
</html>
```

## Assets organization

All static assets are organized in the `assets` folder:
{{< filetree/container >}}
{{< filetree/folder name="assets" state="open" >}}
{{< filetree/folder name="css" state="open" >}}
{{< filetree/file name="bootstrap.min.css" >}}
{{< filetree/file name="bootstrap-icons.min.css" >}}
{{< filetree/file name="swiper-bundle.min.css" >}}
{{< filetree/file name="aos.css" >}}
{{< filetree/file name="main.css" >}}
{{< /filetree/folder >}}
{{< filetree/folder name="js" state="open" >}}
{{< filetree/file name="bootstrap.bundle.min.js" >}}
{{< filetree/file name="swiper-bundle.min.js" >}}
{{< filetree/file name="aos.js" >}}
{{< filetree/file name="jquery-3.7.1.min.js" >}}
{{< filetree/file name="main.js" >}}
{{< /filetree/folder >}}
{{< filetree/folder name="fonts" state="open" >}}
{{< filetree/file name="bootstrap-icons.woff" >}}
{{< filetree/file name="bootstrap-icons.woff2" >}}
{{< /filetree/folder >}}
{{< filetree/folder name="img" state="open" >}}
{{< filetree/file name="illustration-1-M23VGJ6.png" >}}
{{< filetree/file name="illustration-2-M23VGJ6.png" >}}
{{< filetree/file name="illustration-3-M23VGJ6.png" >}}
{{< filetree/file name="illustration-4-M23VGJ6.png" >}}
{{< filetree/file name="openpeeps-profile-1.png" >}}
{{< filetree/file name="openpeeps-profile-2.png" >}}
{{< filetree/file name="openpeeps-profile-3.png" >}}
{{< filetree/file name="openpeeps-profile-4.png" >}}
{{< filetree/file name="teachflex-logo.png" >}}
{{< filetree/file name="logoipsum-01.png" >}}
{{< filetree/file name="logoipsum-02.png" >}}
{{< filetree/file name="favicon.png" >}}
{{< filetree/file name="another image assets...jpg">}}
{{< /filetree/folder >}}
{{< /filetree/folder >}}
{{< /filetree/container >}}

## Key files to customize first

When making changes, start with these files:

1. **`assets/css/main.css`** – Primary custom stylesheet (colors, spacing, typography)
2. **`assets/js/main.js`** – Custom JavaScript (Global Initializer, Components, Vendor Initializer)
3. **`index.html`** – Homepage content and layout
4. **Images in `assets/img/`** – Replace with your own images (same dimensions recommended)

## JavaScript initialization

All JavaScript plugins are initialized in `assets/js/main.js`:

```javascript
(function($) {
  /*!
   * 02.1 Counter Animation
   */
  const initCounter = () => /* Counter Component */

  /*!
   * 02.2 Carousel Logos (Swiper)
   */
  const initCarousel = () => /* Carousel Component */

  /*!
   * 02.3 AJAX Forms Handler
   */
  const initAjaxForms = () => /* AJAX Forms Component */

  /*!
   * 02.4 Job Application Modal Handler
   */
  const initJobApplicationModal = () => /* Modal Component */

  /*!
   * 02.5 Tooltips
   */
  const initTooltips = () => /* Tooltips Component */

  /*!
   * 02.6 Copy Discount
   */
  const initCopyDiscount = () => /* Copy Discount Component */

  /*!
   * 01. Global Initializer
   */
  const TeachflexInit = () => {
    initCounter();
    initCarousel();

    // 03.1 AOS (Animate On Scroll) Initializer
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        offset: 120
      });
    }
    console.log("Teachflex is running ✅");
  };

  /*! Document Ready */
  $(function() {
    TeachflexInit();
  });
})(jQuery);
```

## Responsive breakpoints

Teachflex follows Bootstrap 5 breakpoints:

- XS <576px – Mobile portrait
- SM ≥576px – Mobile landscape
- MD ≥768px – Tablet portrait
- LG ≥992px – Tablet landscape/Desktop small
- XL ≥1200px – Desktop large
- XXL ≥1400px – Desktop extra large

## Next steps

Now that you understand the structure:

- Go to Template Usage Guide to learn how to edit pages and content
- Visit Customization to change colors, fonts, and layout
- Check Components for details on sliders, animations, and interactive elements
