## 📦 Export Documentation for Themeforest (Offline Package)

This project uses a custom automation script to export a specific theme's documentation into a single standalone HTML folder. The generated folder (`/documentation`) is fully optimized for offline use, removing security locks (CORS/SRI) so buyers can **double-click** `index.html` to open it locally.

### Prerequisites

Make sure you have installed the required Node.js dependencies before running the build command for the first time:

```bash
npm install
```

### How to Export

To compile and package a documentation folder for a specific product theme, follow these steps:

1. Open your terminal at the root of this project repository.
2. Run the interactive build automation script:
   ```bash
   npm run build:documentation
   ```
3. Use the **Up/Down arrow keys** on your keyboard to navigate through the list of folders found inside `/content`.
4. Press **Enter** on the target theme you wish to export (e.g., `teachflex-html`).

### What Happens Behind the Scenes?

The automation script will automatically execute the following tasks:

- 🧹 Deletes any existing `/documentation` output directory to prevent file caching issues.
- 🚀 Invokes `hugo build` targeting **only** your selected subdirectory via the `--contentDir` flag.
- 📦 Compresses code assets automatically using `--minify` to satisfy Themeforest performance guidelines.
- 🔒 Runs a global regex cleanup across all compiled HTML files to strip away `integrity="..."` and `crossorigin="..."` attributes. This guarantees the documentation loads instantly via the `file:///` protocol without triggering browser CORS errors.

### Distribution

Once completed, a folder named **`documentation`** will appear in your project root directory. Simply copy this entire folder and place it inside your final commercial `.zip` archive package for Themeforest.

⚠️ **Note:** Do not modify the main `config/_default/hugo.yaml` file manually, as the script injects relative path configurations dynamically at runtime to keep your remote GitHub Pages version untouched.
