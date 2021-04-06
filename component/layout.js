import Footer from './footer'
import Header from './header'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default function Layout({ children , bookInfo, genresList}) {
    return (<div>
    <Header genresList={genresList} />
    {children}
    <Footer />
    </div>)
  }


  export async function getStaticProps() {
    const bookInfo = await prisma.book.findMany()
    const genresList = await prisma.genre.findMany()   
    console.log(bookInfo)
  
    return {
        props: { bookInfo, genresList }
    }
  }