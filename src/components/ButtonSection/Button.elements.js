import styled from "styled-components";
import { Link } from "react-router-dom";


export const HeroGlobalBtn = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? "#000" : "#321414")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
    color: ${({ dark }) => (dark ? "#dddddd" : "#fff")};
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    cursor: pointer;
    list-style: none;
    text-decoration: none;

    &:hover {
        background: ${({ primary }) => (primary ? "#000" : "#321414")};
        color: ${({ dark }) => (dark ? "#000" : "#dddddd")};
    }
`;


export const FooterButton = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? 'gray' : '#000')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: gray;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    color: #000;
    background-color: ${({ primary }) => (primary ? '#000' : 'gray')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
