package model

type Timeline struct {
	ID         string `gorm:"type:varchar(64);primaryKey"`
	Title      string `gorm:"type:varchar(255);not null"`
	Public     bool   `gorm:"not null;default:false"`
	StartYear  int    `gorm:"not null;default:0"`
	StartMonth int    `gorm:"not null;default:0"`
	EndYear    *int
	EndMonth   *int
	DateValid  bool `gorm:"not null;default:false"`
}
