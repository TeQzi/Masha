import Header from "../../component/header";
import Footer from "../../component/footer"
import Head from "next/head"
import Image from "next/image"
import { PrismaClient } from "@prisma/client";

export function getAllBookHrefs(Book) {
    return Book.map(({ href_name }) => {
        return {
            params: {
                href_name: href_name
            }
        }
    })
}

const prisma = new PrismaClient()

export async function getStaticProps({ params }) {
    const allGenre = await prisma.genre.findMany()
    const currentBook = await prisma.book.findMany({
        where: {
            'href_name': params.href_name
        }
    });
    return {
        props: { currentBook, allGenre }
    }
}

export async function getStaticPaths() {
    const Books = await prisma.book.findMany();
    const paths = getAllBookHrefs(Books)

    return {
        paths,
        fallback: false
    }
}

export default function BookInfo({ currentBook, allGenre }) {
    
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
            </Head>
            <Header genresList={allGenre}/>
            <section className="slide slide-1 swiper-slide">
                <div className="container">
                    <div className="row">
                        <div className="col-4">

                        </div>
                        <div className="col-3">
                            <Image
                                priority
                                src={`/img/${currentBook[0].path_img}.png`}
                                className="goods-image"
                                height={280}
                                width={200}
                                alt="Text T-Shirt"
                            />
                        </div>
                        <div className="col-lg-4 col-9-xl">
                            <h3 className='nameTovar'>{currentBook[0].nameBook}</h3>
                            <p className="goods-description">{currentBook[0].author}</p>
                            <p className="goods-description">{currentBook[0].price}P</p>
                            <p className="goods-description">Издательство: {currentBook[0].publishing}</p>
                            <p className="goods-description">Количесвто страниц:464</p>
                            <p className="goods-description">Описание: Жила была и умерла</p>
                            <a href="" className="link">
                                KУПИТЬ
                            </a>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-4">

                        </div>
                        <div className="col-lg-4  d-flex justify-content-center ">

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}