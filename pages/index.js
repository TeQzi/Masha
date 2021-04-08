import Head from 'next/head'
import Header from '../component/header'
import Slide from '../component/slide'
import Books from '../component/book/Books'
import Footer from '../component/footer'
import { PrismaClient } from "@prisma/client";
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import React, { useEffect } from "react";

const prisma = new PrismaClient()

export default function Home({ bookInfo, genresList }) {
  const { data, revalidate } = useSWR('/api/me', async function (args) {
    const res = await fetch(args);
    return res.json();
  });
  if (!data) return <h1>Загрузка...</h1>;
  let loggedIn = false;
  if (data.password) {
    loggedIn = true;
  }


  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
        {/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="/js/slick.min.js"></script>
        <script src="/js/script.js"></script>
        <script src="/js/modal.js"></script> */}
        <title>Willberries</title>
      </Head>

      <Header genresList={genresList} username={data.username} revalidate={revalidate} isAdmin={data.isAdmin}></Header>
      <Slide />
      <Books bookInfo={bookInfo}> </Books>
      <Footer />

    </>

  )
}

export async function getStaticProps() {
  const bookInfo = await prisma.book.findMany()
  const genresList = await prisma.genre.findMany()


  return {
    props: { bookInfo, genresList }
  }
}