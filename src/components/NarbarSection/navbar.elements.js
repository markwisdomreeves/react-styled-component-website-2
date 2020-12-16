import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";


export const Nav = styled.nav`
    /* this is the second code */
    /* background: ${({ scrollNavbar }) => (scrollNavbar ? "#000" : "#321414")}; */

    /* this is the first code */
    background: ${({ scrollNavbar }) => (scrollNavbar ? "#000" : "transparent")};

    height: 80px;
    /* this is the first code */
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    font-size: 1rem;
    color: gray;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease-out;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    z-index: 1;
`;

export const NavLogo = styled(LinkRouter)`
    display: flex;
    justify-self: flex-start;
    align-items: center;
    /* margin-left: 24px; */
    font-weight: bold;
    color: gray;
    font-size: 1.5rem;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: brown;
    }

    @media screen and (max-width: 500px) {
        &:hover {
        color: brown;
    }
  }
`;

export const MobileIcon = styled.div`
    display: none;
    color: gray;

    @media screen and (max-width: 760px){
        display: block;
        position: absolute;
        top: 15px;
        right: 10px;
        transform: translate(-100%, 60%);
        cursor: pointer;
        color: gray;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    margin-right: -22px;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 760px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

// export const NavLinks = styled(LinkRouter)`
//     display: flex;
//     align-items: center;
//     height: 100%;
//     text-decoration: none;
//     color: gray;
//     padding: 0 1rem;
//     cursor: pointer;

//     /* react scroll active class */
//     &.active {
//         border-bottom: 10px solid black;
//     }
//     &:hover {
//         color: brown;
//     }
// `;


export const NavLinks = styled(LinkScroll)`
    display: flex;
    align-items: center;
    height: 100%;
    text-decoration: none;
    color: gray;
    padding: 0 1rem;
    cursor: pointer;

    /* react scroll active class */
    &.active {
        border-bottom: 10px solid black;
    }
    &:hover {
        color: brown;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background: gray;
    white-space: nowrap;
    padding: 10px 22px;
    color: brown;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin: 3px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: brown;
        color: gray;
    }
`;
