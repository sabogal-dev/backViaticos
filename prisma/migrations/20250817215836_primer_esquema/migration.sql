/*
  Warnings:

  - Added the required column `fecha` to the `Gasto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `gasto` ADD COLUMN `fecha` DATETIME(3) NOT NULL,
    MODIFY `monto` DECIMAL(10, 2) NOT NULL;

-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `role` VARCHAR(191) NOT NULL;
