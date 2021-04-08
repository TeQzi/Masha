import React, { useState } from 'react';
import ListGenres from './ListGenres'
import Link from 'next/link'
export default function AddBook() {
    const [addMsg, setAddMsg] = useState('');

    const registerUser = async event => {
        event.preventDefault()

        const res = await fetch('/api/add-book', {
            body: JSON.stringify({
                name: event.target.name.value,
                author: event.target.author.value,
                genre: event.target.genre.value,
                publishing: event.target.publishing.value,
                price: event.target.price.value,
                path_img: event.target.path_img.value,
                status: event.target.status.value,
                href_name: event.target.href_name.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
            .then((r) => {
                return r.json();
            })
            .then((data) => {
                console.log(data)
                if (data && data.error) {
                    setAddMsg(data.message);

                }
                else {
                    if (data && data.message) {
                        setAddMsg(data.message)
                    }
                }
            });

    }
    const msg = addMsg
    return (
        <>
            <form onSubmit={registerUser}>
                <label htmlFor="uname">Введите название книги</label>
                <input type="text" name="name" required />
                <br/>
                <label htmlFor="uname" >Введите автора</label>
                <input type="text" name="author" required />
                <br/>

                <label htmlFor="uname" >Введите жанр</label>
                <input type="text" name="genre" required />
                <br/>

                <label htmlFor="uname" >Введите издательство</label>
                <input type="text" name="publishing" required />
                <br/>

                <label htmlFor="uname" >Введите цену</label>
                <input type="text" name="price" required />                
                <br/>

                <label htmlFor="uname" >Введите название картики без его расширения</label>
                <input type="text" name="path_img" required />
                <br/>

                <label htmlFor="uname" >Введите статус</label>
                <input type="text" name="status" required />
                <br/>

                <label htmlFor="uname" > Введите ссылку к книге (/book-path)</label>
                <input type="text" name="href_name" required />       
                <br/>

                <button type="submit" > Занести </button>
                <p> {msg} </p>
                
            </form>
            <Link href="/">
                <a> Вернуться на сайт </a>
            </Link>
        </>
    )
}