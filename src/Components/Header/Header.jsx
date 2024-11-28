import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { Slant as Hamburger } from "hamburger-react";
import NavSocial from "../NavSocial/NavSocial";

const Header = () => {
    const [open, setOpen] = useState(false);
    const menuLinks = [
        { name: "Home", url: "/" },
        { name: "Shop", url: "/gallery" },
        { name: "About Us", url: "/team" },
        { name: "Contact", url: "/contact" },

    ];

    return (
        <div className="header">
            <div className="header-block">
                
                <div className="header-logo">
                    <h2 className="mister">MISTER</h2>
               <h2 className="componente">COMPONENTE</h2>
                </div>
                <div className="header-menu">
                    <Hamburger
                        toggled={open}
                        toggle={setOpen}
                        easing="ease-in"
                        rounded
                        hideOutline={false}
                        onClick={() => setOpen(!open)}
                        color="#25aee0"

                    ></Hamburger>
                </div>
            </div>

            <nav className={`header-nav ${open ? 'slide-in' : 'slide-out'}`}>
                <div className="header-nav__sections">
                    <ul className="header-nav__list">
                        {menuLinks.map((link, index) => (
                            <li className="header-nav__elements" key={index}>
                                <NavLink className="header-nav__links" to={link.url} onClick={() => setOpen(false)}>
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}

                        <NavSocial />
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;