import style from "./About.module.css"

import PlayIcon from "../../Images/icons/icn play .icn-sm.svg"
import PeopleIcon from "../../Images/icons/icn about mans.svg"
import SpeedIcon from "../../Images/icons/icn about speed.svg"

const About = () => {
    return (
        <section className={style.about_section}>
            <div className={style.about_container}>
                <div className={style.content_container}>
                    <div className={style.title_container}>
                        <h2 className={style.about_title}>
                            Who We Are
                        </h2>
                        <p className={style.about_text}>
                            Problems trying to resolve
                            the conflict between the
                            two major realms of Classical
                            physics: Newtonian mechanics
                        </p>
                    </div>
                </div>
                <div className={style.media_container}>
                    <div className={style.player_container}>
                        <div className={style.test_img}>
                            <button className={style.player_button}>
                                <img src={PlayIcon} alt="play" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={style.media_items_container}>
                    <div className={style.media_title_container}>
                        <h2 className={style.media_title}>
                            Most trusted in
                            our field
                        </h2>
                        <p className={style.media_text}>
                            Most calendars are designed for teams. Slate
                            is designed for freelancers who want a
                            simple way to plan their schedule.
                        </p>
                    </div>

                    <div className={style.media_item}>
                        <div className={style.media_item_flex}>
                            <img src={PeopleIcon} alt="Peoples icon" width={32} height={32} />
                            <div>
                                <h5 className={style.media_item_title}>
                                    the quick fox jumps over the lazy
                                    dog
                                </h5>
                                <h6 className={style.media_item_text}>
                                    Things on a very small scale ...
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className={style.media_item}>
                        <div className={style.media_item_flex}>
                            <img src={SpeedIcon} alt="Speed icon" width={32} height={32} />
                            <div>
                                <h5 className={style.media_item_title}>
                                    the quick fox jumps over the lazy
                                    dog
                                </h5>
                                <h6 className={style.media_item_text}>
                                    Things on a very small scale ...
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About