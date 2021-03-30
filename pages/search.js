import { useRouter } from 'next/router'
import Header from '../component/header'
import Footer from '../component/footer'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import Link from "next/link"


export async function getStaticProps() {
    const bookInfo = await prisma.book.findMany()
    return {
        props: { bookInfo }
    }
}
export default function Search({ bookInfo }) {
    const router = useRouter()
    const value = router.query.q
    const bookCorrect = bookInfo.filter(({ nameBook }) => {
        if (nameBook == value) {
            return true
        }
        return null
    })
    const result = bookCorrect.map(({nameBook, price, author, path_img, status, href_name }) =>
    <Link href={`/book/${href_name}`}>
                <a>
                    <div className="goods-card">
                        <span className=" labels">{status}</span>
                        <img src={"/img/" + path_img + ".png"} alt="hoodie" className="goods-image" />
                        <h3 className="goods-title">{nameBook}</h3>
                        <p className="goods-description">{author}</p>
                        <span className="goods-price">{price}₽</span>
                    </div>
                </a>
            </Link>)
    return (
        <>
            <Header />
            <h1> Результаты по поиску {value}</h1>
            {result}
            <Footer />
        </>)
}