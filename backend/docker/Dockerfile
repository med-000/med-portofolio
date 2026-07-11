# syntax=docker/dockerfile:1

FROM golang:1.26-alpine AS base

WORKDIR /app

RUN apk add --no-cache ca-certificates tzdata

COPY go.mod go.sum ./
RUN go mod download

COPY . .

FROM base AS dev

RUN go install github.com/air-verse/air@latest

EXPOSE 8080

CMD ["air"]

FROM base AS builder

RUN CGO_ENABLED=0 GOOS=linux go build -o /app/bin/app ./cmd/app

FROM alpine:3.20 AS production

WORKDIR /app

RUN apk add --no-cache ca-certificates tzdata

COPY --from=builder /app/bin/app ./app

EXPOSE 8080

CMD ["./app"]
