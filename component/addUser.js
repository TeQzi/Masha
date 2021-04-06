import Router from 'next/router';
import cookie from 'js-cookie';
import React, { useState } from 'react';
import { data } from 'jquery';

export default function addUser() {
    const [addMsg, setAddMsg] = useState('');

    const registerUser = async event => {
        event.preventDefault()

        const res = await fetch('/api/add-user', {
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
                <label htmlFor="uname">Введите Логин</label>
                <input type="text" name="login" required />
                <label htmlFor="uname" >Введите Пароль</label>
                <input type="password" name="password" required />
                <button type="submit" > Занести </button>
                <p> {msg} </p>
                
            </form>
        </>
    )
}