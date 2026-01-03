import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

async function optimizeImages() {
  console.log('🚀 开始扫描 public 目录下的图片...');

  const files = fs.readdirSync(publicDir);
  let count = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (imageExtensions.includes(ext) && !file.startsWith('optimized_')) {
      const inputPath = path.join(publicDir, file);
      const tempPath = path.join(publicDir, `temp_${file}`);

      try {
        const stats = fs.statSync(inputPath);
        const fileSizeInMB = stats.size / (1024 * 1024);

        if (fileSizeInMB < 0.2) {
          console.log(`⏩ 跳过已压缩的文件: ${file} (${(fileSizeInMB * 1024).toFixed(2)} KB)`);
          continue;
        }

        console.log(`📸 正在压缩: ${file} (原始大小: ${fileSizeInMB.toFixed(2)} MB)`);

        await sharp(inputPath)
          .resize(1500, null, { // 限制最大宽度为 1500px，高度等比缩放
            withoutEnlargement: true
          })
          .jpeg({ 
            quality: 75,       // 质量设为 75，体积和画质的最佳平衡点
            progressive: true  // 渐进式加载，体验更好
          })
          .toFile(tempPath);

        // 替换原文件
        fs.unlinkSync(inputPath);
        fs.renameSync(tempPath, inputPath);

        const newStats = fs.statSync(inputPath);
        console.log(`✅ 处理成功: ${file} -> ${(newStats.size / 1024).toFixed(2)} KB`);
        count++;
      } catch (err) {
        console.error(`❌ 处理 ${file} 失败:`, err);
      }
    }
  }

  if (count === 0) {
    console.log('✨ 没有发现需要压缩的大图。');
  } else {
    console.log(`✨ 完成！共优化了 ${count} 张图片。`);
  }
}

optimizeImages();

