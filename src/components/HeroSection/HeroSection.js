import React, { useState } from 'react';
import Video from "../../Videos/video.mp4";
import { HeroGlobalBtn } from "../ButtonSection/Button.elements";
import {
    HeroContainer,
    HeroBackground,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroParagraph,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from "./hero.elements";


const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBackground>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBackground>

            <HeroContent>
                <HeroH1>Welcome to our Community</HeroH1>
                <HeroParagraph>Register today to get our News Letter</HeroParagraph>
                <HeroBtnWrapper>
                   <HeroGlobalBtn to="/##"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                   >
                     Sign Up { hover ? <ArrowForward /> : <ArrowRight /> }
                   </HeroGlobalBtn>
                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
    );
}


export default HeroSection
