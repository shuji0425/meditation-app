# ベースイメージを指定
FROM node:lts-alpine

# アプリケーションコードをコンテナにコピー
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール（キャッシュを活用）
RUN npm install

# 残りのプロジェクトファイルをコピー
COPY . .

# サーバーを起動するポートを公開
EXPOSE 3000

# サーバーを起動
CMD ["npm", "run", "start"]