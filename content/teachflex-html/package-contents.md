---
title: Package Contents
weight: 30
type: docs
breadcrumbs: true
---

This section provides a complete overview of what is included in your Teachflex download package.

## Download package structure

After extracting the ZIP file from ThemeForest, you will see:

```text
teachflex/
├── html/           # Main HTML template files (upload to server)
└── documentation/  # Offline HTML documentation
```

## HTML folder contents

The `html` folder contains everything needed to run the website:

{{< filetree/container >}}
{{< filetree/folder name="html">}}
{{< filetree/folder name="assets" state="open" >}}
{{< filetree/folder name="css" state="closed" >}}
{{< filetree/file name="bootstrap.min.css" >}}
{{< filetree/file name="bootstrap-icons.min.css" >}}
{{< filetree/file name="swiper-bundle.min.css" >}}
{{< filetree/file name="aos.css" >}}
{{< filetree/file name="main.css" >}}
{{< /filetree/folder >}}
{{< filetree/folder name="js" state="closed" >}}
{{< filetree/file name="bootstrap.bundle.min.js" >}}
{{< filetree/file name="swiper-bundle.min.js" >}}
{{< filetree/file name="aos.js" >}}
{{< filetree/file name="jquery-3.7.1.min.js" >}}
{{< filetree/file name="main.js" >}}
{{< /filetree/folder >}}
{{< filetree/folder name="fonts" state="closed" >}}
{{< filetree/file name="bootstrap-icons.woff" >}}
{{< filetree/file name="bootstrap-icons.woff2" >}}
{{< /filetree/folder >}}
{{< filetree/folder name="img" state="closed" >}}
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
{{< filetree/folder name="php" state="open" >}}
{{< filetree/file name="contact-form.php" >}}
{{< filetree/file name="registration-form.php" >}}
{{< filetree/file name="career-form.php" >}}
{{< filetree/file name="comment-form.php" >}}
{{< /filetree/folder >}}
{{< filetree/file name="index.html" >}}
{{< filetree/file name="about-us.html" >}}
{{< filetree/file name="bootcamp.html" >}}
{{< filetree/file name="bootcamp-details.html" >}}
{{< filetree/file name="blog-list.html" >}}
{{< filetree/file name="blog-details.html" >}}
{{< filetree/file name="pricing.html" >}}
{{< filetree/file name="career.html" >}}
{{< filetree/file name="testimonials.html" >}}
{{< filetree/file name="faq.html" >}}
{{< filetree/file name="contact.html" >}}
{{< filetree/file name="404-page.html" >}}
{{< /filetree/folder >}}
{{< /filetree/container >}}

### File summary

- **HTML Pages:** 11 files
- **CSS:** 5 files (Bootstrap v5.3.8, Swiper v12.0.3, AOS, custom `main.css`)
- **JavaScript:** 5 files (Bootstrap bundle, Swiper, AOS, jQuery, custom `main.js`)
- **Fonts:** 2 files (Bootstrap Icons)
- **Images:** 70+ files (Image `.jpg`, `.png`)
- **PHP:** 4 files

## Documentation folder

The `documentation` folder contains the offline HTML version of this documentation:

```text
documentation/
├── index.html
├── assets/     (CSS, JS, images for docs)
└── other documentation pages...
```

Double-click `index.html` to read docs offline.

## What is NOT included

- Development source files (SCSS, Vite config, Nunjucks templates)
- Backend files (Node.js, database)
- Third-party CDN dependencies (all assets are local files)

## Production ready

The entire `html` folder is production-ready. Upload it directly to your web hosting account without any build process.

Continue to **Project Structure** to understand the organization within the `html` folder, or **Template Usage Guide** to start editing content.
