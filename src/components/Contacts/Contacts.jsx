import style from "./Contacts.module.css"

import OutlinedButton from "../Button/OtlinedButton"
import PhoneIcon from "../../Images/icons/icn contacts phone.svg"
import PointIcon from "../../Images/icons/icn contacts point.svg"
import ArrowIcon from "../../Images/icons/icn contacts arrow.svg"

const Contacts = () => {
    return (
        <section className={style.contacts_section}>
            <div className={style.contacts_container}>
                <div className={style.title_container}>
                    <div className={style.title_content}>
                        <h2 className={style.contacts_title}>
                            Get In Touch
                        </h2>
                        <p className={style.contacts_text}>
                            Problems trying to resolve
                            the conflict between the two major
                            realms of Classical physics:
                            Newtonian mechanics
                        </p>
                    </div>
                </div>
                <div className={style.contacts_items_container}>
                    <div className={style.test_container}>
                        <div className={style.contact_item}>
                            <img src={PhoneIcon} alt="Phone icon" width={72} height={72} />
                            <div className={style.contact_item_emails}>
                                <h6 className={style.email_address_dark}>your.email@example.com</h6>
                                <h6 className={style.email_address_dark}>your.email@ple.com</h6>
                            </div>
                            <h5 className={style.contact_item_label}>Get Support</h5>
                            <OutlinedButton text="Submit Request" />
                        </div>
                    </div>
                    <div className={style.test_container}>
                        <div className={style.contact_item_dark}>
                            <img src={PointIcon} alt="Point icon" width={72} height={72} />
                            <div className={style.contact_item_emails}>
                                <h6 className={style.email_address_light}>your.email@example.com</h6>
                                <h6 className={style.email_address_light}>your.email@ple.com</h6>
                            </div>
                            <h5 className={style.contact_item_label_light}>Get Support</h5>
                            <OutlinedButton text="Submit Request" />
                        </div>
                    </div>
                    <div className={style.test_container}>
                        <div className={style.contact_item}>
                            <img src={ArrowIcon} alt="Arrow icon" width={72} height={72} />
                            <div className={style.contact_item_emails}>
                                <h6 className={style.email_address_dark}>your.email@example.com</h6>
                                <h6 className={style.email_address_dark}>your.email@ple.com</h6>
                            </div>
                            <h5 className={style.contact_item_label}>Get Support</h5>
                            <OutlinedButton text="Submit Request" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contacts