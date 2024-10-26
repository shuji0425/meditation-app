# ベースイメージを指定
FROM node:lts-alpine

# アプリケーションコードをコンテナにコピー
WORKDIR /app

# 先にpacking.json系をコピーする
COPY package*.json ./

# 必要なパッケージをインストール
RUN npm install

# 残りをコピー
COPY . .

# Expoを起動するためのポートを公開
EXPOSE 19000

# Expoを起動
CMD ["npm", "start"]
