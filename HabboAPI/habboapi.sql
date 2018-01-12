CREATE TABLE `api_sessions` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`user_id` INT(11) NOT NULL,
	`user_name` VARCHAR(100) NOT NULL,
	`user_session` VARCHAR(100) NOT NULL DEFAULT '',
	`user_ip` VARCHAR(100) NOT NULL DEFAULT '',
	`user_agent` TEXT NOT NULL,
	`session_type` ENUM('site','hk') NOT NULL DEFAULT 'site',
	`created_at` DATETIME NOT NULL,
	`updated_at` DATETIME NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE INDEX `user_session` (`user_session`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1;