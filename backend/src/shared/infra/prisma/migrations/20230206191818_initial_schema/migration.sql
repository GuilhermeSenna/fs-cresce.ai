-- CreateTable
CREATE TABLE "Pokemon" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(255) NOT NULL,
    "level" INTEGER NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,
    "abilities" TEXT NOT NULL,
    "gender" TEXT[],
    "type" TEXT[],
    "weakness" TEXT[],

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stats" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "hp" INTEGER NOT NULL,
    "attack" INTEGER NOT NULL,
    "defense" INTEGER NOT NULL,
    "special_attack" INTEGER NOT NULL,
    "special_deffense" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "pokemonId" UUID NOT NULL,

    CONSTRAINT "Stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stats_pokemonId_key" ON "Stats"("pokemonId");

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;
