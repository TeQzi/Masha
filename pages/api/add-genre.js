import { PrismaClient } from '@prisma/client'

export default async function handle(req, res) {
  const prisma = new PrismaClient;

  const genre_name = req.body.name
  const href = req.body.password

  
  const searchGenre = await prisma.genre.findUnique({
    where: {
      'genre_name': genre_name
    }
  })

if (searchGenre) {
  res.status(404).json({ error: true, message: 'Жанр уже существует' });


  return;
}
else{
    await prisma.genre.create({data:{
        'genre_name': genre_name,
        'href_name': href
    }})
    res.status(200).json({
        error: false, message: "Запись успешно добавлена"
    })
    return;
}

  



}
