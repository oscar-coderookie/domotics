import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { Slant as Hamburger } from "hamburger-react";
import NavSocial from "../NavSocial/NavSocial";
import logo from '../../img/logo.png';

const Header = () => {
    const [open, setOpen] = useState(false);
    const menuLinks = [
        { name: "Inicio", url: "/" },
        { name: "Tienda", url: "/shop" },
        { name: "¿Quiénes somos?", url: "/team" },
        { name: "Contacto", url: "/contact" },

    ];

    return (
        <div className="header">
            <div className="header-block">
                
                <div className="header-logo">
                    <img className="header__img" src={logo} alt="mister-componente" />
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