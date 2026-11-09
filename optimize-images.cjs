const sharp = require("sharp");
const fs = require("fs");

const images = [
  "public/images/mafrah/details.png",
  "public/images/mafrah/list.png",
  "public/images/sakynn/home.png",
  "public/images/sakynn/owner-dashboard.png",
  "public/images/sakynn/owner-listings.png",
  "public/images/taswyra/home.png",
];

async function optimize() {
  for (const file of images) {
    const output = file.replace(/\.png$/i, ".webp");

    console.log(`\nProcessing: ${file}`);

    const originalSize = fs.statSync(file).size;

    const metadata = await sharp(file, {
      limitInputPixels: 350000000,
      sequentialRead: true,
    }).metadata();

    // Keep the entire screenshot and its original proportions.
    const maxWidth = 2400;

    await sharp(file, {
      limitInputPixels: 350000000,
      sequentialRead: true,
    })
      .resize({
        width: maxWidth,
        withoutEnlargement: true,
        fit: "inside",
      })
      .webp({
        quality: 85,
        effort: 5,
      })
      .toFile(output);

    const optimizedSize = fs.statSync(output).size;
    const result = await sharp(output).metadata();

    console.log(`Original dimensions: ${metadata.width} × ${metadata.height}`);
    console.log(`New dimensions: ${result.width} × ${result.height}`);
    console.log(`Original size: ${(originalSize / 1048576).toFixed(2)} MB`);
    console.log(`WebP size: ${(optimizedSize / 1048576).toFixed(2)} MB`);
    console.log(
      `Reduction: ${(100 - (optimizedSize / originalSize) * 100).toFixed(1)}%`
    );
  }

  console.log("\nAll images optimized successfully!");
}

optimize().catch((error) => {
  console.error("Optimization failed:", error);
  process.exitCode = 1;
});