## express.jsとmongoDBでデータベースを作ってみる

### 起動
docker-compose up -d
### docker内のdbを確認
docker exec -it mongodb bash
mongosh -u root -p password --authenticationDatabase admin