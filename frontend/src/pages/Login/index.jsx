import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import '../../global.css';

import {FiLogIn} from 'react-icons/fi';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

function Login(){

    return(
        <div className="login-container">
            <section className="form">

            <img src={logoImg} alt="Logo Be The Hero."/>

            <form action="">
                <h1>Faça seu Login</h1>

                <input type="text" placeholder="Sua ID"/>
                <button className="button" type="submit">Acessar</button>
            
                <Link to="register" className="button-link">
                    <FiLogIn size={16} color="#E02041" />
                    Não tenho cadastro
                </Link>
            </form>

            </section>
            <img src={heroesImg} alt="Imagem da campanha."/>
        </div>
    )

}

export default Login;