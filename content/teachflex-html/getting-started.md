---
title: Getting Started
weight: 20
type: docs
breadcrumbs: true
---

This section will help you unpack the ThemeForest download, understand the main folders, and open the Teachflex HTML template in your browser for the first time.

## Requirements

To work with Teachflex, you only need basic tools:

- A computer with a modern web browser (Chrome, Firefox, Edge, Safari).
- A code editor such as Visual Studio Code, Sublime Text, Atom, or similar.
- (Optional) A simple local web server for more accurate testing of links and assets, such as the **Live Server** extension for VS Code or any lightweight HTTP server.

No build tools (Node.js, Vite, SCSS compilers, etc.) are required to use the final template files.

## Downloading the files

After purchasing Teachflex on ThemeForest, follow these steps:

1. Log in to your ThemeForest account.
2. Go to **Downloads** and locate the **Teachflex - Online Education & Bootcamp HTML Template** item.
3. Click **Download** and choose **All files & documentation**.
4. Save the downloaded `.zip` file to your computer.

You will now have a compressed `.zip` file that contains the main template files and documentation.

## Extracting the package

1. Locate the downloaded `.zip` file on your computer.
2. Right‑click and select **Extract** / **Unzip** (or use your preferred archive tool).
3. After extraction, you will see a structure similar to:
   - `teachflex/` (or similar root folder name)
     - `html/` – Main HTML template files.
     - `documentation/` – Offline HTML documentation.

If your extracted folder name is slightly different, focus on the `html` and `documentation` folders.

## HTML folder structure

Open the `html` folder to find all template files that you will upload to your server:

### HTML pages:

- `index.html` - Main homepage.
- `about-us.html` - About page.
- `bootcamp.html` - Bootcamp listing page.
- `bootcamp-details.html` - Single bootcamp details page with registration form.
- `blog-list.html` - Blog listing page.
- `blog-details.html` - Single blog article page with comment form.
- `pricing.html` - Pricing and plans page.
- `career.html` - Careers and job opportunities page with application form.
- `testimonials.html` - Testimonials page.
- `faq.html` - Frequently Asked Questions page.
- `contact.html` - Contact page with AJAX contact form.
- `404-page.html` - Custom 404 error page.

### Assets folder:

- `assets/css/` – All CSS stylesheets (Bootstrap, Bootstrap Icons, Swiper, AOS, and `main.css`).
- `assets/js/` – All JavaScript files (`bootstrap.bundle.min.js`, `swiper-bundle.min.js`, `aos.js`, `jquery-3.7.1.min.js`, and `main.js`).
- `assets/fonts/` – Font files for Bootstrap Icons.
- `assets/img/` – All images and graphics used in the template.

### PHP Demo Files:

- `php` - The template includes demo PHP files to simulate form submissions. These files are provided for demonstration purposes only and do not send emails or store data. Included files:
  - `contact-form.php` - Contact form demo handler.
  - `registration-form.php` - Bootcamp registration form demo handler.
  - `career-form.php` - Career application form demo handler.
  - `comment-form.php` - Blog comment form demo handler.

These are the files you will customize and eventually upload to your hosting.

## Opening the template in your browser

To quickly preview the template:

1. Open the `html` folder.
2. Double‑click `index.html` to open it in your default browser.
3. Use the navigation menu (About, Bootcamp, Blog, Pricing, FAQ, Contact, etc.) to browse other pages.

For more accurate testing of links and paths, you can:

- Open the `html` folder in your code editor.
- Start a local server (for example, with the **Live Server** extension in VS Code).
- Open `index.html` via `http://localhost:...` in your browser.

## Viewing the offline documentation

The downloadable package also includes an offline copy of this documentation:

1. Go back to the root folder you extracted (for example, `teachflex/`).
2. Open the `documentation` folder.
3. Double‑click `index.html` (or the main documentation file).
4. Read the docs in your browser without an internet connection.

If this is your first time using an HTML template, continue with **Package Contents** and **Project Structure** to better understand all files before you start editing.
