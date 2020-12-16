import React, { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

// react scroll
import { animateScroll as scroll } from 'react-scroll';

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavItem,
    NavMenu,
    NavLinks,
    NavBtn,
    NavBtnLink
} from "./navbar.elements";


const Navbar = ({ toggle }) => {
    const [scrollNavbar, setScrollNavbar] = useState(false);

    // change navbar on scrolling
    const changeNavbarBackground = () => {
        // console.log(window.screenY);
        if (window.scrollY >= 80) {
            setScrollNavbar(true);
        } else {
            setScrollNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavbarBackground)
    }, []);

    // react scroll
    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        <>
         <IconContext.Provider value={{ color: "gray" }}>
           <Nav scrollNavbar={scrollNavbar}>
               <NavbarContainer>
                   <NavLogo to="/" onClick={toggleHome}>Locals</NavLogo>

                   <MobileIcon onClick={toggle}>
                       <FaBars />
                   </MobileIcon>
                   <NavMenu>
                       <NavItem>
                           <NavLinks to='/'>Home</NavLinks>
                        </NavItem>
                       <NavItem>
                           <NavLinks to='reviews'>Reviews</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to='platforms'>Platforms</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to='services'>Services</NavLinks>
                       </NavItem>
                       
                       <NavBtn>
                           <NavBtnLink to='/##'>Sign In</NavBtnLink>
                       </NavBtn>
                   </NavMenu>
               </NavbarContainer>
           </Nav> 
          </IconContext.Provider>
        </>
    );
}



export default Navbar;
