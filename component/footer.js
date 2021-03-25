export default function Footer(params) {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 mb-4 mb-xl-0">
                        <nav>
                            <ul className="footer-menu d-sm-flex">
                                <li className="footer-menu-item"><a href="#" className="footer-menu-link">Новинки</a></li>
                                <li className="footer-menu-item"><a href="#" className="footer-menu-link">Бестселлеры</a></li>
                                <li className="footer-menu-item"><a href="#" className="footer-menu-link">Популярное</a> </li>
                                <li className="footer-menu-item"><a href="#" className="footer-menu-link">О нас</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 d-flex align-items-center">
                        <span className="footer-text">Связаться с нами</span>
                        <span className="footer-social">
                            <a href="#" className="social-link"> <img src="img/email.svg" alt="Facebook" /></a>
                        </span>
                    </div>
                    <div className="col-xl-2 col-lg-3 d-flex justify-content-lg-end mt-4 mt-lg-0">
                        <span className="footer-text">@ 2021</span>
                    </div>
                </div>
                <hr className="footer-line mt-4 mb-4" color="white" size={1} />
                <div className="row justify-content-between">
                    <div className="col-4">
                        <img className="payment-logo" src="img/visa.png" alt="visa logo" />
                        <img className="payment-logo" src="img/master-card.png" alt="master-card" />
                        <img className="payment-logo" src="img/paypal.png" alt="paypal" />
                    </div>
                    <div className="col-lg-2 col-sm-1 d-flex justify-content-end">
                        <a href="#" className="top-link d-flex align-items-center">
                            <span className="top-link-text">Top</span>
                            <img src="img/top.png" alt="top" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}