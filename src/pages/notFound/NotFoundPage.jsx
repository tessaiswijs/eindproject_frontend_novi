import { Link } from 'react-router-dom';
import './NotFoundPage.css';

function NotFound() {
    return (
        <>
                <main className="page-container-not-found">
                    <h2>Oeps... this page doesn't exist</h2>
                    <p>Go back to <Link to="/">home</Link></p>
                </main>


        </>
    )
        ;
}

export default NotFound;