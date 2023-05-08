import * as React from 'react';
import Button from '@mui/material/Button';
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
                    <Button variant="contained" sx={{ minWidth: "182px", minHeight: "48px", background: "#784F33", borderRadius: "37px", fontFamily: "Open Sans", fontSize: "14px", fontWeight: 700, padding: "10px 36px", marginBottom: "20px", }}>Get Quote Now</Button>
                    <Button variant="outlined" sx={{ minWidth: "155px", minHeight: "48px", borderRadius: "37px", borderColor: "#784F33", color: "#784F33", border: "1px solid", padding: "10px 36px", fontFamily: "Open Sans", fontSize: "14px", fontWeight: 700, }}>Learn More</Button>
                    {/* <button type='button'>Get Quote Now</button>
                    <button type='button'>Learn More</button> */}
                </div>
            </div>
            <div className={style.hero__image_container}>
                <img src={AgentMobileImg} alt="Woomen" height={445} />
            </div>
        </div>
    )
}

export default Hero