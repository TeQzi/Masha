// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
const jwt = require('jsonwebtoken');
const jwtSecret = 'SUPERSECRETE20220';

export default async function handle(req, res) {
  const prisma = new PrismaClient;
  const username = req.body.name
  const password = req.body.password
  console.log(username)
  const searchUser = await prisma.user.findMany({
    where: {
      'login': username
    }
  })
  console.log(username, searchUser)


if (!searchUser) {
  res.status(404).json({ error: true, message: 'Пользователь не найден' });
  return;
}

  if (password == searchUser[0].password) {
    const isAdmin = searchUser[0].isAdmin
    const token = jwt.sign(
      { username: username, password: password, isAdmin: isAdmin },
      jwtSecret,
      {
        expiresIn: 3000, //50 minutes
      },
    );
    res.status(200).json({ token });
    return;
  }
  else {
    res.status(500).json({ error: true, message: 'Пароль неверный!' });
  }



}
