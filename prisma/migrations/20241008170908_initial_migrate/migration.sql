-- CreateTable
CREATE TABLE "diffs" (
    "id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "diffs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "models" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "models_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "commit_message" (
    "id" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "diffId" INTEGER NOT NULL,
    "modelId" INTEGER NOT NULL,

    CONSTRAINT "commit_message_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "commit_message" ADD CONSTRAINT "commit_message_diffId_fkey" FOREIGN KEY ("diffId") REFERENCES "diffs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commit_message" ADD CONSTRAINT "commit_message_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "models"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
