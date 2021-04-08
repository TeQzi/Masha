import Header from "../../component/header";
import Footer from "../../component/footer"
import Head from "next/head"
import Image from "next/image"
import { PrismaClient } from "@prisma/client";
import Link from 'next/link'
import BookItem from '../../component/book/BookItem'

const prisma = new PrismaClient()

export function getAllGenresHrefs(Genre) {
    return Genre.map(({ href_name }) => {
        return {
            params: {
                href_name: href_name
            }
        }
    })
}

export async function getStaticProps({ params }) {
    const allGenre = await prisma.genre.findMany()
    const currentGenre = await prisma.genre.findMany({
        where: {
            'href_name': params.href_name
        }
    });
    
    const bookOfGenre = await prisma.book.findMany({
        where:{
            "genre": currentGenre[0].genre_name
        }
    })
    return {
        props: { currentGenre, allGenre, bookOfGenre }
    }
}

export async function getStaticPaths() {
    const Genre = await prisma.genre.findMany();
    const paths = getAllGenresHrefs(Genre)
    

    return {
        paths,
        fallback: false
    }
}


export default function GenreInfo({ currentGenre, allGenre, bookOfGenre }) {


    const books = bookOfGenre.map(({nameBook, price, author, path_img, status, href_name})=>
    <BookItem nameBook={nameBook} price={price} author={author} path_img={path_img} status={status} href_name={href_name} />)
    return (
            <>
            <Header genresList={allGenre}/>
            <h1> Все книги жанра {currentGenre[0].genre_name} </h1>

                {books}
            <Footer />
            </>)
}