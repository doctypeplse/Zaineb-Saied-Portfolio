const sharp = require("sharp");
const fs = require("fs");

async function optimize() {
  const input = "public/images/taswyra/home.png";
  const output = "public/images/taswyra/home.webp";

  const options = {
    limitInputPixels: 350000000,
    sequentialRead: true,
  };

  console.log("Reading Taswyra image...");

  const metadata = await sharp(input, options).metadata();

  console.log(`Original dimensions: ${metadata.width} × ${metadata.height}`);
  console.log("Converting to WebP...");

  await sharp(input, options)
    .webp({ quality: 85, effort: 4 })
    .toFile(output);

  const originalSize = fs.statSync(input).size;
  const optimizedSize = fs.statSync(output).size;

  console.log("\nConversion successful!");
  console.log(`Original: ${(originalSize / 1048576).toFixed(2)} MB`);
  console.log(`WebP: ${(optimizedSize / 1048576).toFixed(2)} MB`);
  console.log(`Reduction: ${(100 - optimizedSize / originalSize * 100).toFixed(1)}%`);
}

optimize().catch(error => {
  console.error("Conversion failed:", error);
  process.exitCode = 1;
});