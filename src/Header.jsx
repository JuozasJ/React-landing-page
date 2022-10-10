import React from "react"
import menu from "./assets/menu.svg"
import menuClose from "./assets/menu-close.svg"

function MenuList() {
    return (
        <ul>
            <li><a href="#">Chrome Extension</a></li>
            <li><a href="#">Price Comparison</a></li>
            <li><a href="#">Blog</a></li>
        </ul>
    )
}

function MobileMenu(props) {
    return (
        <div className="mobile-menu">
            <button className="menu-close-btn" onClick={props.toggleMenu}>
                <img src={menuClose} alt="X" />
            </button>
            <MenuList />
        </div>
    )
}

function DesktopMenu() {
    return (
        <div className="desktop-menu" >
            <MenuList />
        </div>    
    )
}

function Header() {
    const [menuOpen, setMenuOpen] = React.useState(false)

    function toggleMenu() {
        setMenuOpen(prevState => !prevState)
    }

    return (
        <header>
            <nav>
                <a className="logo" href="#">COMPANY</a>
                {menuOpen && <MobileMenu toggleMenu={toggleMenu} />}
                <DesktopMenu />
                <button className="menu-btn" onClick={toggleMenu} >
                    <img src={menu} alt="Menu" />
                </button>
            </nav>
        </header>
    )
}

export default Header
