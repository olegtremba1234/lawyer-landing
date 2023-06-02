import style from "./Features.module.css"

import FamilyLawIcon from "../../Images/icons/icn settings .icn-lg.svg"
import HammerIcon from "../../Images/icons/hammer-icon.svg"
import TrustIcon from "../../Images/icons/note-icon.svg"
const Features = () => {
    return (
        <section style={{ paddingLeft: 42, paddingRight: 42 }}>
            <div className={style.container}>
                <div className={style.title_container}>
                    <div className={style.row}>
                        <div className={style.main_content}>
                            <h2 className={style.title}>
                                Our Practice
                                Areas
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
                <div className={style.buttons_container}>
                    <div className={style.family_law_container}>
                        <div className={style.family_law_item}>
                            <img src={FamilyLawIcon} alt="Law icon" height={53} width={53} />
                            <h5 className={style.icon_title}>Family Law</h5>
                        </div>
                    </div>
                    <div className={style.business_law_container}>
                        <div className={style.business_law_item}>
                            <img src={HammerIcon} alt="Hammer icon" height={53} width={53} />
                            <h5 className={style.hammer_icon_title}>Business Law</h5>
                        </div>
                    </div>
                    <div className={style.trust_container}>
                        <div className={style.trust_item}>
                            <img src={TrustIcon} alt="Note icon" height={53} width={53} />
                            <h5 className={style.trust_icon_tytle}>Trust & Estates</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}
export default Features