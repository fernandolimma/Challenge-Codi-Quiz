/*
  Warnings:

  - You are about to drop the column `resposta_1` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the column `resposta_2` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the column `resposta_3` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the column `resposta_4` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the column `resposta_correta` on the `Quiz` table. All the data in the column will be lost.
  - Added the required column `resposta1` to the `Quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resposta2` to the `Quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resposta3` to the `Quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resposta4` to the `Quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `respostaCorreta` to the `Quiz` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Quiz" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pergunta" TEXT NOT NULL,
    "resposta1" TEXT NOT NULL,
    "resposta2" TEXT NOT NULL,
    "resposta3" TEXT NOT NULL,
    "resposta4" TEXT NOT NULL,
    "respostaCorreta" INTEGER NOT NULL
);
INSERT INTO "new_Quiz" ("id", "pergunta") SELECT "id", "pergunta" FROM "Quiz";
DROP TABLE "Quiz";
ALTER TABLE "new_Quiz" RENAME TO "Quiz";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
