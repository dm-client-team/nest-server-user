# 制定node镜像的版本
FROM node:16
# 移动当前目录下面的文件到app目录下
ADD . /app/
# 进入到app目录下面，类似cd
WORKDIR /app
# 设置镜像
# RUN npm config set registry http://1.15.102.208:4873
# RUN yarn config set registry http://1.15.102.208:4873
# 安装依赖
RUN npm install pnpm -g
RUN pnpm install
RUN pnpm build
# 对外暴露的端口，这里的3010需要和inde.js监听的端口一致
EXPOSE 3000
# 程序启动脚本，意思为 执行 npm start
CMD ["pnpm", "start:prod"]
# CMD ["yarn", "serve"]

# sqlite 共享目錄 /app/sqlite/
