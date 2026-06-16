---
title: Template Usage Guide
weight: 50
type: docs
breadcrumbs: true
cascade:
  type: docs
---

This guide shows you how to edit the most common elements in Teachflex: navigation, content sections, images, buttons, and forms.

## Editing the navigation menu

The main navigation is in the header section of all HTML pages. To edit menu items:

1. Find the `<nav>` or `<ul class="navbar-nav ">` section in any HTML file
2. Edit the `<a>` links:

```html
<li class="nav-item ">
  <a class="nav-link" href="index.html">Home</a>
</li>
<li class="nav-item ">
  <a class="nav-link" href="about-us.html">About Us</a>
</li>
<li class="nav-item ">
  <a class="nav-link" href="bootcamp.html">Bootcamp</a>
</li>
<li class="nav-item dropdown active">
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"> Pages </a>
  <ul class="dropdown-menu">
    <li>
      <a class="dropdown-item" href="blog-list.html">Blog List</a>
    </li>
    <li>
      <a class="dropdown-item" href="blog-details.html">Blog Details</a>
    </li>
    <li>
      <a class="dropdown-item" href="bootcamp-details.html">Bootcamp Details</a>
    </li>
    <li>
      <a class="dropdown-item" href="testimonials.html">Testimonials</a>
    </li>
    <li>
      <a class="dropdown-item" href="pricing.html">Pricing</a>
    </li>
    <li>
      <a class="dropdown-item" href="career.html">Career</a>
    </li>
    <li>
      <a class="dropdown-item" href="faq.html">FAQ</a>
    </li>
    <li>
      <a class="dropdown-item active-sub" href="404-page.html">404 Page</a>
    </li>
  </ul>
</li>
<li class="nav-item ">
  <a class="nav-link" href="contact.html">Contact</a>
</li>
```

3. Add new menu items by copying the `<li>` structure
4. Update href attributes to match your page filenames

## Editing hero section content

Most pages have a hero section. Common edits:

### Hero title and subtitle

```html
<div class="col-xl-10">
  <h1 class="hero-title mb-4 mt-lg-3" data-aos="fade-down">Teaching Skills For Everyone</h1>
</div>

<div class="col-lg-7">
  <p class="lead mb-5 fw-normal lh-base text-white" data-aos="fade-down">
    Upgrade yourself for your dream job. Despite your background, despite your condition, we believe in inclusivity.
  </p>
</div>
```

### Hero image

Replace assets/img/openpeeps-group.png with your image:

```html
<img
  src="assets/img/openpeeps-group.png"
  class="img-fluid tf-hero-image mt-5"
  alt="Inclusive learning illustration"
  data-aos="fade-up"
  data-aos-delay="150"
/>
```

## Editing bootcamp cards

Bootcamp cards appear on homepage, bootcamp listing, etc.:

```html
<div class="tf-card card bg-white rounded-md p-4 mb-lg-0">
  <a href="bootcamp-details.html">
    <img src="assets/img/image-3BLQ62B.jpg" alt="Bootcamps Image Thumbnail" class="rounded-sm img-fluid mb-4" />
  </a>
  <div class="tf-card-meta d-flex align-items-center mb-4">
    <span class="tf-bg-primary tf-heading tf-heading-sm p-2 text-white me-3 rounded-xs"> 4 Weeks </span>
    <span class="tf-bg-primary tf-heading tf-heading-sm p-2 text-white rounded-xs"> 6 Sessions </span>
  </div>
  <h3 class="mb-4 tf-heading tf-heading-md">
    <a href="bootcamp-details.html">Accessibility Teaching Media Bootcamp 2025</a>
  </h3>
  <p class="mb-4">
    A hands-on program designed for educators and trainers who want to create inclusive, accessible, and engaging
    learning materials. This bootcamp covers accessibility principles, design strategies, and toolkits you can use right
    away to transform your teaching content.
  </p>
  <a
    href="bootcamp-details.html"
    class="btn btn-tf-accent btn-block justify-content-center fs-5"
    aria-label="Learn More"
  >
    <span class="btn-text">Learn More</span>
    <span class="btn-icon"><i class="bi bi-arrow-right"></i></span>
  </a>
</div>
```

