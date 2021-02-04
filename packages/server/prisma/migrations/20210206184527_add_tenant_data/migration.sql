-- CreateEnum
CREATE TYPE "Role" AS ENUM ('OWNER', 'MANAGER', 'WAITER');

-- CreateTable
CREATE TABLE "Tenant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "domain_name" TEXT NOT NULL,
    "hotline" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenantUser" (
    "role" "Role" NOT NULL DEFAULT E'OWNER',
    "userId" INTEGER NOT NULL,
    "tenantId" INTEGER NOT NULL,

    PRIMARY KEY ("userId","tenantId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tenant.domain_name_unique" ON "Tenant"("domain_name");

-- AddForeignKey
ALTER TABLE "TenantUser" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantUser" ADD FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
