import React, { useState } from 'react';
import Link from 'next/link'
export default function AddGenre() {
    const [addMsg, setAddMsg] = useState('');

    const registerUser = async event => {
        event.preventDefault()

        const res = await fetch('/api/add-genre', {
            body: JSON.stringify({
                name: event.target.login.value,
                password: event.target.password.value,
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
                <label htmlFor="uname">Введите имя жинра</label>
                <input type="text" name="login" required />
                <br/>
                <label htmlFor="uname" >Введите ссылку к этому жанру(/genre-name)</label>
                <input type="text" name="password" required />
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