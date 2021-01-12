import React from 'react';
import Logo from '../../assets/img/Logo.png';
import '../css/Menu.css';

import ButtonsBox from '../Button/Buttons-box';
import { ButtonEscuro, ButtonRosa } from '../Button';


function Menu(){
    return(
        <section className="Layout-box--welcome">
            <nav className="Menu">
                <a  href="/">
                    <img className="Logo" src={Logo} alt="Menina-Cientista Logo"/>
                </a>
            </nav>
            <ButtonsBox>
                <ButtonRosa as="a" className="Button__rosa" href="/">
                    NAVEGAR PELOS CONTEÚDOS
                </ButtonRosa>
                <ButtonEscuro as="a" className="Button__escuro" href="/">
                    ENTRAR COM MEU PERFIL
                </ButtonEscuro>
            </ButtonsBox>
        </section>
    );
}


export default Menu;