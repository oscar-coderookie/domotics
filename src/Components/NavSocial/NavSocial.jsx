import React from "react";
import './NavSocial.scss';
import { FaFacebook, FaInstagram, FaWhatsapp,  } from "react-icons/fa";
import {  SiUnderarmour,SiAdidas, SiCocacola  } from "react-icons/si";

const NavSocial = () => {
  return (
    <div className="nav__social">
      <p className="nav__social__text">Redes Sociales:</p>
      <div className="nav__barsocial">
        <a
        href=""
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook className="nav__icons" />
      </a>
      <a
        href=""
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className="nav__icons" />
      </a>
      <a
        href=""
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp  className="nav__icons" />
      </a>
      </div>
      
    </div>
  );
};

export default NavSocial;