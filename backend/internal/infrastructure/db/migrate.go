package db

import (
	"github.com/med-000/med-portfolio/internal/domain/model"
	"gorm.io/gorm"
)

func AutoMigrate(database *gorm.DB) error {
	return database.AutoMigrate(
		&model.Page{},
		&model.Blog{},
		&model.Project{},
		&model.Timeline{},
		&model.Techstack{},
		&model.TechstackType{},
		&model.ProjectTechstack{},
		&model.TimelineTechstack{},
		&model.TechstackTechstackType{},
	)
}
