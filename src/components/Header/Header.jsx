import { useState, Fragment } from "react"
import Media from 'react-media';
import { FaBars } from 'react-icons/fa';

import style from "./Header.module.css"
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu"

import SearchIcon from "../../Images/icons/icn search .icn-xs.png"
import CartIcon from "../../Images/icons/icn shopping-cart .icn-xs.png"
import MenuIcon from "../../Images/icons/icn menu .icn-xs.png"
import Hero from "../Hero/Hero"


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    return (

        <Media
            queries={{
                small: '(max-width: 767px)',
                medium: '(min-width: 768px)',
                // large: '(min-width: 1280px)',    
            }}
        >{matches => (<Fragment>
            {matches.small && (
                <header className={style.header}>
                    <div className={style.header__container}>
                        <div className={style.header__items}>
                            <a href="/" className={style.header__logo}>Legalide</a>
                            <div className={style.header__icons}>
                                <a href="/" className={style.search__icon}><img src={SearchIcon} alt="search-icon" width={24} height={24} /></a>
                                <a href="/" className={style.cart__icon}><img src={CartIcon} alt="cart-icon" width={24} height={22} /></a>
                                <button className={style.menu__icon} onClick={handleMenuToggle}>
                                    {isOpen ? <img src={MenuIcon} alt="menu-icon" width={24} height={14} /> : <FaBars color="#737373" size={24} />}
                                </button>
                            </div>
                        </div>
                        <>
                            {isOpen && (<NavigationMenu />)}
                        </>
                    </div>
                    <div className={style.container}>
                        <Hero />
                    </div>
                </header>
            )}
            {matches.medium && (
                <header className={style.header}>
                    <div className={style.header__items}>
                        <a href="/" className={style.header__logo}>Legalide</a>
                        <div className={style.navbar_container}>
                            <NavigationMenu />
                            <div className={style.header__icons}>
                                <a href="/" className={style.search__icon}><img src={SearchIcon} alt="search-icon" width={16} height={16} /></a>
                                <a href="/" className={style.cart__icon}><img src={CartIcon} alt="cart-icon" width={16} height={16} /></a>
                            </div>
                        </div>
                    </div>
                    <Hero />
                </header>
            )}
        </Fragment>)}

        </Media>

    )
}
export default Header