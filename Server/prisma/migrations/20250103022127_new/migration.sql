/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Chatroom` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Chatroom_title_key" ON "Chatroom"("title");
