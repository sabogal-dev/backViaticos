/*
  Warnings:

  - You are about to alter the column `fecha` on the `gasto` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime(0)`.

*/
-- AlterTable
ALTER TABLE `gasto` MODIFY `fecha` DATETIME(0) NOT NULL;
