-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "chatroomId" TEXT;

-- CreateTable
CREATE TABLE "Chatroom" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Chatroom_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_chatroomId_fkey" FOREIGN KEY ("chatroomId") REFERENCES "Chatroom"("id") ON DELETE SET NULL ON UPDATE CASCADE;
