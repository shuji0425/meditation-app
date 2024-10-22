# Node.jsの公式イメージを使用
FROM node:lts-alpine

# 作業ディレクトリを作成
WORKDIR /app

# 依存関係をインストールするためのファイルをコピー
COPY frontend/package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY frontend ./

# アプリケーションを起動する
CMD ["npm", "start"]