.PHONY:expo-start start stop clean build

# Expoを起動する
expo-start:
	cd client && npm start

# build
build:
	docker-compose up --build

# サーバーを起動
start:
	docker-compose up -d

# サーバーを停止
stop:
	docker-compose down

# コンテナのクリーンアップ
clean:
	docker-compose down --volumes --remove-orphans

node-compile:
	cd server && npx tsc