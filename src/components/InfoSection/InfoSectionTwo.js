import React from 'react';
import { HeroGlobalBtn } from "../ButtonSection/Button.elements";
import discussion9 from "../../images/public-discussion-9.svg";

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    ColumnOne,
    ColumnTwo,
    TextWrapper,
    TopParaLink,
    HeadingH1,
    SubTitle,
    BtnWrapper,
    ImgWrapper,
    Img
} from "./info.elements";

// GREAT SITE TO GET ALL SVG IMAGES
// https://undraw.co/

const InfoSectionTwo = ({
    id,
    lightBg,
    lightText,
    // lightTextDesc,
    dark,
    dark2,
    primary,
    topLine,
    headLine,
    description,
    buttonLabel,
    imgStart,
    // img,
    alt,
    darkText
}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                      <ColumnOne>
                        <TextWrapper>
                           <TopParaLink>{topLine}</TopParaLink>
                            <HeadingH1 lightText={lightText}>{headLine}</HeadingH1>
                            <SubTitle darkText={darkText}>{description}</SubTitle>
                            <BtnWrapper>
                              <HeroGlobalBtn 
                                to="/##"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                              >{buttonLabel}</HeroGlobalBtn>
                            </BtnWrapper>
                        </TextWrapper>
                      </ColumnOne>

                      <ColumnTwo>
                        <ImgWrapper>
                            <Img src={discussion9} alt={alt} />
                        </ImgWrapper>
                      </ColumnTwo>

                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>  
        </>
    );
}


export default InfoSectionTwo;
