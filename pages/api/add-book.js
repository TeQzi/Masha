import { PrismaClient } from '@prisma/client'

export default async function handle(req, res) {
    const prisma = new PrismaClient;

    const bookName = req.body.name
    const author = req.body.author
    const genre = req.body.genre
    const publishing = req.body.publishing
    const price = parseFloat(req.body.price)
    const path_img = req.body.path_img
    const status = req.body.status
    const href_name = req.body.href_name


    const searchGenre = await prisma.book.findMany({
        where: {
            'genre': genre
        }
    })

    const searchHref = await prisma.book.findMany({
        where: {
            'href_name': href_name
        }
    })

    const searchStatus = await prisma.book.findMany({
        where: {
            'status': status
        }
    })

    if (!searchGenre.length) {
        res.status(404).json({error: true, message: 'Такого жанра не существует' });
        return;
    }
    
    if (searchHref.length){
        res.status(404).json({error: true, message: "Данная ссылка уже связана с другой книгой"})
        return
    }


    if (!searchStatus.length) {
        res.status(404).json({ error: true, message: 'Такого статуса не существует' })
        return;
    }


    else {
        await prisma.book.create({
            data: {
                'nameBook': bookName,
                'author': author,
                'genre': genre,
                'publishing': publishing,
                'price': price,
                'path_img': path_img,
                'status': status,
                'href_name': href_name
            }
        })
        res.status(200).json({
            error: false, message: "Запись успешно добавлена"
        })
        return;
    }





}
