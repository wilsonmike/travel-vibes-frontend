import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';
import './MainNavigation.css'

function MainNavigation(props) {
    return <MainHeader>
        <button className="main-navigation__menu-btn">
            <span />
            <span />
            <span />
        </button>
        <h1 className="main-navigation__title">
            <Link to="/">Place Vibe</Link>
        </h1>
        <nav>
            ...
        </nav>
    </MainHeader>
}

export default MainNavigation;