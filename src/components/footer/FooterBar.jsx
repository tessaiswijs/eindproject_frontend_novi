import './FooterBar.css';
import { Link } from 'react-router-dom';
function FooterBar() {
    return (
        <footer>
            <Link to="/">
          <span className="logo-container-footer">
            <img src='/src/assets/logo.png' alt="MealTap logo"/>
          </span>
            </Link>
        </footer>
    );
}

export default FooterBar;