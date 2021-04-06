import Genres from '../component/genres'
import Link from 'next/link'
import cookie from 'js-cookie';
export default function Header({ genresList, username, revalidate, isAdmin}) {

    return (
        <>
            <header className="container header px-4 px-md-0">
                <div className="row justify-content-between align-items-center" >
                    <div className="col-lg-2 col-6">
                        <a href="/" className="logo-link">
                            <img width="128" src="/img/logo.svg" alt="logo" className="logo-image" />
                        </a>
                    </div>
                    <div className="col-lg-7 d-none d-lg-block" >
                        <nav>
                            <ul className="navigation d-flex justify-content-around">
                                <Genres genresList={genresList} />

                                <li>
                                    {username && <span> Здраствуйте, {username}
                                        <button
                                            onClick={() => {
                                                cookie.remove('token');
                                                revalidate();
                                            }}>
                                            (Выйти)
                                        </button>
                                    </span>}
                                </li>
                                <li >
                                    {isAdmin &&
                                        <Link href="/admin-panel">
                                            <a> Админ-панель </a></Link>
                                    }
                                </li>

                            </ul>
                        </nav>
                    </div>
                    <div className="col-3 d-flex justify-content-around">

                        <div className="user">
                            <Link href="/login">
                                <button>
                                    <img className="button-icon" src="/img/Union.svg" alt="icon" />
                                </button>
                            </Link>
                            <div id="id01" className="modal">


                            </div>
                            <a href="" className="link">
                                <img className="button-icon" src="/img/Cart.svg" alt="icon" />
                            </a>
                            <span className="number">8(908)086-02-38</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}