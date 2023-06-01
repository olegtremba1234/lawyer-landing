import style from "./Header.module.css"
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu"

import SearchIcon from "../../Images/icons/icn search .icn-xs.png"
import CartIcon from "../../Images/icons/icn shopping-cart .icn-xs.png"
import MenuIcon from "../../Images/icons/icn menu .icn-xs.png"
import Hero from "../Hero/Hero"


const Header = () => {
    return (<header className={style.header}>
        <div className={style.container}>
            <div className={style.header__container}>
                <div className={style.header__items}>
                    <a href="/" className={style.header__logo}>Legalide</a>
                    <div className={style.header__icons}>
                        <a href="/" className={style.search__icon}><img src={SearchIcon} alt="search-icon" width={24} height={24} /></a>
                        <a href="/" className={style.cart__icon}><img src={CartIcon} alt="cart-icon" width={24} height={22} /></a>
                        <a href="/" className={style.menu__icon}><img src={MenuIcon} alt="menu-icon" width={24} height={14} /></a>
                    </div>
                </div>
                <>
                    <NavigationMenu />
                </>
            </div>
            <Hero />
        </div>
    </header>)
}
export default Header