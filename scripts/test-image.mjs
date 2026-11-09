import sharp from "sharp";

async function test() {
  const input = "public/images/profile.png";
  const output = "public/images/profile-optimized.heic";

  const metadata = await sharp(input).metadata();

  console.log(
    `Original dimensions: ${metadata.width} x ${metadata.height}`
  );

  await sharp(input)
    .heif({
      quality: 85,
      compression: "av1",
    })
    .toFile(output);

  console.log("Image successfully converted!");
}

test().catch(console.error);