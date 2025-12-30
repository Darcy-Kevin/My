#!/bin/bash

# 配置信息
SERVER_IP="59.110.1.195"
SERVER_USER="root"
SERVER_PATH="/www/wwwroot/cyrillin.com/My" # 更新为你的实际路径
PM2_NAME="my-personal-website"

echo "🎨 正在本地压缩图片..."
node optimize-images.mjs

echo "🚀 开始同步文件到服务器..."
# 使用 rsync 同步文件
rsync -avzP --delete \
            --exclude 'node_modules' \
            --exclude '.next' \
            --exclude '.git' \
            --exclude 'deploy.sh' \
            --exclude 'optimize-images.mjs' \
            ./ $SERVER_USER@$SERVER_IP:$SERVER_PATH

# 远程执行安装依赖、清理、编译和重启命令
echo "🏗️  正在服务器上执行构建..."
ssh $SERVER_USER@$SERVER_IP "cd $SERVER_PATH && \
    npm install && \
    rm -rf .next && \
    npm run build && \
    pm2 delete $PM2_NAME 2>/dev/null || true && \
    PORT=3000 pm2 start npm --name \"$PM2_NAME\" -- start"

echo "🧹 清理系统临时缓存并重载 Nginx..."
ssh $SERVER_USER@$SERVER_IP "rm -rf /www/server/nginx/proxy_cache_dir/* 2>/dev/null || true && \
    nginx -s reload"

echo "✅ 部署完成！快去刷新网页看看吧。"

