import { useState } from 'react'
import useSWR from 'swr';
export default function ListGenres() {

    const { data } = useSWR('/api/get-list-genres', async function (args) {
        const res = await fetch(args);
        return res.json();
    });

    if (!data) return <h1>Загрузка...</h1>;
    // TODO доделать обработку данных из get-list-genres
    const genres = data
    console.log("sadas" + genres)
    const optionItem = genres.map(({genre_name}) => 
        <option value={genre_name}>{genre_name}</option>)

    const ChoiceBook = event => {
        event.preventDefault() // don't redirect the page
        setBook(event.target.value)
    }
    return (
        <select value={book} onChange={ChoiceBook}>
            <option>Выберите жанр</option>
            {optionItem}
        </select>
    )
}