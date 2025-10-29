-- CreateTable
CREATE TABLE `Consignacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fecha` DATETIME(0) NOT NULL,
    `monto` DECIMAL(10, 2) NOT NULL,
    `concepto` TEXT NULL,
    `comprobante` VARCHAR(100) NULL,
    `usuarioId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Consignacion` ADD CONSTRAINT `Consignacion_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
