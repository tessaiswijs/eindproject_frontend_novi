import { Link } from 'react-router-dom';
import './NotFoundPage.css';

function NotFound() {
    return (
        <>
                <main className="page-container-not-found">
                    <h2>Oeps... deze pagina bestaat niet</h2>
                    <p>Ga terug naar de <Link to="/">homepagina</Link></p>
                </main>


        </>
    )
        ;
}

export default NotFound;