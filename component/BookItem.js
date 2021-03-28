import Link from 'next/link';


export default function BookItem({ bookInfo, stat }) {
    const bookCorrect = bookInfo.filter(({ status }) => {
        if (stat == status) {
            return true
        }
        return null
    })

    const book = bookCorrect.map(({ nameBook, price, author, path_img, status, href_name }) =>
        <div className="slider-item">
            <Link href={`/book/${href_name}`}>
                <a>
                    <div className="goods-card">
                        <span className=" labels">{status}</span>
                        <img src={"img/" + path_img + ".png"} alt="hoodie" className="goods-image" />
                        <h3 className="goods-title">{nameBook}</h3>
                        <p className="goods-description">{author}</p>
                        <span className="goods-price">{price}₽</span>
                    </div>
                </a>
            </Link>
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