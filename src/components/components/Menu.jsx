import React from "react";
import { Link } from 'react-router-dom';
import "./Menu.css";

import Logo from "../../assets/images/channels4_profile-removebg-preview(1).png";

function Menu(){
    return(
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        
                        <li class="navbar-brand" href="#">
                            <a class="navbar-brand" href="#">
                                <img src={Logo} alt="" />
                            </a>
                        </li>

                        <li class="nav-link">
                            <a class="nav-link" href="#"><Link to="/Home">Home</Link></a>
                        </li>

                        <li class="nav-link">
                            <a class="nav-link" href="#">Mortalidade Infantil</a>
                        </li>

                        <li class="nav-link">
                            <a class="nav-link" href="#"><Link to="/communicable-diseases">Doenças transmissíveis</Link></a>
                        </li>

                        <li class="nav-link">
                            <a class="nav-link" href="#"><Link to="/Dcnt">Doenças Não Transmissíveis</Link></a>
                        </li>

                        <li class="nav-link">
                            <a class="nav-link" href="#"><Link to="/Saude">Saúde Geral</Link></a>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Menu;