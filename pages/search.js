import { useRouter } from 'next/router'
import { PrismaClient } from "@prisma/client";
import Header from '../component/header'
import Footer from '../component/footer'
import BookItem from '../component/book/BookItem'

const prisma = new PrismaClient()

export default function Search({ bookInfo, allGenre }) {
    const router = useRouter()
    const value = router.query.q
    const bookCorrect = bookInfo.filter(({ nameBook }) => {
        if (nameBook == value) {
            return true
        }
        return null
    })
    const result = bookCorrect.map(({ id, nameBook, price, author, path_img, status, href_name }) =>
        <div key={id}>
            <BookItem nameBook={nameBook} price={price} author={author} path_img={path_img} status={status} href_name={href_name} />
        </div>)
    return (
        <>
            <Header genresList={allGenre} />
            <h1> Результаты по поиску {value}</h1>
            {result}
            <Footer />
        </>)
}

export async function getStaticProps() {
    const bookInfo = await prisma.book.findMany()
    const allGenre = await prisma.genre.findMany()
    return {
        props: { bookInfo, allGenre }
    }
}