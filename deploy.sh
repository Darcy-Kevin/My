#!/bin/bash

# 配置信息
SERVER_IP="59.110.1.195"
SERVER_USER="root"
SERVER_PATH="/www/wwwroot/cyrillin.com"
PM2_NAME="my-personal-website"

echo "🚀 开始同步文件到服务器..."

# 使用 rsync 同步文件（排除 node_modules, .next, .git 等）
# 添加 --delete 确保服务器上旧的、本地已删除的文件会被清理
rsync -avzP --delete \
            --exclude 'node_modules' \
            --exclude '.next' \
            --exclude '.git' \
            --exclude 'deploy.sh' \
            ./ $SERVER_USER@$SERVER_IP:$SERVER_PATH

# 远程执行安装依赖、清理、编译和重启命令
echo "🏗️  正在服务器上安装依赖、清理缓存并重新构建..."
ssh $SERVER_USER@$SERVER_IP "cd $SERVER_PATH && npm install && rm -rf .next && npm run build && pm2 restart $PM2_NAME"

echo "✅ 部署完成！快去刷新网页看看吧。"

