package model

type Project struct {
	ID      string `gorm:"type:varchar(64);primaryKey"`
	Title   string `gorm:"type:varchar(255);not null"`
	Public  bool   `gorm:"not null;default:false"`
	Summary string `gorm:"type:text;not null"`
	Github  string `gorm:"type:text;not null"`
	Zenn    string `gorm:"type:text;not null"`
	Qiita   string `gorm:"type:text;not null"`
}
