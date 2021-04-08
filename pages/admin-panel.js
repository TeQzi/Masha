import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import React, { useState } from "react";
import DataForm from '../component/admin/DataForm'
import Header from '../component/header'

export default function Adminka() {

  const [targetValue, setTargetValue] = useState('')

  const { data, revalidate } = useSWR('/api/me', async function (args) {
    const res = await fetch(args);
    return res.json();
  });
  if (!data) return <h1>Загрузка...</h1>;
  let loggedIn = false;
  if (data.password) {
    loggedIn = true;
  }
  const registerUser = event => {
    event.preventDefault() // don't redirect the page
    setTargetValue(event.target.value)
    // where we'll add our form logic
  }
  return (
    <>
      {data.isAdmin &&
        <>
          <select value={targetValue} onChange={registerUser}>
          <option>Выберите таблицу базы</option>
            <option value='book'>Книги</option>
            <option value='genre'>Жанры</option>
            <option value='user'>Пользователи</option>
          </select>
          <DataForm dbName={targetValue}/>
        </>}
      <h1>{!data.isAdmin && "Для доступа к админ панели необходимо права администратора"} </h1>
    </>
  )
}