-- DropForeignKey
ALTER TABLE "commit_message" DROP CONSTRAINT "commit_message_diffId_fkey";

-- DropForeignKey
ALTER TABLE "commit_message" DROP CONSTRAINT "commit_message_modelId_fkey";

-- AddForeignKey
ALTER TABLE "commit_message" ADD CONSTRAINT "commit_message_diffId_fkey" FOREIGN KEY ("diffId") REFERENCES "diffs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commit_message" ADD CONSTRAINT "commit_message_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "models"("id") ON DELETE CASCADE ON UPDATE CASCADE;
