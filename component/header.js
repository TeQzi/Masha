export default function Header() {
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
                                <li >
                                    <a href="#/" className="navigation-item"> ЖAHP</a>
                                    <ul className="submenu">
                                        <li ><a href="" className="navigation-item2">Зарубежная классика </a></li>

                                        <li><a href="" className="navigation-item2">Русская классика</a></li>
                                        <li><a href="" className="navigation-item2">Любовные романы</a></li>
                                        <li><a href="" className="navigation-item2">Детективы</a></li>
                                        <li><a href="" className="navigation-item2">Ужасы,Мистика</a></li>
                                        <li><a href="" className="navigation-item2">Детективы</a></li>
                                        <li><a href="" className="navigation-item2">Психология</a></li>
                                        <li><a href="" className="navigation-item2">Комиксы</a></li>
                                        <li><a href="" className="navigation-item2">Бизнес-книги</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="stuff.html" className="navigation-item"> Новинки</a>
                                </li>
                                <li >
                                    <a href="#/" className="navigation-item">Бестселлеры</a>
                                </li>
                                <li >
                                    <a href="#/" className="navigation-item"> Популярное</a>
                                </li>
                                <li>
                                    <a href="#/" className="navigation-item">О нас</a>
                                </li>

                            </ul>
                        </nav>
                    </div>
                    <div className="col-3 d-flex justify-content-around">

                        <div className="user">
                            <button>
                                <img className="button-icon" src="/img/Union.svg" alt="icon" />
                            </button>
                            <div id="id01" className="modal">

                                <form className="modal-content animate" action="/action_page.php">
                                    <div className="imgcontainer">
                                        <span className="close"
                                            title="Close Modal">×</span>

                                    </div>

                                    <div className="container">
                                        <label htmlFor="uname"><b>Имя пользователя</b></label>
                                        <input className='logs' type="text" placeholder="Введите имя пользователя" name="uname" required />

                                        <label htmlFor="psw"><b>Пароль</b></label>
                                        <input className='logs' type="password" placeholder="Введите пароль" name="psw" required />

                                        <button type="submit" className='logs'>Войти</button>
                                        <label>
                                            <input type="checkbox" name="remember" /> Запомнить меня
                                    </label>
                                        <span className="psw">Забыли <a href="#">пароль?</a></span>
                                    </div>

                                    <div className="container">
                                        <style jsx>{`
                                .container {
                                    background-color:#f1f1f1;
                                }
                                        `}</style>

                                    </div>
                                </form>
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