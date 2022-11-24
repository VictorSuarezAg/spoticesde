import { Link } from 'react-router-dom'
import "./Footer.scss"

export function Footer () {
    
    return (
        <>
            <footer className="footer  mt-5 text-center text-white">
                <div className="container p-4 pb-0">
                    <div className="logo__footer">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spoticesde.appspot.com/o/logoFooter.jpg?alt=media&token=af35af4b-a7cd-4653-9fc2-82461d87859a" alt="Logo Footer" className="img-fluid logo__footer--img" />
                    </div>
                    <section className="mb-4">
                    <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
                        ><i className="bi bi-facebook"></i></Link>
                    <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
                        ><i className="bi bi-twitter"></i></Link>
                    <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
                        ><i className="bi bi-instagram"></i></Link>
                    </section>
                </div>
                <div className="text-center p-3">
                    © 2020 Copyright: Programado por Victor Suárez
                </div>
            </footer>
        </>
    )
}