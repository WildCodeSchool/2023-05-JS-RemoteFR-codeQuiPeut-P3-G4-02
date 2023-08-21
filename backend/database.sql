-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema alterworldBdd
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema alterworldBdd
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `alterworldBdd` DEFAULT CHARACTER SET utf8 ;
USE `alterworldBdd` ;

-- -----------------------------------------------------
-- Table `alterworldBdd`.`utilisateurs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `alterworldBdd`.`utilisateurs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user-firstname` VARCHAR(250) NULL,
  `user-lastname` VARCHAR(250) NULL,
  `adress` VARCHAR(250) NULL,
  `phonenumber` INT NULL,
  `profilpicture` VARCHAR(250) NULL,
  `password` VARCHAR(250) NULL,
  `email` VARCHAR(250) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `alterworldBdd`.`univers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `alterworldBdd`.`univers` (
  `idunivers` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(250) NULL,
  PRIMARY KEY (`idunivers`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `alterworldBdd`.`produits`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `alterworldBdd`.`produits` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(250) NULL,
  `price` VARCHAR(250) NULL,
  `imgUrl` VARCHAR(400) NULL,
  `category` VARCHAR(100) NULL,
  `univers` VARCHAR(100) NULL,
  `univers_idunivers` INT NOT NULL,
  `typeProduits` VARCHAR(100) NULL,
  PRIMARY KEY (`id`, `univers_idunivers`),
  INDEX `fk_produits_univers1_idx` (`univers_idunivers` ASC) VISIBLE,
  CONSTRAINT `fk_produits_univers1`
    FOREIGN KEY (`univers_idunivers`)
    REFERENCES `alterworldBdd`.`univers` (`idunivers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `alterworldBdd`.`supportMessage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `alterworldBdd`.`supportMessage` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `mail` VARCHAR(250) NULL,
  `message` VARCHAR(250) NULL,
  `nom` VARCHAR(250) NULL,
  `sujet` VARCHAR(250) NULL,
  `envoi` VARCHAR(250) NULL,
  `reception` VARCHAR(250) NULL,
  `utilisateurs_id` INT NOT NULL,
  PRIMARY KEY (`id`, `utilisateurs_id`),
  INDEX `fk_supportMessage_utilisateurs1_idx` (`utilisateurs_id` ASC) VISIBLE,
  CONSTRAINT `fk_supportMessage_utilisateurs1`
    FOREIGN KEY (`utilisateurs_id`)
    REFERENCES `alterworldBdd`.`utilisateurs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `alterworldBdd`.`transactions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `alterworldBdd`.`transactions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `montant` FLOAT NULL,
  `acheteur` VARCHAR(250) NULL,
  `vendeur` VARCHAR(250) NULL,
  `utilisateurs_id` INT NOT NULL,
  `utilisateurs_commentaires_id` INT NOT NULL,
  `utilisateurs_évaluations_id` INT NOT NULL,
  PRIMARY KEY (`id`, `utilisateurs_id`, `utilisateurs_commentaires_id`, `utilisateurs_évaluations_id`),
  INDEX `fk_transactions_utilisateurs1_idx` (`utilisateurs_id` ASC, `utilisateurs_commentaires_id` ASC, `utilisateurs_évaluations_id` ASC) VISIBLE,
  CONSTRAINT `fk_transactions_utilisateurs1`
    FOREIGN KEY (`utilisateurs_id`)
    REFERENCES `alterworldBdd`.`utilisateurs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `alterworldBdd`.`panier`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `alterworldBdd`.`panier` (
  `user_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  `quantity` INT NULL,
  PRIMARY KEY (`user_id`, `products_id`),
  INDEX `fk_user_has_products_products1_idx` (`products_id` ASC) VISIBLE,
  INDEX `fk_user_has_products_user_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_products_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `alterworldBdd`.`utilisateurs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_products_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `alterworldBdd`.`produits` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `alterworldBdd`.`order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `alterworldBdd`.`order` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `numCommande` INT NULL,
  `utilisateurs_id` INT NOT NULL,
  `prixTotal` FLOAT NULL,
  PRIMARY KEY (`id`, `utilisateurs_id`),
  INDEX `fk_order_utilisateurs1_idx` (`utilisateurs_id` ASC) VISIBLE,
  CONSTRAINT `fk_order_utilisateurs1`
    FOREIGN KEY (`utilisateurs_id`)
    REFERENCES `alterworldBdd`.`utilisateurs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `alterworldBdd`.`produits_has_order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `alterworldBdd`.`produits_has_order` (
  `produits_id` INT NOT NULL,
  `order_id` INT NOT NULL,
  `quantitees` INT NULL,
  PRIMARY KEY (`produits_id`, `order_id`),
  INDEX `fk_produits_has_order_order1_idx` (`order_id` ASC) VISIBLE,
  INDEX `fk_produits_has_order_produits1_idx` (`produits_id` ASC) VISIBLE,
  CONSTRAINT `fk_produits_has_order_produits1`
    FOREIGN KEY (`produits_id`)
    REFERENCES `alterworldBdd`.`produits` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_produits_has_order_order1`
    FOREIGN KEY (`order_id`)
    REFERENCES `alterworldBdd`.`order` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;