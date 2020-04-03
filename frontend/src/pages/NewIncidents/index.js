import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import imgLogo from '../../assets/logo.svg';

export default function NewIncidents() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incident', data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar caso!');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={imgLogo} alt="Logo" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="link" to="/profile" >
                        <FiArrowLeft />
                    Voltar profile
                </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input placeholder="Título do caso" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />

                    <textarea placeholder="Descrição" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />

                    <input placeholder="Valor em reais" 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastra</button>
                </form>
            </div>
        </div>
    );
}