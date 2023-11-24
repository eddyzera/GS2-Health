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
                            <a className="nav-link" href="#"><Link to="/">Home</Link></a>
                        </li>

                        <li className={`${location.pathname === '/mortalidade' ? 'selected' : ''} nav-link`}>
                            <a className="nav-link" href="#">Mortalidade Infantil</a>
                        </li>

                        <li className={`${location.pathname === '/communicable-diseases' ? 'selected' : ''} nav-link`}>
                            <a className="nav-link" href="#"><Link to="/communicable-diseases">Doenças transmissíveis</Link></a>
                        </li>

                        <li className={`${location.pathname === '/Dcnt' ? 'selected' : ''} nav-link`}>
                            <a className="nav-link" href="#"><Link to="/Dcnt">Doenças Não Transmissíveis</Link></a>
                        </li>

                        <li className={`${location.pathname === '/Saude' ? 'selected' : ''} nav-link`}>
                            <a className="nav-link" href="#"><Link to="/Saude">Saúde Geral</Link></a>
                        </li>
                    </ul>
                </div>

            </nav>
    )
}

export default Menu;