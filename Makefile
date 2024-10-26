.PHONY:expo-start start stop clean

# Expoを起動する
expo-start:
	cd client && npm start

# サーバーを起動
start:
	docker-compose up -d

# サーバーを停止
stop:
	docker-compose down

# コンテナのクリーンアップ
clean:
	docker-compose down --volumes --remove-orphans