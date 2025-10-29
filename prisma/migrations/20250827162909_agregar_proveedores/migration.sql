-- AlterTable
ALTER TABLE `categoria` ADD COLUMN `cuentaContable` DECIMAL(10, 2) NULL;

-- AlterTable
ALTER TABLE `gasto` ADD COLUMN `proveedorId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Proveedor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nit` DECIMAL(10, 2) NOT NULL,
    `nombre` VARCHAR(60) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CategoriaToProveedor` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CategoriaToProveedor_AB_unique`(`A`, `B`),
    INDEX `_CategoriaToProveedor_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Gasto` ADD CONSTRAINT `Gasto_proveedorId_fkey` FOREIGN KEY (`proveedorId`) REFERENCES `Proveedor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoriaToProveedor` ADD CONSTRAINT `_CategoriaToProveedor_A_fkey` FOREIGN KEY (`A`) REFERENCES `Categoria`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoriaToProveedor` ADD CONSTRAINT `_CategoriaToProveedor_B_fkey` FOREIGN KEY (`B`) REFERENCES `Proveedor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
