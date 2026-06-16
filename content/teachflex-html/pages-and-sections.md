---
title: Pages & Sections
weight: 80
type: docs
breadcrumbs: true
cascade:
  type: docs
---

Overview of all 11 HTML pages and their main sections, so you know what content to edit where.

## Page overview

| Page            | Filename              | Purpose             | Key sections                                                  |
| --------------- | --------------------- | ------------------- | ------------------------------------------------------------- |
| Homepage        | index.html            | Main landing page   | Hero, Features, Bootcamps, Testimonials, CTA                  |
| About Us        | about-us.html         | Company story       | Page Title, Team, Our Values, Timeline, Achievement           |
| Bootcamps       | bootcamp.html         | Course listing      | Page Title, Categories, Featured Bootcamp, CTA                |
| Bootcamp Detail | bootcamp-details.html | Single course       | Page Title, Curriculum, Instructor, Reviews, CTA              |
| Blog List       | blog-list.html        | Articles listing    | Page Title, Categories, Recent posts, Sidebar                 |
| Blog Detail     | blog-details.html     | Single article      | Page Title, Content, Related posts, CTA                       |
| Pricing         | pricing.html          | Plans comparison    | Page Title, Pricing tables, FAQ, CTA                          |
| Career          | career.html           | Job Vacancy         | Page Title, Job List, Modal Form                              |
| Testimonials    | testimonials.html     | Social proof        | Page Title, Testimonials, Success Story, Trusted Partner, CTA |
| FAQ             | faq.html              | Questions & Answers | Page Title, Accordion FAQ, CTA                                |
| Contact         | contact.html          | Contact form        | Page Title, Contact info, Map, Form                           |
| 404             | 404-page.html         | Error page          | Error message, CTA to Home                                    |

## Reusing sections across pages

Sections use consistent classes:

```html
<!-- Main Wrapper -->
<main class="main-wrapper">
  <section class="pb-4" data-aos="fade-in">
    <!-- Page Title Here -->
  </section>

  <section class="pb-4" data-aos="fade-in">
    <!-- Paget Content Here -->
  </section>
</main>
<!-- Main Wrapper : End Here -->
```

**To reuse:**

1. Copy entire `<section>` block
2. Paste to target page
3. Update content/images
4. Adjust section ID if needed

## Page creation tips

**New course page:** Copy `bootcamp-details.html` → `your-course.html`
**New blog category:** Copy `blog-list.html` → `category-webdev.html`
**Landing page:** `Copy index.html` → `promo-launch.html`

Continue to **Deployment Guide** for hosting, or **FAQ & Troubleshooting** for common issues.
