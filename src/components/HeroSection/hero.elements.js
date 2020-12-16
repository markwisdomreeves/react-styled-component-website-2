import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";


export const HeroContainer = styled.div`
    position: relative;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    /* background: #0c0c0c; */
    /* background: brown; */
    background: #321414;
    z-index: 1;

    /* Add :before styles */
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;

    }
`;

export const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #321414;
`;

export const HeroContent = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 1200px;
    padding: 8px 24px;
    margin-bottom: 300px;
    z-index: 3;
`;

export const HeroH1 = styled.h1`
    font-size: 48px;
    text-align: center;
    color: gray;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 25px;
    }
`;

export const HeroParagraph = styled.p`
    font-size: 30px;
    text-align: center;
    color: gray;
    margin-top: 20px;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;