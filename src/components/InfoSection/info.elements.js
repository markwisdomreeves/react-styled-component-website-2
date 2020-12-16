import styled from "styled-components";


export const InfoContainer = styled.div`
    color: #000;
    background: ${({ lightBg }) => (lightBg ? "#dddddd" : "#fff")};

    @media screen and (max-width: 760px) {
        /* padding: 100px 0; */
        padding: 60px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    justify-content: center;
    width: 100%;
    height: 860px;
    z-index: 1;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
`;

export const InfoRow = styled.div`
    display: grid;
    align-items: center;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 760px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`;

export const ColumnOne = styled.div`
    grid-area: col1;
    margin-bottom: 15px;
    padding: 0 15px;
`;

export const ColumnTwo = styled.div`
    grid-area: col2;
    margin-bottom: 15px;
    padding: 0 15px;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-bottom: 60px;
    margin-bottom: 10px;
`;

export const TopParaLink = styled.h1`
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 35px;
    line-height: 16px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    color: brown;

    @media screen and (max-width: 560px) {
        font-size: 24px;
    }
`;

export const HeadingH1 = styled.h3`
    margin-bottom: 24px;
    font-size: 26px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? 'gray' : "#000")};

    @media screen and (max-width: 560px) {
        font-size: 19px;
    }
`;

export const SubTitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? "#000" : "gray")};
`;

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrapper = styled.div`
    height: 100%;
    max-width: 555px;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;
