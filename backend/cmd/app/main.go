package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/med-000/med-portfolio/internal/infrastructure/db"
)

func main() {
	database, err := db.NewMySQL(db.ConfigFromEnv())
	if err != nil {
		log.Fatal(err)
	}

	sqlDB, err := database.DB()
	if err != nil {
		log.Fatal(err)
	}
	defer sqlDB.Close()

	if err := db.AutoMigrate(database); err != nil {
		log.Fatal(err)
	}

	router := gin.Default()

	router.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status": "ok",
		})
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	if err := router.Run(":" + port); err != nil {
		log.Fatal(err)
	}
}
