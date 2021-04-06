// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'



export default async function handle(req, res) {
  const prisma = new PrismaClient;
  console.log(req.body)
  const username = req.body.name
  const password = req.body.password
  const isAdmin = req.body.isAdmin
  
  const searchUser = await prisma.user.findUnique({
    where: {
      'login': username
    }
  })


if (searchUser) {
  res.status(404).json({ error: true, message: 'Пользователь уже существует' });


  return;
}
else{
    const userAdd = await prisma.user.create({data:{
        'login': username,
        'password': password
    }})
    res.status(200).json({
        error: false, message: "Запись успешно добавлена"
    })
    console.log(userAdd)
    return;
}

  



}
