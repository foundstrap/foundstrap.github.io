---
title: Deployment Guide
weight: 90
type: docs
breadcrumbs: true
cascade:
  type: docs
---

Step-by-step instructions to deploy Teachflex to any web hosting service.

## What you need to deploy

- **Files:** Entire html folder from your download
- **Web hosting** with FTP access (99% of hosts work)
- **FTP client** (FileZilla, Cyberduck, or hosting file manager)
- **Domain name** (optional)

## Preparation checklist

Before uploading:

- [ ] Replace placeholder images in assets/img/
- [ ] Update contact info, social links, email
- [ ] Customize colors/fonts in main.css
- [ ] Test all pages locally (Live Server)
- [ ] Update favicon.png

## Method 1: FTP Upload (Recommended)

### Step 1: Connect to your hosting

1. Open FileZilla (or your FTP client)
2. Enter your hosting credentials:
   - **Host:** ftp.yourdomain.com or server IP
   - **Username:** your-ftp-username
   - **Password:** your-ftp-password
   - **Port:** 21

### Step 2: Upload files

1. Navigate to your hosting public_html or www folder
2. **Option A - Root domain (yourdomain.com):**
   - Upload entire html folder contents directly to public_html
3. **Option B - Subfolder (yourdomain.com/teachflex):**
   - Create teachflex folder
   - Upload entire html folder contents inside

```text
public_html/
├── index.html ← from html/index.html
├── about-us.html ← from html/about-us.html
├── assets/ ← from html/assets/
├── php/ ← from html/php/
└── ... other files
```

### Step 3: Verify

1. Visit yourdomain.com (or yourdomain.com/teachflex)
2. Check all pages load
3. Test mobile responsiveness
4. Verify images/scripts load

## Method 2: Hosting Control Panel

Most hosts (cPanel, Plesk) have File Manager:

1. Login to cPanel → File Manager
2. Navigate to public_html
3. Upload html folder contents (Extract ZIP directly)
4. Or drag & drop all files from html folder

## Method 3: GitHub Pages (Free)

1. Create GitHub repository
2. Upload html folder contents
3. Go to Settings → Pages
4. Source: Deploy from branch main
5. Visit username.github.io/repo

## CDN & Performance (Optional)

### Cloudflare (Recommended - Free)

1. Add domain to Cloudflare
2. Change nameservers at registrar
3. Enable "Auto Minify" for HTML/CSS/JS
4. Enable Polish (image optimization)

## Custom domain setup

### Root domain (yourdomain.com)

```text
public_html/
├── index.html ← Homepage
├── assets/ ← All assets
├── php/ ← All php
└── other pages
```

### Subdomain (learn.yourdomain.com)

```text
public_html/learn/
├── index.html
├── assets/
├── php/
└── other pages
```

## HTTPS/SSL

**Most hosts provide free SSL:**

1. cPanel → SSL/TLS → Manage SSL Sites
2. Auto-install Let's Encrypt certificate
3. Force HTTPS redirect

**Cloudflare:** Enable "Always Use HTTPS"

## Common hosting providers

| Provider   | Upload Method       | Free SSL |
| ---------- | ------------------- | -------- |
| Hostinger  | cPanel File Manager | ✅       |
| Bluehost   | cPanel File Manager | ✅       |
| SiteGround | File Manager        | ✅       |
| Namecheap  | cPanel              | ✅       |
| GoDaddy    | File Manager        | ✅       |

## Troubleshooting deployment

**Images not loading:**

```text
❌ Wrong: /assets/img/logo.png
✅ Correct: assets/img/logo.png (relative path)
```

**404 on subpages:**

- Check filename case (about-us.html vs About-Us.HTML)
- Verify links use relative paths

**Carousels broken:**

- Check console (F12) for JS errors
- Verify assets/js/ files uploaded

## Local preview before deployment

**VS Code + Live Server:**

1. Install "Live Server" extension
2. Right-click index.html → "Open with Live Server"
3. http://127.0.0.1:5500

**Python server:**

```bash
cd html
python -m http.server 8000
```

Visit http://localhost:8000

## Next steps after deployment

1. **Submit to Google Search Console**
2. **Add to Google Analytics**
3. **Test contact form**
4. **Check mobile speed** (PageSpeed Insights)
5. **Backup files**

Continue to **FAQ & Troubleshooting** or **Source & Credits** for licensing information.
