import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import './style.css';

function Register(){

    return (
        <div className="newIncident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo Be The Hero."/>
                    <h1>Cadastro novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    
                    <Link className="button-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para Home.
                    </Link>
                </section>

                <form action="">
                    <input type="text" placeholder="Titulo do caso"/>
                    <textarea placeholder="descrição" />
                    <input type="number" placeholder="Valor em reais"/>

                    <div className="input-group">
                        <input type="text" placeholder="Cidade"/>
                        <input type="text" placeholder="UF" style={{width:80}}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Register;