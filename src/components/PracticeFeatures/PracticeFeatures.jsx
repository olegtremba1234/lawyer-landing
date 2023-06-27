import style from "./PracticeFeatures.module.css"

import Picture1 from "../../Images/practice1.png"
import Picture2 from "../../Images/picture2.png"
import Picture3 from "../../Images/picture3.png"
import Picture4 from "../../Images/picture4.png"

const PracticeFeatures = () => {
    return (
        <section className={style.Practice_section}>
            <div className={style.container}>
                <div className={style.title_container}>
                    <div className={style.row}>
                        <div className={style.main_content}>
                            <h2 className={style.title}>
                                Practice
                                Advice
                            </h2>
                            <p className={style.text}>
                                Problems trying to resolve
                                the conflict between the
                                two major realms of Classical
                                physics: Newtonian mechanics
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.practices_container}>
                    <ul className={style.practices_row}>
                        <li className={style.row_card}>
                            <div className={style.card_item}>
                                <div className={style.card_text_container}>
                                    <h5 className={style.card_title}>Frauds or Mislead</h5>
                                    <p className={style.card_text}>
                                        Newton thought that
                                        light was made up of
                                        particles, but then it
                                        was discovered
                                    </p>
                                </div>
                                <img src={Picture1} alt="Business wooman" />
                            </div>
                        </li>
                        <li className={style.row_card}>
                            <div className={style.card_item}>
                                <div className={style.card_text_container}>
                                    <h5 className={style.card_title}>Bailes & Warrants</h5>
                                    <p className={style.card_text}>
                                        “Quantum mechanics”
                                        is the description of the
                                        behaviour of matter
                                    </p>
                                </div>
                                <img src={Picture2} alt="Business wooman" />
                            </div>
                        </li>
                        <li className={style.row_card}>
                            <div className={style.card_item}>
                                <div className={style.card_text_container}>
                                    <h5 className={style.card_title}>Federal Drug Crimes</h5>
                                    <p className={style.card_text}>
                                        They describe a
                                        universe consisting of
                                        bodies moving
                                    </p>
                                </div>
                                <img src={Picture3} alt="Business wooman" />
                            </div>
                        </li>
                        <li className={style.row_card}>
                            <div className={style.card_item}>
                                <div className={style.card_text_container}>
                                    <h5 className={style.card_title}>Traffic Related
                                        Crimes</h5>
                                    <p className={style.card_text}>
                                        They finally obtained
                                        a consistent description
                                        of the behaviour
                                    </p>
                                </div>
                                <img src={Picture4} alt="Business wooman" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div >
        </section>
    )
}
export default PracticeFeatures