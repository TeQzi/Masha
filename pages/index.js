import Head from 'next/head'
import Header from '../component/header'
import Slide from '../component/slide'
import Books from '../component/books'
import Footer from '../component/footer'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export async function getStaticProps() {
  const bookInfo = await prisma.book.findMany()
  const genresList = await prisma.genre.findMany()   
                   

  return {
      props: { bookInfo, genresList }
  }
}
export default function Home({bookInfo, genresList}) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="/js/slick.min.js"></script>
        <script src="/js/script.js"></script>
        <script src="/js/modal.js"></script>
        <title>Willberries</title>

      </Head>

      <Header genresList={genresList}></Header>

      <Slide>
        <div className="container pt-5 pb-4">
          <div className="row "  >
            <div className="col-12 d-flex justify-content-center">
              <h3 className="section-title ">Новинки</h3>
            </div>
          </div>
          <div className="row ">
            <div className="col-12 d-flex justify-content-center">
              <a href="#" className="link slide-description  ">Смотреть все</a>
            </div>
          </div>
        </div>
      </Slide>

      <Books bookInfo={bookInfo}> </Books>

      <Footer></Footer>
    </>

  )
}
