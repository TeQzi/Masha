
import BookItem from '../component/BookItem'
import BookHeader from '../component/BookHeader'

export default function Books({ bookInfo }) {
    return (
        <>
            <div className="container pt-5 pb-4">
                <BookHeader name="Новинки"/> 
            </div>
            <div className="container">
                <BookItem bookInfo={bookInfo} stat="Новинка" />
            </div>
            <div className="container pb-4">
                <BookHeader name="Бестселлеры"/> 
            </div>
            <div className="container">
                <BookItem bookInfo={bookInfo} stat="Бестселлер" />
            </div>
            <div className="container  pb-4">
                <BookHeader name="Популярное" /> 
            </div>
            <div className="container mb-4">
                <BookItem bookInfo={bookInfo} stat="Популярное" />
            </div>
        </>

    )
}