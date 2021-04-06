import Link from "next/link"

export default function Genres({ genresList }) {

    const genresItem = genresList.map(({ genre_name, href_name }) =>
        <li key={href_name}>
            <Link href={`/genre/${href_name}`}>
                <a className="navigation-item2">{genre_name}</a>
            </Link>
        </li>)

    return (
        <li>
            <a href="#/" className="navigation-item">ЖAHPЫ</a>
            <ul className="submenu">
                {genresItem}
            </ul>
        </li>
    )
}