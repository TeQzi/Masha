import Link from 'next/link'

export default function BookHeader({ name }) {
    return (
        <>
            <div className="row ">
                <div className="col-12 d-flex justify-content-center">
                    <h3 className="section-title ">{name}</h3>
                </div>
            </div>
            <div className="row ">
                <div className="col-12 d-flex justify-content-center">
                    <Link href="/allbooks">
                    <a className="link slide-description  ">Смотреть все</a>
                    </Link>
                    
                </div>
            </div>
        </>
    )
}