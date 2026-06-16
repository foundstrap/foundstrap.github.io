import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import inquirer from "inquirer";

const contentDir = path.join(process.cwd(), "content");

// 1. Ambil daftar folder di dalam /content (mengabaikan file individual seperti _index.md)
const getSubfolders = (source) => {
  return fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && !dirent.name.startsWith("."))
    .map((dirent) => dirent.name);
};

async function run() {
  try {
    const folders = getSubfolders(contentDir);

    if (folders.length === 0) {
      console.log("❌ Tidak ada folder dokumentasi di dalam /content");
      return;
    }

    const choiceItems = folders.map((folder) => ({
      name: folder,
      value: folder,
    }));

    // 2. Tampilkan menu pilihan tema
    const answers = await inquirer.prompt([
      {
        type: "select",
        name: "selectedFolder",
        message: "Pilih dokumentasi tema yang ingin di-build:",
        choices: choiceItems,
      },
    ]);

    const folderTarget = answers.selectedFolder;

    // 3. PENGECEKAN & PERCABANGAN: Cek apakah folder "documentation" sudah ada
    if (fs.existsSync("documentation")) {
      console.log(`\n⚠️  PENTING: Folder "documentation" sudah ada di direktori Anda.`);

      // Tampilkan pertanyaan konfirmasi Y/N
      const confirmAnswer = await inquirer.prompt([
        {
          type: "confirm",
          name: "shouldDelete",
          message: "Apakah Anda ingin menghapus folder tersebut dan melanjutkan proses export?",
          default: false, // Nilai default adalah No demi keamanan
        },
      ]);

      // Jika user memilih 'No' (false), batalkan proses ekspor
      if (!confirmAnswer.shouldDelete) {
        console.log("\n❌ Proses export DICANCEL oleh pengguna. Folder lama tidak diubah.");
        return;
      }

      // Jika user memilih 'Yes' (true), hapus folder lama
      console.log('🗑️  Menghapus folder "documentation" lama...');
      fs.rmSync("documentation", { recursive: true, force: true });
    }

    console.log(`\n🚀 Memulai build untuk tema: ${folderTarget}...`);

    // 4. Jalankan Hugo Build secara dinamis sesuai folder yang dipilih
    const hugoCmd = `hugo build --baseURL="./" --minify --destination="documentation" --contentDir="content/${folderTarget}"`;
    execSync(hugoCmd, { stdio: "inherit" });

    // 5. Validasi Otomatis: Hapus atribut 'integrity' dan 'crossorigin' yang memicu CORS offline
    console.log("🧹 Menjalankan validasi pembersihan tag pengaman (CORS & SRI)...");
    cleanHtmlFiles(path.join(process.cwd(), "documentation"));

    console.log(`\n✅ BERHASIL! Folder "documentation" siap dibungkus ke dalam ZIP Themeforest.`);
    console.log(`📂 Jalur file: ${path.join(process.cwd(), "documentation", "index.html")}`);
  } catch (error) {
    console.error("❌ Terjadi kesalahan saat proses build:", error.message);
  }
}

// Fungsi rekursif untuk membersihkan atribut pemicu CORS di semua file HTML hasil ekspor
function cleanHtmlFiles(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filename = path.join(dir, file);
    const stat = fs.lstatSync(filename);

    if (stat.isDirectory()) {
      cleanHtmlFiles(filename);
    } else if (filename.endsWith(".html")) {
      let content = fs.readFileSync(filename, "utf8");

      const cleanedContent = content.replace(/\s?integrity="[^"]*"/g, "").replace(/\s?crossorigin="[^"]*"/g, "");

      fs.writeFileSync(filename, cleanedContent, "utf8");
    }
  }
}

run();
