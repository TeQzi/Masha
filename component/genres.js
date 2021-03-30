import Link from "next/link"

export default function Genres({ genresList }) {

    const genresItem = genresList.map(({ genre_name, href_name }) =>
        <li>
            <Link href={`/genre/${href_name}`}>
                <a className="navigation-item2">{genre_name}</a>
            </Link>
        </li>)

    return (
        <li>
            <a href="#/" className="navigation-item">ЖAHP</a>
            <ul className="submenu">
                {genresItem}
            </ul>
        </li>
    )
}