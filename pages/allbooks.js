import Header from "../component/header"
import Footer from "../component/footer"
import { PrismaClient } from "@prisma/client";
import BookItem from '../component/BookItem'

const prisma = new PrismaClient()

export default function AllBooks({ bookInfo, allGenre }) {
    const Books = bookInfo.map(({ id,nameBook, price, author, path_img, status, href_name }) =>
    
        <div key={id}>
            <BookItem nameBook={nameBook} price={price} author={author} path_img={path_img} status={status} href_name={href_name} />)
        </div>)
    return (
        <>
            <Header genresList={allGenre} />
            <h1> Все книги на сайте </h1>

            {Books}
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    const bookInfo = await prisma.book.findMany()
    const allGenre = await prisma.genre.findMany()


    return {
        props: { bookInfo, allGenre }
    }
}