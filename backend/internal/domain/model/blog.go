package model

type Blog struct {
	ID            string `gorm:"type:varchar(64);primaryKey"`
	Title         string `gorm:"type:varchar(255);not null"`
	MentionPageID string `gorm:"type:varchar(64);not null;index"`
	Public        bool   `gorm:"not null;default:false"`
	Qiita         bool   `gorm:"not null;default:false"`
	Zenn          bool   `gorm:"not null;default:false"`
}
