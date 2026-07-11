package model

type Page struct {
	ID        string `gorm:"type:varchar(64);primaryKey"`
	Title     string `gorm:"type:varchar(255);not null"`
	Content   string `gorm:"type:longtext;not null"`
	ImageFile string `gorm:"type:text;not null"`
}
