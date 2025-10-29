/*
  Warnings:

  - You are about to alter the column `cuentaContable` on the `categoria` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(15,0)`.

*/
-- AlterTable
ALTER TABLE `categoria` MODIFY `cuentaContable` DECIMAL(15, 0) NULL;
