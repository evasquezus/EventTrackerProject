-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema bookstore
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `bookstore` ;

-- -----------------------------------------------------
-- Schema bookstore
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bookstore` DEFAULT CHARACTER SET utf8 ;
USE `bookstore` ;

-- -----------------------------------------------------
-- Table `bookstore`.`books`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bookstore`.`books` ;

CREATE TABLE IF NOT EXISTS `bookstore`.`books` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NULL DEFAULT NULL,
  `author_name` VARCHAR(100) NULL DEFAULT NULL,
  `category` VARCHAR(45) NULL DEFAULT NULL,
  `data_of_purchase` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bookstore`.`review`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bookstore`.`review` ;

CREATE TABLE IF NOT EXISTS `bookstore`.`review` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `review_detail` VARCHAR(500) NULL DEFAULT NULL,
  `books_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `books_id`
    FOREIGN KEY (`id`)
    REFERENCES `bookstore`.`books` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8;

SET SQL_MODE = '';
DROP USER IF EXISTS userOne;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'userOne' IDENTIFIED BY 'klktudice';

GRANT SELECT ON TABLE `mydb`.* TO 'userOne';
GRANT SELECT ON TABLE `bookstore`.* TO 'userOne';
GRANT SELECT, INSERT, TRIGGER ON TABLE `mydb`.* TO 'userOne';
GRANT SELECT, INSERT, TRIGGER ON TABLE `bookstore`.* TO 'userOne';
GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE `mydb`.* TO 'userOne';
GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE `bookstore`.* TO 'userOne';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `bookstore`.`books`
-- -----------------------------------------------------
START TRANSACTION;
USE `bookstore`;
INSERT INTO `bookstore`.`books` (`id`, `title`, `author_name`, `category`, `data_of_purchase`) VALUES (1, 'adsadsad', NULL, NULL, NULL);
INSERT INTO `bookstore`.`books` (`id`, `title`, `author_name`, `category`, `data_of_purchase`) VALUES (2, 'asdadw', NULL, NULL, NULL);
INSERT INTO `bookstore`.`books` (`id`, `title`, `author_name`, `category`, `data_of_purchase`) VALUES (3, 'qwqwq', NULL, NULL, NULL);
INSERT INTO `bookstore`.`books` (`id`, `title`, `author_name`, `category`, `data_of_purchase`) VALUES (4, 'tygsrg', NULL, NULL, NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `bookstore`.`review`
-- -----------------------------------------------------
START TRANSACTION;
USE `bookstore`;
INSERT INTO `bookstore`.`review` (`id`, `review_detail`, `books_id`) VALUES (1, 'asdasd', 1);
INSERT INTO `bookstore`.`review` (`id`, `review_detail`, `books_id`) VALUES (2, 'asdasd', NULL);

COMMIT;

