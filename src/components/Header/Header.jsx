import style from "./Header.module.css"

const Header = () => {
    return (<header className={style.header}>
        <div className={style.container}>
            <div className={style.header__container}>
                <div><a href="/" className={style.header__logo}>Legalide</a></div>

            </div>
        </div>
    </header>)
}
export default Header