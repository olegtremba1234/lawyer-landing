import React, { Fragment } from 'react';
import Media from 'react-media';

import style from "./Hero.module.css"

import AgentMobileImg from "../../Images/agent-mobile.png"
import AgentDesktopImg from "../../Images/agent desktop.png"

const Hero = () => {
    return (
        <>

            <Media
                queries={{
                    small: '(max-width: 767px)',
                    medium: '(min-width: 768px)',
                    // large: '(min-width: 1280px)',    
                }}
            >
                {matches => (<Fragment>
                    {matches.small && (<>
                        <div className={style.hero__container}>
                            <div className={style.hero_title_container}>
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
                    </>)}
                    {matches.medium && (
                        <div className={style.hero__container}>
                            <div className={style.hero_container_row}>
                                <div className={style.hero_title_container}>
                                    <h1 className={style.hero__title}>Help to reclaim
                                        your life
                                        and freedom </h1>
                                    <h4 className={style.hero_text}>We know how large objects will act,
                                        but things on a small scale.</h4>
                                    <div className={style.hero__btn__container}>
                                        <button className={style.btn} >Get Quote Now</button>
                                        <button className={style.btn_m} >Learn More</button>
                                    </div>
                                </div>
                                <div className={style.hero__image_container}>
                                    <img src={AgentDesktopImg} className={style.hero_image} alt="Woomen" />
                                </div>
                            </div>
                        </div>
                    )}
                </Fragment>)}

            </Media>
        </>
    )
}

export default Hero