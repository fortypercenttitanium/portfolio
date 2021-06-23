import path from 'path';
import fs from 'fs';
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

export default async function compressImage(filePath, destination) {
  try {
    console.log(`Compressing image ${filePath}...`);
    const fileName = path.basename(filePath);

    const tempDest = path.join(path.dirname(filePath), 'tempdir');

    if (!fs.existsSync(tempDest)) {
      fs.mkdirSync(tempDest);
    }

    await imagemin([filePath], {
      destination: tempDest,
      plugins: [imageminMozjpeg(), imageminPngquant()],
    });

    fs.copyFileSync(path.join(tempDest, fileName), destination);
    fs.rmSync(tempDest, { recursive: true });

    console.log('Compression successful');
  } catch (err) {
    console.log(err);
  }
}
