export default function Slide() {
    return(
    <section className="slide slide-1 swiper-slide">
    <div className="container">
        <div className="row">
            <div className="col-4">
                
            </div>
            <div className="col-lg-4 col-9-xl">

                <h2 className="slide-title">Лучшие цены <br /> в книжном мире</h2>
                <p className="slide-descriptions">Введите название книги</p>
                
                
            </div>
            
        </div>
        <div className="row">
            <div className="col-4">
        
            </div>
            <div className="col-lg-4  d-flex justify-content-center ">
                <form className="example">
                    <input type="text" name="your-email" placeholder="Название книги..." className="input-search" size="40" title="Название книги"/>
                    <input type="submit" value="  " className="button-search"></input>
                </form>
                </div>
                </div>
    </div>
</section>
    )
}
