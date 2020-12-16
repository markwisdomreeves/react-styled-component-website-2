import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarScrollLink,
    SidebarBtnWrapper,
    SidebarRouteLink
} from "./sidebar.elements";


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarScrollLink to="/" onClick={toggle}>
                        Home
                    </SidebarScrollLink>
                    <SidebarScrollLink to="reviews" onClick={toggle}>
                        Reviews
                    </SidebarScrollLink>
                    <SidebarScrollLink to="platforms" onClick={toggle}>
                        Platforms
                    </SidebarScrollLink>
                    <SidebarScrollLink to="services" onClick={toggle}>
                        Services
                    </SidebarScrollLink>
                </SidebarMenu>

                <SidebarBtnWrapper>
                    <SidebarRouteLink to="/signin">SIGN IN</SidebarRouteLink>
                </SidebarBtnWrapper>

            </SidebarWrapper>
        </SidebarContainer>
    );
}


export default Sidebar;