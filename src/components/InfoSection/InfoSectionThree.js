import React from 'react';
import Icon1 from "../../images/community-4.svg";
import Icon2 from "../../images/firmware-5.svg";
import Icon3 from "../../images/programming-7.svg";


import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from "./infosectionthree.elements";


const InfoSectionThree = () => {
    return (
        <ServicesContainer>
            <ServicesH1>This is our Goal</ServicesH1>

            <ServicesWrapper>
                {/* Services card one */}
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Our Community</ServicesH2>
                    <ServicesP>We teach you to build.</ServicesP>
                </ServicesCard>
                {/* Services card two */}
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Project Goals</ServicesH2>
                    <ServicesP>Build a project you love</ServicesP>
                </ServicesCard>
                {/* Services card three */}
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Create a Portfolio</ServicesH2>
                    <ServicesP>Create a great Portfolio</ServicesP>
                </ServicesCard>
            
            </ServicesWrapper>
        </ServicesContainer>
    );
}


export default InfoSectionThree;