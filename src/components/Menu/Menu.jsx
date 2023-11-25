import React from "react";
import { Link, useLocation } from 'react-router-dom';
import "./Menu.css";

import Logo from "../../assets/images/channels4_profile-removebg-preview(1).png";

function Menu(){

       const location = useLocation();

    return(
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="menu-container">
                    <div className="navbar-brand">
                    <img src={Logo} alt="" />
                    </div>
                    <ul className="navbar-nav">
                        <li className={`${location.pathname === '/' ? 'selected' : ''} nav-link`}>
                           <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className={`${location.pathname === '/mortalidade' ? 'selected' : ''} nav-link`}>
                            <Link className="nav-link" to="/Mortalidade">Mortalidade Infantil</Link>
                        </li>

                        <li className={`${location.pathname === '/communicable-diseases' ? 'selected' : ''} nav-link`}>
                           <Link className="nav-link" to="/communicable-diseases">Doenças transmissíveis</Link>
                        </li>

                        <li className={`${location.pathname === '/Dcnt' ? 'selected' : ''} nav-link`}>
                           <Link className="nav-link" to="/Dcnt">Doenças Não Transmissíveis</Link>
                        </li>

                        <li className={`${location.pathname === '/Saude' ? 'selected' : ''} nav-link`}>
                           <Link className="nav-link" to="/Saude">Saúde Geral</Link>
                        </li>
                        <li className={`${location.pathname === '/contact-us' ? 'selected' : ''} nav-link`}>
                           <Link className="nav-link" to="/contact-us">Fale Conosco</Link>
                        </li>
                    </ul>
                </div>

            </nav>
    )
}

export default Menu;