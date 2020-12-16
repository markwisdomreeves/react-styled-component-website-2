import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";


export const SidebarContainer = styled.aside`
    position: fixed;
    width: 100%;
    
    /* just added below */
    height: 100%;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    background: #321414;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    transition: 0.3s ease-in-out;
    z-index: 999;
`;

export const CloseIcon = styled(FaTimes)`
    color: #000;
`;

export const Icon = styled.div`
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #000;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 90px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 75px);
    }
`;

export const SidebarScrollLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    transition: 0.2s ease-in-out;
    color: #000;
    text-decoration: none;
    list-style: none;
    cursor: pointer;

    &:hover {
        color: gray;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
    margin-left: 30px;
`;

export const SidebarRouteLink = styled(LinkRouter)`
    border: none;
    background: #000;
    color: brown;
    font-size: 16px;
    padding: 16px 64px;
    white-space: nowrap;
    outline: none;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: gray;
        color: #000;
    }
`;