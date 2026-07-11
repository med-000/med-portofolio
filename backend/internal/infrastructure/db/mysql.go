package db

import (
	"fmt"
	"os"
	"time"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Config struct {
	User     string
	Password string
	Host     string
	Port     string
	Database string
}

func ConfigFromEnv() Config {
	return Config{
		User:     os.Getenv("MYSQL_USER"),
		Password: os.Getenv("MYSQL_PASSWORD"),
		Host:     os.Getenv("MYSQL_HOST"),
		Port:     os.Getenv("MYSQL_PORT"),
		Database: os.Getenv("MYSQL_DATABASE"),
	}
}

func NewMySQL(config Config) (*gorm.DB, error) {
	var lastErr error

	for i := 0; i < 30; i++ {
		database, err := openMySQL(config)
		if err == nil {
			return database, nil
		}

		lastErr = err
		time.Sleep(2 * time.Second)
	}

	return nil, lastErr
}

func openMySQL(config Config) (*gorm.DB, error) {
	dsn := fmt.Sprintf(
		"%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=true&loc=Local",
		config.User,
		config.Password,
		config.Host,
		config.Port,
		config.Database,
	)

	database, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, fmt.Errorf("open mysql: %w", err)
	}

	sqlDB, err := database.DB()
	if err != nil {
		return nil, fmt.Errorf("get mysql db: %w", err)
	}

	if err := sqlDB.Ping(); err != nil {
		sqlDB.Close()
		return nil, fmt.Errorf("ping mysql: %w", err)
	}

	return database, nil
}
