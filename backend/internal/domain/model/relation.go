package model

type ProjectTechstack struct {
	ProjectID   string `gorm:"type:varchar(64);primaryKey"`
	TechstackID string `gorm:"type:varchar(64);primaryKey"`
}

type TimelineTechstack struct {
	TimelineID  string `gorm:"type:varchar(64);primaryKey"`
	TechstackID string `gorm:"type:varchar(64);primaryKey"`
}

type TechstackTechstackType struct {
	TechstackID     string `gorm:"type:varchar(64);primaryKey"`
	TechstackTypeID string `gorm:"type:varchar(64);primaryKey"`
}
