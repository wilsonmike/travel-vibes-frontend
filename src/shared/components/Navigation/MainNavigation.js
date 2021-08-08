import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../../components/UIElements/Backdrop';
import './MainNavigation.css'
import React from 'react';

function MainNavigation(props) {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    function openDrawer(){
        setDrawerIsOpen(true)
    }

    function closeDrawer() {
        setDrawerIsOpen(false)
    }


    return (
        <React.Fragment>
            {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
        {drawerIsOpen ? (<SideDrawer>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>) : null}
    <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
            <span />
            <span />
            <span />
        </button>
        <h1 className="main-navigation__title">
            <Link to="/">Place Vibe</Link>
        </h1>
        <nav className="main-navigation__header-nav">
           <NavLinks /> 
        </nav>
    </MainHeader>
    </React.Fragment>
    )
}

export default MainNavigation;