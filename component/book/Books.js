
import BooksList from './BooksList'
import BookHeader from './BookHeader'

export default function Books({ bookInfo }) {
    return (
        <>
            <div className="container pt-5 pb-4">
                <BookHeader name="Новинки"/> 
            </div>
            <div className="container">
                <BooksList bookInfo={bookInfo} stat="Новинка" />
            </div>
            <div className="container pb-4">
                <BookHeader name="Бестселлеры"/> 
            </div>
            <div className="container">
                <BooksList bookInfo={bookInfo} stat="Бестселлер" />
            </div>
            <div className="container  pb-4">
                <BookHeader name="Популярное" /> 
            </div>
            <div className="container mb-4">
                <BooksList bookInfo={bookInfo} stat="Популярное" />
            </div>
        </>

    )
}