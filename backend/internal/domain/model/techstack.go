package model

type Techstack struct {
	ID     string `gorm:"type:varchar(64);primaryKey"`
	Title  string `gorm:"type:varchar(255);not null"`
	Public bool   `gorm:"not null;default:false"`
}

type TechstackType struct {
	ID     string `gorm:"type:varchar(64);primaryKey"`
	Title  string `gorm:"type:varchar(255);not null"`
	Public bool   `gorm:"not null;default:false"`
}
