import Link from 'next/link'
export default function BookItem({ nameBook, price, author, path_img, status, href_name }){
    return(
        <Link href={`/book/${href_name}`}>
                <a>
                    <div className="goods-card">
                        <span className=" labels">{status}</span>
                        <img src={`/img/${path_img}.png`} alt="hoodie" className="goods-image"/>
                        <h3 className="goods-title">{nameBook}</h3>
                        <p className="goods-description">{author}</p>
                        <span className="goods-price">{price}₽</span>
                    </div>
                </a>
            </Link>
    )
}