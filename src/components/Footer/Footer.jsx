import SolidButton from "../Button/SolidButton"

import style from "./Footer.module.css"

import PhoneIcon from "../../Images/icons/icn contacts phone blue.svg"
import PointIcon from "../../Images/icons/icn contacts point blue.svg"
import ArrowIcon from "../../Images/icons/icn contacts arrow blue.svg"
import FacebookIcon from "../../Images/icons/ant-design_facebook-filled.svg"
import InstagramIcon from "../../Images/icons/ant-design_instagram-outlined.svg"
import TwitterIcon from "../../Images/icons/ant-design_twitter-outlined.svg"
import YouTubeIcon from "../../Images/icons/carbon_logo-youtube.svg"
import LinkedinIcon from "../../Images/icons/linkedin-icon.svg"
import GitHubIcon from "../../Images/icons/icons8-github.svg"



const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.consultation_container}>
                <div className={style.contactUs_container}>
                    <div className={style.contactUs_row}>
                        <div className={style.contactUs_title_container}>
                            <h3 className={style.contactsUs_title}>
                                Request A Free
                                Consultation
                            </h3>
                            <p className={style.contactUs_text}>
                                the quick fox jumps over
                                the lazy dog
                            </p>
                        </div>
                        <div>
                            <SolidButton text={"Contact Us"} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.links_div}>
                <div className={style.links_container}>
                    <div className={style.links_row}>
                        <div className={style.links_group}>
                            <h5 className={style.links_title}>Company Info</h5>
                            <ul className={style.links_list}>
                                <li >
                                    <a href="/" className={style.links_list_item}>
                                        About Us
                                    </a>
                                </li>
                                <li >
                                    <a href="/" className={style.links_list_item}>
                                        Carrier
                                    </a>
                                </li>
                                <li >
                                    <a href="/" className={style.links_list_item}>
                                        We are hiring
                                    </a>
                                </li>
                                <li >
                                    <a href="/" className={style.links_list_item}>
                                        Blog
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className={style.links_group}>
                            <h5 className={style.links_title}>
                                Legal
                            </h5>
                            <ul className={style.links_list}>
                                <li >
                                    <a href="/" className={style.links_list_item}>
                                        About Us
                                    </a>
                                </li>
                                <li >
                                    <a href="/" className={style.links_list_item}>
                                        Carrier
                                    </a>
                                </li>
                                <li >
                                    <a href="/" className={style.links_list_item}>
                                        We are hiring
                                    </a>
                                </li>
                                <li >
                                    <a href="/" className={style.links_list_item}>
                                        Blog
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className={style.links_group}>
                            <h5 className={style.links_title}>Features</h5>
                            <ul className={style.links_list}>
                                <li >
                                    <a href="/" className={style.links_list_item}>
                                        Business Marketing
                                    </a>
                                </li>
                                <li >
                                    <a href="/" className={style.links_list_item}>
                                        User Analytic
                                    </a>
                                </li>
                                <li >
                                    <a href="/" className={style.links_list_item}>
                                        Unlimited Support
                                    </a>
                                </li>
                                <li >
                                    <a href="/" className={style.links_list_item}>
                                        Blog
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className={style.links_group}>
                            <h5 className={style.links_title}>Resources</h5>
                            <ul className={style.links_list}>
                                <li >
                                    <a href="/" className={style.links_list_item}>
                                        IOS & Android
                                    </a>
                                </li>
                                <li >
                                    <a href="/" className={style.links_list_item}>
                                        Watch a Demo
                                    </a>
                                </li>
                                <li >
                                    <a href="/" className={style.links_list_item}>
                                        Customers
                                    </a>
                                </li>
                                <li >
                                    <a href="/" className={style.links_list_item}>
                                        API
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className={style.links_group}>
                            <h5 className={style.links_title}>Get In Touch</h5>
                            <address>
                                <ul className={style.links_list}>
                                    <li className={style.links_list_item_wrap}>
                                        <img src={PhoneIcon} alt="Phone icon" width={24} height={24} />
                                        <a href="tel:(480) 555-0103" className={style.links_list_item}>
                                            (480) 555-0103
                                        </a>
                                    </li>
                                    <li className={style.links_list_item_wrap}>
                                        <img src={PointIcon} alt="Point icon" width={24} height={30} />
                                        <a href="https://goo.gl/maps/goCXWP3FswhphNao7?coh=178573&entry=tt" className={style.links_list_item}>
                                            4517 Washington Ave.
                                        </a>
                                    </li>
                                    <li className={style.links_list_item_wrap}>
                                        <img src={ArrowIcon} alt="Point icon" width={24} height={26} />
                                        <a href="mailto:debra.holt@example.com" target="_blank" rel="noopener noreferrer nofollow" className={style.links_list_item}>
                                            debra.holt@example.com
                                        </a>
                                    </li>
                                </ul>
                            </address>
                        </div>

                    </div>
                </div>
            </div>

            <div className={style.rights_container}>
                <div className={style.rights_row}>
                    <div className={style.rights_title_container}>
                        <h6 className={style.rights_title}>
                            Made With Love By Figmaland
                            All Right Reserved
                        </h6>
                    </div>
                    <div className={style.rights_title_container}>
                        <div className={style.socials_container}>
                            <a href="https://www.linkedin.com/in/oleg-tremba/" target="_blank" rel="noopener noreferrer">
                                <img src={LinkedinIcon} alt="Linkedin icon" width={24} height={24} />
                            </a>
                            <a href="https://github.com/olegtremba1234" target="_blank" rel="noopener noreferrer">
                                <img src={GitHubIcon} alt="Github icon" width={24} height={24} />
                            </a>
                            <a href="/">
                                <img src={FacebookIcon} alt="Facebook icon" width={24} height={24} />
                            </a>
                            <a href="/">
                                <img src={InstagramIcon} alt="Instagram icon" width={24} height={24} />
                            </a>
                            <a href="/">
                                <img src={TwitterIcon} alt="Twitter icon" width={24} height={24} />
                            </a>
                            <a href="/">
                                <img src={YouTubeIcon} alt="YouTube icon" width={24} height={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}
export default Footer