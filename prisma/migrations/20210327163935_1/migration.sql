-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nameBook" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "publishing" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "path_img" TEXT NOT NULL
);
