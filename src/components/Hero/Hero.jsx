import * as React from 'react';
import style from "./Hero.module.css"

import AgentMobileImg from "../../Images/agent-mobile.png"

const Hero = () => {
    return (
        <div className={style.hero__container}>
            <div>
                <h2 className={style.hero__title}>Help to reclaim
                    your life
                    and freedom </h2>
                <h4 className={style.hero_text}>We know how large objects will act,
                    but things on a small scale.</h4>
                <div className={style.hero__btn__container}>
                    <button className={style.btn} >Get Quote Now</button>
                    <button className={style.btn_m} >Learn More</button>
                </div>
            </div>
            <div className={style.hero__image_container}>
                <img src={AgentMobileImg} alt="Woomen" height={445} />
            </div>
        </div>
    )
}

export default Hero