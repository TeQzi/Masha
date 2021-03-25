export default function Header() {
    return (
        <>
            <header class="container header px-4 px-md-0">
                <div class="row justify-content-between align-items-center" >
                    <div class="col-lg-2 col-6">
                        <a href="#/" class="logo-link">
                            <img width="128" src="img/logo.svg" alt="logo" class="logo-image" />
                        </a>
                    </div>
                    <div class="col-lg-7 d-none d-lg-block" >
                        <nav>
                            <ul class="navigation d-flex justify-content-around">
                                <li >
                                    <a href="#/" class="navigation-item"> ЖAHP</a>
                                    <ul class="submenu">
                                        <li ><a href="" class="navigation-item2">Зарубежная классика </a></li>

                                        <li><a href="" class="navigation-item2">Русская классика</a></li>
                                        <li><a href="" class="navigation-item2">Любовные романы</a></li>
                                        <li><a href="" class="navigation-item2">Детективы</a></li>
                                        <li><a href="" class="navigation-item2">Ужасы,Мистика</a></li>
                                        <li><a href="" class="navigation-item2">Детективы</a></li>
                                        <li><a href="" class="navigation-item2">Психология</a></li>
                                        <li><a href="" class="navigation-item2">Комиксы</a></li>
                                        <li><a href="" class="navigation-item2">Бизнес-книги</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="stuff.html" class="navigation-item"> Новинки</a>
                                </li>
                                <li >
                                    <a href="#/" class="navigation-item">Бестселлеры</a>
                                </li>
                                <li >
                                    <a href="#/" class="navigation-item"> Популярное</a>
                                </li>
                                <li>
                                    <a href="#/" class="navigation-item">О нас</a>
                                </li>

                            </ul>
                        </nav>
                    </div>
                    <div class="col-3 d-flex justify-content-around">

                        <div class="user">
                            <button onclick="document.getElementById('id01').style.display='block'">
                                <img class="button-icon" src="img/Union.svg" alt="icon" />
                            </button>
                            <div id="id01" class="modal">

                                <form class="modal-content animate" action="/action_page.php">
                                    <div class="imgcontainer">
                                        <span onclick="document.getElementById('id01').style.display='none'" class="close"
                                            title="Close Modal">×</span>

                                    </div>

                                    <div class="container">
                                        <label for="uname"><b>Имя пользователя</b></label>
                                        <input class='logs' type="text" placeholder="Введите имя пользователя" name="uname" required />

                                        <label for="psw"><b>Пароль</b></label>
                                        <input class='logs' type="password" placeholder="Введите пароль" name="psw" required />

                                        <button type="submit" class='logs'>Войти</button>
                                        <label>
                                            <input type="checkbox" checked="checked" name="remember" /> Запомнить меня
                                    </label>
                                        <span class="psw">Забыли <a href="#">пароль?</a></span>
                                    </div>

                                    <div class="container">
                                        <style jsx>{`
                                .container {
                                    background-color:#f1f1f1;
                                }
                                        `}</style>

                                    </div>
                                </form>
                            </div>
                            <a href="" class="link">
                                <img class="button-icon" src="img/Cart.svg" alt="icon" />
                            </a>
                            <span class="number">8(908)086-02-38</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}