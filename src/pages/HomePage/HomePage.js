import React, { useState } from 'react';
import SidebarSection from "../../components/SidebarSection/SidebarSection";
import NavbarSection from "../../components/NarbarSection/NavbarSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import FooterSection from "../../components/FooterSection/FooterSection";
import { HomeObjectOne, HomeObjectTwo } from "../../components/InfoSection/InfoData";
import InfoSectionOne from "../../components/InfoSection/InfoSectionOne";
import InfoSectionTwo from "../../components/InfoSection/InfoSectionTwo";
import InfoSectionThree from "../../components/InfoSection/InfoSectionThree";

// import ServicesPage from "../../pages/ServicesPage/ServicesPage";
import ScrollTop from "react-scrolltop-button";


const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SidebarSection isOpen={isOpen} toggle={toggle} />
            <NavbarSection toggle={toggle} />
            <HeroSection />
            <InfoSectionOne {...HomeObjectOne} />
            <InfoSectionTwo {...HomeObjectTwo} />
            <InfoSectionThree />

            <ScrollTop
                distance={610}
                breakpoint={991}
                speed={250}
                target={0}
                style={{ backgroundColor: "gray", color: "#321414", width: "100px" }}
            /> 

            <FooterSection />
        </>
    );
}


export default HomePage;