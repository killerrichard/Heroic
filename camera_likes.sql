/*
Navicat MariaDB Data Transfer

Source Server         : #Localhost
Source Server Version : 100212
Source Host           : localhost:3306
Source Database       : arcturus

Target Server Type    : MariaDB
Target Server Version : 100212
File Encoding         : 65001

Date: 2018-01-19 19:35:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for camera_likes
-- ----------------------------
DROP TABLE IF EXISTS `camera_likes`;
CREATE TABLE `camera_likes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `photo_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of camera_likes
-- ----------------------------
INSERT INTO `camera_likes` VALUES ('5', '3', '1');
INSERT INTO `camera_likes` VALUES ('7', '5', '3');
INSERT INTO `camera_likes` VALUES ('8', '2', '3');
INSERT INTO `camera_likes` VALUES ('9', '1', '3');
INSERT INTO `camera_likes` VALUES ('10', '3', '3');
INSERT INTO `camera_likes` VALUES ('12', '4', '4');
INSERT INTO `camera_likes` VALUES ('13', '3', '4');
INSERT INTO `camera_likes` VALUES ('14', '2', '4');
INSERT INTO `camera_likes` VALUES ('15', '4', '3');
INSERT INTO `camera_likes` VALUES ('16', '1', '4');
INSERT INTO `camera_likes` VALUES ('43', '1', '1');
INSERT INTO `camera_likes` VALUES ('55', '4', '1');
INSERT INTO `camera_likes` VALUES ('56', '2', '1');
INSERT INTO `camera_likes` VALUES ('57', '5', '1');
INSERT INTO `camera_likes` VALUES ('61', '7', '26');
INSERT INTO `camera_likes` VALUES ('63', '7', '4');
INSERT INTO `camera_likes` VALUES ('64', '6', '4');
INSERT INTO `camera_likes` VALUES ('65', '5', '4');
INSERT INTO `camera_likes` VALUES ('66', '7', '27');
INSERT INTO `camera_likes` VALUES ('67', '6', '27');
INSERT INTO `camera_likes` VALUES ('68', '5', '27');
INSERT INTO `camera_likes` VALUES ('69', '1', '27');

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of camera_web
-- ----------------------------
INSERT INTO `camera_web` VALUES ('1', '1', '44', '1515356493', 'http://arcturus.pw/camera/Chris/1_1515356489.png');
INSERT INTO `camera_web` VALUES ('2', '1', '44', '1515356816', 'http://arcturus.pw/camera/Chris/1_1515356782.png');
INSERT INTO `camera_web` VALUES ('3', '1', '50', '1515376195', 'http://arcturus.pw/camera/Chris/1_1515376191.png');
INSERT INTO `camera_web` VALUES ('4', '1', '51', '1515379075', 'http://arcturus.pw/camera/Chris/1_1515379072.png');
INSERT INTO `camera_web` VALUES ('5', '4', '41', '1515379090', 'http://arcturus.pw/camera/Chris/4_1515379082.png');
INSERT INTO `camera_web` VALUES ('6', '4', '44', '1515433310', 'http://arcturus.pw/camera/Chris/4_1515433298.png');
INSERT INTO `camera_web` VALUES ('7', '4', '44', '1515548724', 'http://arcturus.pw/camera/Chris/4_1515548718.png');

-- ----------------------------
-- Table structure for cms_categories
-- ----------------------------
DROP TABLE IF EXISTS `cms_categories`;
CREATE TABLE `cms_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_categories
-- ----------------------------
INSERT INTO `cms_categories` VALUES ('1', 'Beta Testing');

-- ----------------------------
-- Table structure for cms_errors
-- ----------------------------
DROP TABLE IF EXISTS `cms_errors`;
CREATE TABLE `cms_errors` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `user` int(11) DEFAULT NULL,
  `url_accessed` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=ascii;

-- ----------------------------
-- Records of cms_errors
-- ----------------------------
INSERT INTO `cms_errors` VALUES ('2', 'User Refresh Middleware', null, '/', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2018-01-02 04:59:05');
INSERT INTO `cms_errors` VALUES ('9', 'IP Ban Check', null, '/login', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2018-01-02 22:34:43');
INSERT INTO `cms_errors` VALUES ('10', 'IP Ban Check', null, '/favicon.ico', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2018-01-02 22:34:43');
INSERT INTO `cms_errors` VALUES ('11', 'IP Ban Check', null, '/login', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2018-01-02 22:35:22');
INSERT INTO `cms_errors` VALUES ('12', 'IP Ban Check', null, '/favicon.ico', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2018-01-02 22:35:22');
INSERT INTO `cms_errors` VALUES ('13', 'IP Ban Check', null, '/login', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2018-01-02 22:35:23');
INSERT INTO `cms_errors` VALUES ('14', 'IP Ban Check', null, '/favicon.ico', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2018-01-02 22:35:23');
INSERT INTO `cms_errors` VALUES ('15', 'IP Ban Check', null, '/login', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2018-01-02 22:36:31');
INSERT INTO `cms_errors` VALUES ('16', 'IP Ban Check', null, '/favicon.ico', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2018-01-02 22:36:31');
INSERT INTO `cms_errors` VALUES ('17', 'IP Ban Check', null, '/login', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2018-01-02 22:36:47');
INSERT INTO `cms_errors` VALUES ('18', 'IP Ban Check', null, '/favicon.ico', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2018-01-02 22:36:47');
INSERT INTO `cms_errors` VALUES ('19', 'IP Ban Check', null, '/login', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2018-01-02 22:36:47');
INSERT INTO `cms_errors` VALUES ('20', 'IP Ban Check', null, '/favicon.ico', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2018-01-02 22:36:47');
INSERT INTO `cms_errors` VALUES ('21', 'IP Ban Check', null, '/login', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2018-01-02 22:36:59');
INSERT INTO `cms_errors` VALUES ('22', 'IP Ban Check', null, '/favicon.ico', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2018-01-02 22:36:59');

-- ----------------------------
-- Table structure for cms_hangouts
-- ----------------------------
DROP TABLE IF EXISTS `cms_hangouts`;
CREATE TABLE `cms_hangouts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT '',
  `content` text DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_hangouts
-- ----------------------------
INSERT INTO `cms_hangouts` VALUES ('1', '1', 'Whattt', 'AAyeee', '2018-01-14 01:48:13');
INSERT INTO `cms_hangouts` VALUES ('2', '1', 'Oh shittt', 'dddd', '2018-01-14 03:34:02');
INSERT INTO `cms_hangouts` VALUES ('3', '1', 'DDDD', 'DDD', '2018-01-14 03:35:23');
INSERT INTO `cms_hangouts` VALUES ('4', '1', 'Another One', 'Yes!! Dj Khaled', '2018-01-14 03:37:05');
INSERT INTO `cms_hangouts` VALUES ('5', '1', 'Example Post', 'Yay!', '2018-01-14 03:43:13');
INSERT INTO `cms_hangouts` VALUES ('6', '1', 'Lit', 'everyday we lit', '2018-01-17 22:23:46');
INSERT INTO `cms_hangouts` VALUES ('7', '22', 'Louis is gay', 'he says his name is \"LEWIE\" wtf>?', '2018-01-19 19:11:36');
INSERT INTO `cms_hangouts` VALUES ('8', '23', 'hi', 'lol wtf', '2018-01-19 19:18:30');
INSERT INTO `cms_hangouts` VALUES ('9', '4', 'carly is the best', 'I AM the best on xhabbo', '2018-01-19 19:28:05');
INSERT INTO `cms_hangouts` VALUES ('10', '26', 'yo', 'yooooo', '2018-01-19 19:28:37');
INSERT INTO `cms_hangouts` VALUES ('11', '4', 'queen', 'carly is the queen of xhabbo. obey and BOW DOWN TO HER', '2018-01-19 19:30:19');

-- ----------------------------
-- Table structure for cms_hangouts_likes
-- ----------------------------
DROP TABLE IF EXISTS `cms_hangouts_likes`;
CREATE TABLE `cms_hangouts_likes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) DEFAULT NULL,
  `post` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_hangouts_likes
-- ----------------------------

-- ----------------------------
-- Table structure for cms_news
-- ----------------------------
DROP TABLE IF EXISTS `cms_news`;
CREATE TABLE `cms_news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` int(11) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  `title` varchar(20) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_news
-- ----------------------------
INSERT INTO `cms_news` VALUES ('1', '1', '1', 'xHabbo Beta', 'It\'s live!  Report errors to fb.com/chrismpettyjohn', 'lpromo_hcroombundlejan2018', '2018-01-08 23:40:12');

-- ----------------------------
-- Table structure for cms_settings
-- ----------------------------
DROP TABLE IF EXISTS `cms_settings`;
CREATE TABLE `cms_settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(15) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `status` enum('open','limited','maintenance') DEFAULT NULL,
  `swf_base` varchar(255) DEFAULT NULL,
  `figure_imager` varchar(255) DEFAULT NULL,
  `news_images` varchar(255) DEFAULT NULL,
  `emu_ip` varchar(255) DEFAULT NULL,
  `emu_port` varchar(255) DEFAULT NULL,
  `findretros` enum('0','1') DEFAULT '0',
  `fr_user` varchar(25) DEFAULT '',
  `register` enum('0','1') DEFAULT '1',
  `store` enum('0','1') DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_settings
-- ----------------------------
INSERT INTO `cms_settings` VALUES ('1', 'xHabbo', 'http://xhabbo.fun', 'open', 'http://vanitygaming.ca/swfs', 'https://avatar-retro.com/habbo-imaging/avatarimage', 'https://images.habbo.com/web_images/habbo-web-articles', '35.193.156.93', '3000', '1', 'xhabbofun', '1', '0');
