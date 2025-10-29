/*
  Warnings:

  - You are about to alter the column `nit` on the `proveedor` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(15,0)`.
  - Made the column `cuentaContable` on table `categoria` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `categoria` MODIFY `cuentaContable` DECIMAL(10, 2) NOT NULL;

-- AlterTable
ALTER TABLE `proveedor` MODIFY `nit` DECIMAL(15, 0) NOT NULL;
