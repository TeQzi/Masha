import Head from 'next/head'
import Header from '../component/header'
import Slide from '../component/slide'
import Books from '../component/books'
import Footer from '../component/footer'

export default function Home() {
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

      <Header> </Header>

      <Slide>
        <div class="container pt-5 pb-4">
          <div class="row "  >
            <div class="col-12 d-flex justify-content-center">
              <h3 class="section-title ">Новинки</h3>
            </div>
          </div>
          <div class="row ">
            <div class="col-12 d-flex justify-content-center">
              <a href="#" class="link slide-description  ">Смотреть все</a>
            </div>
          </div>
        </div>
      </Slide>

      <Books> </Books>

      <Footer></Footer>
    </>

  )
}
