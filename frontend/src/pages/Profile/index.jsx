import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import './style.css';

import logoImg from '../../assets/logo.svg';

function Profile(){

    return (
        
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logo Be The Hero"/>
                <span>Bem Vindo, APAD</span>
            
                <Link className="button" to='/incidents/new'>Cadastrar novo caso</Link>
                <Link to="/">
                    <button type="button">
                        <FiPower size="18" color="#E02041" />
                    </button>
                </Link>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição Teste</p>

                    
                    <strong>VALOR:</strong>
                    <p>R$ 120</p>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição Teste</p>

                    
                    <strong>VALOR:</strong>
                    <p>R$ 120</p>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição Teste</p>

                    
                    <strong>VALOR:</strong>
                    <p>R$ 120</p>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição Teste</p>

                    
                    <strong>VALOR:</strong>
                    <p>R$ 120</p>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição Teste</p>

                    
                    <strong>VALOR:</strong>
                    <p>R$ 120</p>
                </li>
            </ul>
        </div>
        
    )

}

export default Profile;