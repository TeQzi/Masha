-- CreateTable
CREATE TABLE "Genre" (
    "genre_name" TEXT NOT NULL PRIMARY KEY,
    "href_name" TEXT
);

-- CreateTable
CREATE TABLE "User" (
    "login" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nameBook" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "genre" TEXT,
    "publishing" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "path_img" TEXT NOT NULL,
    "status" TEXT,
    "href_name" TEXT,
    FOREIGN KEY ("genre") REFERENCES "Genre" ("genre_name") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Book" ("id", "nameBook", "author", "genre", "publishing", "price", "path_img") SELECT "id", "nameBook", "author", "genre", "publishing", "price", "path_img" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
