import style from "./NavigationMenu.module.css"

const NavigationMenu = () => {
    return (<nav className={style.navigation__menu}>
        <a className={style.navigation__item} href="/">Home</a>
        <a className={style.navigation__item} href="/">Product</a>
        <a className={style.navigation__item} href="/">Pricing</a>
        <a className={style.navigation__item} href="/">Contact</a>
    </nav>)
}
export default NavigationMenu