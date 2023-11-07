/*
  Warnings:

  - You are about to alter the column `respostaCorreta` on the `Quiz` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

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
INSERT INTO "new_Quiz" ("id", "pergunta", "resposta1", "resposta2", "resposta3", "resposta4", "respostaCorreta") SELECT "id", "pergunta", "resposta1", "resposta2", "resposta3", "resposta4", "respostaCorreta" FROM "Quiz";
DROP TABLE "Quiz";
ALTER TABLE "new_Quiz" RENAME TO "Quiz";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
