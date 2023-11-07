-- CreateTable
CREATE TABLE "Quiz" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pergunta" TEXT NOT NULL,
    "resposta_1" TEXT NOT NULL,
    "resposta_2" TEXT NOT NULL,
    "resposta_3" TEXT NOT NULL,
    "resposta_4" TEXT NOT NULL,
    "resposta_correta" INTEGER NOT NULL
);
