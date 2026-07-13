APP_PORT ?= 8080
MYSQL_USER ?= root
MYSQL_PASSWORD ?= passw0rd
MYSQL_HOST ?= 127.0.0.1
MYSQL_PORT ?= 3306
MYSQL_DATABASE ?= med-portfolio

.PHONY: setup host-setup deps install-air build up down restart logs dev local-dev run test tidy

setup: build

host-setup: deps install-air

deps:
	go get github.com/gin-gonic/gin gorm.io/gorm gorm.io/driver/mysql
	go mod tidy

install-air:
	go install github.com/air-verse/air@latest

build:
	docker compose build app

up:
	docker compose up -d

down:
	docker compose down

restart: down up

logs:
	docker compose logs -f

dev:
	docker compose up -d app mysql swagger-ui

local-dev: up
	@export PORT=$(APP_PORT) MYSQL_USER=$(MYSQL_USER) MYSQL_PASSWORD=$(MYSQL_PASSWORD) MYSQL_HOST=$(MYSQL_HOST) MYSQL_PORT=$(MYSQL_PORT) MYSQL_DATABASE=$(MYSQL_DATABASE); \
	if [ -f .env ]; then set -a; . ./.env; set +a; fi; \
	air

run: up
	@export PORT=$(APP_PORT) MYSQL_USER=$(MYSQL_USER) MYSQL_PASSWORD=$(MYSQL_PASSWORD) MYSQL_HOST=$(MYSQL_HOST) MYSQL_PORT=$(MYSQL_PORT) MYSQL_DATABASE=$(MYSQL_DATABASE); \
	if [ -f .env ]; then set -a; . ./.env; set +a; fi; \
	go run ./cmd/app

test:
	docker compose run --rm --no-deps app go test ./...

tidy:
	docker compose run --rm --no-deps app go mod tidy
