import { PrismaClient } from '@prisma/client'

export default async function handle(req, res) {
    const prisma = new PrismaClient;
    const allGenres = await prisma.$queryRaw`select genre_name from genre;`
    res.status(200).json({
        error: false, message: "Список жанров", value: allGenres
    })
}