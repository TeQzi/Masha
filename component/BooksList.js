import BookItem from '../component/BookItem'

export default function BooksList({ bookInfo, stat }) {
    const bookCorrect = bookInfo.filter(({ status }) => {
        if (stat == status) {
            return true
        }
        return null
    })

    const book = bookCorrect.map(({ nameBook, price, author, path_img, status, href_name }) =>
        <div className="slider-item" key={path_img}>
            <BookItem nameBook={nameBook} price={price} author={author} path_img={path_img} status={status} href_name={href_name} />
        </div>
    )
    return (
        <div className="row ">
            <div className="col-12">
                <div className="wrapper ">
                    <div className="slider-1">
                        {book}
                    </div>
                </div>
            </div>
        </div>
    )
}