**To customize:**

- Replace src image path
- Edit `<h3>` bootcamp title
- Update duration, description, and button text/link

## Editing images and media

All images use relative paths:

```html
<img src="assets/img/image-TRHEESM.jpg" alt="Course instructor" class="img-fluid" />
<img src="assets/img/logos/teachflex-logo.png" alt="Teachflex" class="logo" />
```

**Tips:**

- Keep original image dimensions to avoid layout breaks
- Update alt attributes for accessibility
- Use WebP or optimized JPG for better performance

## Editing buttons and CTAs

Buttons use Bootstrap classes with custom styles:

```html
<!-- Button -->
<a href="#" class="btn btn-tf-dark w-100 w-lg-auto" aria-label="Get Started">
  <span class="btn-text">Get Started</span>
</a>

<a href="#" class="btn btn-tf-outline-white w-100 w-lg-auto" aria-label="Read More">
  <span class="btn-text">Read More</span>
</a>

<!-- Button with icon -->
<a
  href="#"
  class="btn btn-tf-white btn--rotate-top-right  w-100 w-lg-auto"
  aria-label="Apply to become an instructor at TeachFlex"
>
  <span class="btn-text">Apply Now</span>
  <span class="btn-icon" aria-hidden="true">
    <i class="bi bi-arrow-up-short"></i>
  </span>
</a>

<!-- CTA Button -->
<a href="#" class="btn btn-tf-dark w-100 w-lg-auto" aria-label="Join Bootcamp">
  <span class="btn-text">Join the Bootcamp</span>
</a>
```

**Available button classes:**
`.btn-tf-primary`, `btn-tf-secondary`, `btn-tf-dark`, `btn-tf-outline-white`, `btn-tf-accent`, `btn-tf-accent-soft`, `btn-tf-white`, and other bootstrap button class

## Editing testimonials

Testimonial sliders use Swiper:

```html
<div class="tf-card card p-4 bg-white rounded-md">
  <div class="d-flex mb-3">
    <div class="flex-shrink-0">
      <img src="assets/img/image-PZAMB2Y.jpg" alt="Testimonial author" class="rounded-circle" width="48" height="48" />
    </div>
    <div class="flex-grow-1 ms-3">
      <p class="m-0">James Rodriguez</p>
      <span class="text-medium tf-text-color-light">High School Teacher</span>
    </div>
  </div>
  <p class="text-medium mb-0">
    I love how I can learn at my own pace while still feeling connected to my instructors. TeachFlex makes online
    learning engaging and easy to follow
  </p>
</div>
```

## Working with sections

Each page is built from reusable sections. Common sections:

- **Hero** - Full-width banner (edit title, subtitle, CTA)
- **Features** - 3-6 column feature grid
- **Bootcamp** - Bootcamp cards grid
- **Testimonials** - Swiper slider
- **CTA** - Call-to-action banner
- **Footer** - Contact info, links, social

To reorder sections, cut/paste entire `<section>` blocks.

## Adding new pages

1. Copy any existing HTML page (e.g. contact.html)
2. Rename the file (e.g. gallery.html)
3. Update the `<title>` tag
4. Edit page content
5. Add link to navigation menu

## Previewing changes

After editing:

1. Save all files
2. Refresh browser (Ctrl/Cmd + R)
3. Test on different screen sizes (F12 → Responsive mode)

## Common editing workflow

1. **Start with homepage** (index.html)
2. **Edit main.css** for colors/fonts
3. **Replace images** in assets/img/
4. **Update content** in relevant sections
5. **Test navigation** across all pages
6. **Preview on mobile**

Continue to **Customization** to learn about advanced styling changes, or **Components** for detailed plugin documentation.
