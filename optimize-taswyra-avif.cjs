const sharp = require("sharp");
const fs = require("fs");

async function optimize() {
  const input = "public/images/taswyra/home.png";
  const output = "public/images/taswyra/home.avif";

  const options = {
    limitInputPixels: 350000000,
    sequentialRead: true,
  };

  console.log("Reading original Taswyra screenshot...");

  const metadata = await sharp(input, options).metadata();

  console.log(`Original: ${metadata.width} × ${metadata.height}`);
  console.log("Creating AVIF version...");

  await sharp(input, options)
    .avif({
      quality: 80,
      effort: 4,
      chromaSubsampling: "4:4:4",
    })
    .toFile(output);

  const originalSize = fs.statSync(input).size;
  const optimizedSize = fs.statSync(output).size;

  const result = await sharp(output).metadata();

  console.log("\nConversion completed!");
  console.log(`New dimensions: ${result.width} × ${result.height}`);
  console.log(`Original: ${(originalSize / 1048576).toFixed(2)} MB`);
  console.log(`AVIF: ${(optimizedSize / 1048576).toFixed(2)} MB`);
  console.log(
    `Reduction: ${(100 - optimizedSize / originalSize * 100).toFixed(1)}%`
  );
}

optimize().catch(error => {
  console.error("Conversion failed:", error);
  process.exitCode = 1;
});