# Backend

Go + Gin + GORM + MySQL の backend です。

## セットアップ

backend 配下で実行します。

```bash
cd /Users/med/Documents/develop/web/product/med-portfolio/backend
make setup
```

`make setup` では、アプリで使う Go 依存と開発用 CLI の Air を入れます。

```bash
go get github.com/gin-gonic/gin gorm.io/gorm gorm.io/driver/mysql
go mod tidy
go install github.com/air-verse/air@latest
```

## 環境変数

必要なら `.env.sample` から `.env` を作ります。

```bash
cp .env.sample .env
```

プロジェクト全体用の雛形は root にもあります。

```text
../.env.sample
```

backend で使う値:

```env
MYSQL_USER=root
MYSQL_PASSWORD=passw0rd
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
MYSQL_DATABASE=med-portfolio
PORT=8080
```

Go は `.env` を自動では読みません。Docker Compose で起動する場合は
`docker-compose.yml` の environment がコンテナへ渡されます。
ローカル実行の `make local-dev` / `make run` では、Makefile 側で `.env` を読み込みます。

## 開発起動

MySQL、Swagger UI、backend app コンテナを起動します。

```bash
make dev
```

実行される内容:

```text
docker compose up -d app mysql swagger-ui
```

backend app コンテナ内では Air が動きます。Go ファイルを変更すると
`./cmd/app` が再ビルドされ、サーバが再起動されます。
Air を使う場合、別途 `go run ./cmd/app` を実行する必要はありません。

backend の疎通確認:

```bash
curl http://localhost:8080/health
```

期待する返り値:

```json
{"status":"ok"}
```

## Swagger UI

Swagger UI も `make dev` で起動します。

```text
http://localhost:3030
```

`docker-compose.yml` では次のように設定しています。

```yaml
ports:
  - "127.0.0.1:3030:8080"
```

Swagger UI が読む OpenAPI ファイル:

```text
api-document.yaml
```

## Make コマンド

```bash
make setup     # Go依存とAirを入れる
make build     # backend app コンテナをビルドする
make dev       # app / mysql / swagger-ui をバックグラウンド起動する
make local-dev # Dockerサービスを起動し、APIだけローカルのAirで動かす
make run       # Dockerサービスを起動し、APIだけローカルで go run する
make up        # Dockerサービスをバックグラウンド起動する
make down      # Dockerサービスを停止する
make restart   # Dockerサービスを再起動する
make logs      # Dockerログを見る
make test      # Goテストを実行する
make tidy      # go mod tidy を実行する
```

`make dev` はログを表示しません。ログを見たい場合だけ次を実行します。

```bash
make logs
```

## データベース

MySQL は `docker-compose.yml` で定義しています。

Docker Compose project name:

```text
med-portfolio-app
```

TablePlus などから接続する場合:

```text
Host: 127.0.0.1
Port: 3306
Database: med-portfolio
User: root
Password: passw0rd
```

backend app を Docker コンテナ内で動かす場合、MySQL への接続先は service 名です。

```text
MYSQL_HOST=mysql
```

backend app をホスト側で直接動かす場合は、localhost に接続します。

```text
MYSQL_HOST=127.0.0.1
```

テーブル定義は GORM model としてここに置いています。

```text
internal/domain/model/
```

起動時の migration はここです。

```text
internal/infrastructure/db/migrate.go
```

backend は Gin server 起動前に `AutoMigrate` を実行します。

## 構成

```text
cmd/app/main.go                    # アプリの entrypoint
internal/domain/model/             # テーブル定義 / domain model
internal/infrastructure/db/         # MySQL 接続と migration
internal/infrastructure/repository/ # DB backed repository 実装
docker-compose.yml                 # app / MySQL / Swagger UI
docker/Dockerfile                  # backend app コンテナ
docker/Dockerfile.dockerignore     # Docker build context の除外設定
Makefile                           # backend 開発コマンド
.air.toml                          # Air hot reload 設定
api-document.yaml                  # OpenAPI 定義
```

## 注意

- backend のコマンドは repository root ではなく `backend/` で実行します。
- `air` は開発用 CLI なので `go install` で入れます。
- `gin` と `gorm` はアプリの依存なので `go get` で `go.mod` に追加します。
