/*
Navicat MariaDB Data Transfer

Source Server         : #Localhost
Source Server Version : 100212
Source Host           : localhost:3306
Source Database       : heroic two

Target Server Type    : MariaDB
Target Server Version : 100212
File Encoding         : 65001

Date: 2018-03-06 20:26:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for camera_web
-- ----------------------------
DROP TABLE IF EXISTS `camera_web`;
CREATE TABLE `camera_web` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL DEFAULT 0,
  `timestamp` int(11) NOT NULL,
  `url` varchar(128) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of camera_web
-- ----------------------------
INSERT INTO `camera_web` VALUES ('1', '1', '0', '1', '1');

-- ----------------------------
-- Table structure for cms_hangouts_posts
-- ----------------------------
DROP TABLE IF EXISTS `cms_hangouts_posts`;
CREATE TABLE `cms_hangouts_posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `section_id` int(11) DEFAULT NULL,
  `title` varchar(22) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` enum('open','closed') DEFAULT 'open',
  `timestamp` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_hangouts_posts
-- ----------------------------
INSERT INTO `cms_hangouts_posts` VALUES ('1', '1', '1', 'Eminem - River', 'Song is lit', 'the fucking song is currently playing atm', null, 'open', '2018-03-06 03:31:08');

-- ----------------------------
-- Table structure for cms_hangouts_replies
-- ----------------------------
DROP TABLE IF EXISTS `cms_hangouts_replies`;
CREATE TABLE `cms_hangouts_replies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_hangouts_replies
-- ----------------------------

-- ----------------------------
-- Table structure for cms_hangouts_sections
-- ----------------------------
DROP TABLE IF EXISTS `cms_hangouts_sections`;
CREATE TABLE `cms_hangouts_sections` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(25) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `read_level` enum('user','vip','staff') DEFAULT 'user',
  `access_level` enum('user','vip','staff') DEFAULT 'user',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_hangouts_sections
-- ----------------------------

-- ----------------------------
-- Table structure for cms_news_articles
-- ----------------------------
DROP TABLE IF EXISTS `cms_news_articles`;
CREATE TABLE `cms_news_articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_news_articles
-- ----------------------------

-- ----------------------------
-- Table structure for cms_news_categories
-- ----------------------------
DROP TABLE IF EXISTS `cms_news_categories`;
CREATE TABLE `cms_news_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `content` varchar(255) DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_news_categories
-- ----------------------------

-- ----------------------------
-- Table structure for cms_notifications
-- ----------------------------
DROP TABLE IF EXISTS `cms_notifications`;
CREATE TABLE `cms_notifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `reference_id` int(11) DEFAULT NULL,
  `reference_type` enum('hangouts') DEFAULT 'hangouts',
  `title` varchar(22) DEFAULT '',
  `content` text DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_notifications
-- ----------------------------

-- ----------------------------
-- Table structure for cms_products
-- ----------------------------
DROP TABLE IF EXISTS `cms_products`;
CREATE TABLE `cms_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `rank_id` int(11) DEFAULT NULL,
  `boost_credits` int(255) DEFAULT NULL,
  `boost_pixels` int(255) DEFAULT NULL,
  `boost_points` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_products
-- ----------------------------
INSERT INTO `cms_products` VALUES ('1', 'Subscriber ', 'Gives you the vip rank and some monies', 'yay!', '10.00', '1', '1000', '1000', '5');

-- ----------------------------
-- Table structure for cms_purchases
-- ----------------------------
DROP TABLE IF EXISTS `cms_purchases`;
CREATE TABLE `cms_purchases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `status` enum('pending','accepted','rejected','chargeback','refunded') DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `verified_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_purchases
-- ----------------------------
INSERT INTO `cms_purchases` VALUES ('1', '1', '1', 'pending', '2018-03-06 04:40:25', null);

-- ----------------------------
-- Table structure for cms_settings
-- ----------------------------
DROP TABLE IF EXISTS `cms_settings`;
CREATE TABLE `cms_settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_name` varchar(25) DEFAULT NULL,
  `site_desc` varchar(255) DEFAULT NULL,
  `site_link` varchar(255) DEFAULT NULL,
  `server_ip` varchar(255) DEFAULT NULL,
  `server_port` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_settings
-- ----------------------------
INSERT INTO `cms_settings` VALUES ('1', 'Hell\n', 'Welcome to hell', 'http://hell.com', '127.0.0.1', '3000');

-- ----------------------------
-- Table structure for permissions
-- ----------------------------
DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rank_name` varchar(25) NOT NULL,
  `level` int(2) NOT NULL DEFAULT 1,
  `room_effect` int(11) NOT NULL DEFAULT 0,
  `log_commands` enum('0','1') NOT NULL DEFAULT '0',
  `prefix` varchar(5) NOT NULL,
  `prefix_color` varchar(7) NOT NULL,
  `cmd_about` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_alert` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_allow_trading` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_badge` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_ban` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_blockalert` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_bots` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_bundle` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_calendar` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_changename` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_chatcolor` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_commands` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_connect_camera` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_control` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_coords` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_credits` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_danceall` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_diagonal` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_disconnect` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_duckets` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_ejectall` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_empty` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_empty_bots` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_empty_pets` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_enable` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_event` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_faceless` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_fastwalk` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_freeze` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_freeze_bots` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_gift` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_give_rank` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_ha` enum('0','1') NOT NULL DEFAULT '0',
  `acc_can_stalk` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_hal` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_invisible` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_ip_ban` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_machine_ban` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_hand_item` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_happyhour` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_hidewired` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_kickall` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_massbadge` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_masscredits` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_massduckets` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_massgift` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_masspoints` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_moonwalk` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_mimic` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_multi` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_mute` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_pet_info` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_pickall` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_plugins` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_points` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_pull` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_push` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_redeem` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_reload_room` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_roomalert` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_roomcredits` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_roomeffect` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_roomgift` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_roomitem` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_roommute` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_roompixels` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_roompoints` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_say` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_say_all` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_setmax` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_set_poll` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_setpublic` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_setspeed` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_shout` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_shout_all` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_shutdown` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_sitdown` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_staffalert` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_staffonline` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_summon` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_summonrank` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_super_ban` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_stalk` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_superpull` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_take_badge` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_talk` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_teleport` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_trash` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_transform` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_unban` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_unload` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_unmute` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_bots` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_catalogue` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_config` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_guildparts` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_hotel_view` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_items` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_navigator` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_permissions` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_pet_data` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_plugins` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_polls` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_texts` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_wordfilter` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_userinfo` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_word_quiz` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_warp` enum('0','1') NOT NULL DEFAULT '0',
  `acc_anychatcolor` enum('0','1') NOT NULL DEFAULT '0',
  `acc_anyroomowner` enum('0','1') NOT NULL DEFAULT '0',
  `acc_empty_others` enum('0','1') NOT NULL DEFAULT '0',
  `acc_enable_others` enum('0','1') NOT NULL DEFAULT '0',
  `acc_see_whispers` enum('0','1') NOT NULL DEFAULT '0',
  `acc_superwired` enum('0','1') NOT NULL DEFAULT '0',
  `acc_supporttool` enum('0','1') NOT NULL DEFAULT '0',
  `acc_unkickable` enum('0','1') NOT NULL DEFAULT '0',
  `acc_guildgate` enum('0','1') NOT NULL DEFAULT '0',
  `acc_moverotate` enum('0','1') NOT NULL DEFAULT '0',
  `acc_placefurni` enum('0','1') NOT NULL DEFAULT '0',
  `acc_unlimited_bots` enum('0','1','2') NOT NULL DEFAULT '0' COMMENT 'Overrides the bot restriction to the inventory and room.',
  `acc_unlimited_pets` enum('0','1','2') NOT NULL DEFAULT '0' COMMENT 'Overrides the pet restriction to the inventory and room.',
  `acc_hide_ip` enum('0','1') NOT NULL DEFAULT '0',
  `acc_not_mimiced` enum('0','1') NOT NULL DEFAULT '0',
  `acc_chat_no_flood` enum('0','1') NOT NULL DEFAULT '0',
  `acc_staff_chat` enum('0','1') NOT NULL DEFAULT '0',
  `acc_staff_pick` enum('0','1') NOT NULL DEFAULT '0',
  `acc_enteranyroom` enum('0','1') NOT NULL DEFAULT '0',
  `acc_fullrooms` enum('0','1') NOT NULL DEFAULT '0',
  `acc_infinite_credits` enum('0','1') NOT NULL DEFAULT '0',
  `acc_infinite_pixels` enum('0','1') NOT NULL DEFAULT '0',
  `acc_infinite_points` enum('0','1') NOT NULL DEFAULT '0',
  `acc_ambassador` enum('0','1') NOT NULL DEFAULT '0',
  `acc_debug` enum('0','1') NOT NULL DEFAULT '0',
  `acc_chat_no_limit` enum('0','1') NOT NULL DEFAULT '0' COMMENT 'People with this permission node are always heard and can see all chat in the room regarding of maximum hearing distance in the room settings (In game)',
  `acc_chat_no_filter` enum('0','1') NOT NULL DEFAULT '0',
  `acc_nomute` enum('0','1') NOT NULL DEFAULT '0',
  `acc_guild_admin` enum('0','1') NOT NULL DEFAULT '0',
  `acc_catalog_ids` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_ticket_q` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_user_logs` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_user_alert` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_user_kick` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_user_ban` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_room_info` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_room_logs` enum('0','1') NOT NULL DEFAULT '0',
  `acc_trade_anywhere` enum('0','1') NOT NULL DEFAULT '0',
  `acc_update_notifications` enum('0','1') NOT NULL DEFAULT '0',
  `acc_helper_use_guide_tool` enum('0','1') NOT NULL DEFAULT '0',
  `acc_helper_give_guide_tours` enum('0','1') NOT NULL DEFAULT '0',
  `acc_helper_judge_chat_reviews` enum('0','1') NOT NULL DEFAULT '0',
  `acc_floorplan_editor` enum('0','1') NOT NULL DEFAULT '0',
  `acc_camera` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_wordquiz` enum('0','1','2') NOT NULL DEFAULT '0',
  `acc_room_staff_tags` enum('0','1') NOT NULL DEFAULT '0',
  `acc_inifnite_friends` enum('0','1') NOT NULL DEFAULT '0',
  `cms_mod` enum('0','1') DEFAULT '0',
  `cms_admin` enum('0','1') DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of permissions
-- ----------------------------
INSERT INTO `permissions` VALUES ('1', 'Member', '1', '0', '0', '', '', '1', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `permissions` VALUES ('2', 'VIP', '2', '0', '0', '', '', '1', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `permissions` VALUES ('3', 'X', '3', '0', '0', '', '', '1', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `permissions` VALUES ('4', 'Support', '4', '0', '0', '', '', '1', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `permissions` VALUES ('5', 'Moderator', '5', '0', '0', '', '', '1', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `permissions` VALUES ('6', 'Super Mod', '6', '0', '0', '', '', '1', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `permissions` VALUES ('7', 'Administrator', '7', '0', '0', '', '', '1', '1', '0', '1', '1', '1', '1', '1', '0', '0', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '0', '0', '0', '0', '0', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '0', '0', '1', '0', '1', '0', '0', '0', '1', '1', '0', '0', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '0', '1', '1', '0', '1', '1', '1', '0', '1', '1', '0', '0', '1', '1', '1', '0', '1', '0', '1', '1', '1', '0', '1', '1', '1', '0', '1', '1', '1', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(25) NOT NULL,
  `real_name` varchar(25) NOT NULL DEFAULT '',
  `password` varchar(64) NOT NULL,
  `mail` varchar(25) NOT NULL,
  `mail_verified` enum('0','1') NOT NULL DEFAULT '0',
  `account_created` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `account_day_of_birth` int(11) NOT NULL DEFAULT 0,
  `last_login` int(11) NOT NULL DEFAULT 0,
  `last_online` int(11) NOT NULL DEFAULT 0,
  `motto` varchar(127) NOT NULL DEFAULT '',
  `look` varchar(256) NOT NULL DEFAULT 'hr-115-42.hd-195-19.ch-3030-82.lg-275-1408.fa-1201.ca-1804-64',
  `gender` enum('M','F') NOT NULL DEFAULT 'M',
  `rank` int(2) NOT NULL DEFAULT 1,
  `credits` int(11) NOT NULL DEFAULT 2500,
  `pixels` int(11) NOT NULL DEFAULT 500,
  `points` int(11) NOT NULL DEFAULT 10,
  `online` enum('0','1','2') NOT NULL DEFAULT '0',
  `auth_ticket` varchar(256) CHARACTER SET latin1 NOT NULL DEFAULT '',
  `ip_register` varchar(45) NOT NULL,
  `ip_current` varchar(45) NOT NULL COMMENT 'Have your CMS update this IP. If you do not do this IP banning won''t work!',
  `machine_id` varchar(64) NOT NULL DEFAULT '',
  `home_room` int(32) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `id_2` (`id`),
  UNIQUE KEY `id_3` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'Chris', '', '$2a$10$7fCzyYpMCkGAcKhQYLuw3uYT2qwvv9HCsdkZCSzIK4JrhZdSKvoQi', 'chrismpettyjohn@gmail.com', '0', '2018-03-06 06:05:43', '0', '0', '0', '', 'hr-115-42.hd-195-19.ch-3030-82.lg-275-1408.fa-1201.ca-1804-64', 'M', '7', '2500', '500', '10', '1', '', '127.0.0.1', '127.0.0.1', '', '0');
INSERT INTO `users` VALUES ('2', 'Peep', '', '$2a$10$5qZ/zz6kkS/GNFhH87VfAe084.ykO3qxnY6P2S5KejupoxBapf9Du', 'lil@peep.com', '0', '2018-03-05 21:36:30', '0', '0', '0', '', 'hr-115-42.hd-195-19.ch-3030-82.lg-275-1408.fa-1201.ca-1804-64', 'M', '1', '2500', '500', '10', '0', '', '127.0.0.1', '127.0.0.1', '', '0');
INSERT INTO `users` VALUES ('3', 'daddy', '', '$2a$10$NBN3DKY7DfIrzQw4mErRGeeyYNyonHrwVigk4xer0Ju5je5yFWZze', 'w@w.com', '0', '2018-03-06 05:37:54', '0', '0', '0', '', 'hr-115-42.hd-195-19.ch-3030-82.lg-275-1408.fa-1201.ca-1804-64', 'M', '1', '2500', '500', '10', '0', '', '109.151.201.83', '109.151.201.83', '', '0');
