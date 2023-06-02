import style from "./Clients.module.css"

import HooliImg from "../../Images/icons/fa-brands_hooli.svg"
import LyftImg from "../../Images/icons/fa-brands_lyft.svg"
import PiedPiperImg from "../../Images/icons/fa-brands_pied-piper-hat.svg"
import StrypeImg from "../../Images/icons/fa-brands_stripe.svg"
import AWSImg from "../../Images/icons/fa-brands_aws.svg"
import RedditImg from "../../Images/icons/fa-brands_reddit-alien.svg"

const Clients = () => {
    return (
        <section className={style.clients_section}>
            <div className={style.clients_logo_container}>
                <ul className={style.clients_list}>
                    <li className={style.clients_list_item}>
                        <img src={HooliImg} alt="hooli" />
                    </li>
                    <li className={style.clients_list_item}>
                        <img src={LyftImg} alt="lyft" />
                    </li>
                    <li className={style.clients_list_item}>
                        <img src={PiedPiperImg} alt="pied piper hat" />
                    </li>
                    <li className={style.clients_list_item}>
                        <img src={StrypeImg} alt="strype" />
                    </li>
                    <li className={style.clients_list_item}>
                        <img src={AWSImg} alt="aws" />
                    </li>
                    <li className={style.clients_list_item}>
                        <img src={RedditImg} alt="reddi alien" />
                    </li>
                </ul>
            </div>
            <div className={style.subscribe_container}>
                <div className={style.subscribe_row}>
                    <div className={style.subscribe_item}>
                        <div className={style.subscribe_flex_row}>
                            <h3 className={style.subscribe_title}>
                                Subscribe For Latest
                                Newsletter
                            </h3>
                            <div className={style.subscribe_input_group}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Clients