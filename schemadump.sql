# ************************************************************
# Sequel Pro SQL dump
# Version 4099
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Database: Dummy
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

USE `test`;


DROP TABLE IF EXISTS `teachers`;
CREATE TABLE `teachers` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `teachers` (name) VALUES
	('Filius Flitwick'),
	('Rubeus Hagrid'),
	('Rolanda Hooch'),
	('Minerva McGonagall'),
	('Severus Snape'),
	('Gilderoy Lockhart');


DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `students` (name) VALUES
	('Harry Potter'),
	('Hermione Granger'),
	('Ron Weasley'),
	('Draco Malfoy'),
	('Seamus Finnigan'),
	('Neville Longbottom');


DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `books` (title) VALUES
	('A Beginner’s Guide to Transfiguration'),
	('Break with a Banshee'),
	('Wanderings with Werewolves'),
	('Magical Drafts and Potions'),
	('The Standard Book of Spells'),
	('The Monster Book of Monsters');



DROP TABLE IF EXISTS `classes`;
CREATE TABLE `classes` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  `teacher_ids` varchar(1000) DEFAULT '',
  `required_book_ids` varchar(1000) DEFAULT '',
  `enrolled_student_ids` varchar(1000) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `classes` (name, teacher_ids, required_book_ids, enrolled_student_ids) VALUES
	('Charms', '1,', '5,', '2,5,6,'),
	('Care of Magical Creatures', '2,', '6,', '2,5,'),
	('Flying', '3,', '', '1,4,2,3,5,'),
	('Transfiguration', '4,', '1,', '2,6,'),
	('Potions', '5,', '4,', '1,4,2,6,'),
	('Defense Against the Dark Arts', '6,', '2,3,', '1,4,2,5,');





/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
