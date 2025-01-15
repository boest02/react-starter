-- CreateTable
CREATE TABLE `footwear` (
    `id` VARCHAR(10) NOT NULL,
    `type` VARCHAR(50) NULL,
    `foot` VARCHAR(10) NULL,
    `size` DECIMAL(3, 1) NULL,
    `width` VARCHAR(20) NULL,
    `color` VARCHAR(50) NULL,
    `brand` VARCHAR(50) NULL,
    `material` VARCHAR(50) NULL,
    `closure` VARCHAR(50) NULL,
    `image` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Shoe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `type` VARCHAR(50) NULL,
    `foot` VARCHAR(10) NULL,
    `size` DECIMAL(3, 1) NULL,
    `width` VARCHAR(20) NULL,
    `color` VARCHAR(50) NULL,
    `brand` VARCHAR(50) NULL,
    `material` VARCHAR(50) NULL,
    `closure` VARCHAR(50) NULL,
    `image` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
