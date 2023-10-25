import React, { useState } from 'react';
import * as Styled from './InputPage.Style.jsx';
import { useForm } from 'react-hook-form';
import { PacienteService } from '../../../services/Paciente.service.jsx';
import { UserService } from '../../../services/User.Service.jsx';
import CardPaciente from '../CardPaciente/CardPaciente.jsx';

export const InputPage = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const [resultados, setResultados] = useState([]);

    const submitInput = async (dataInput) => {
        const { nome } = dataInput;

        const pacientes = await PacienteService.ShowByNome(nome);
        const usuarios = await UserService.ShowByNome(nome);

        const resultados = [...pacientes, ...usuarios];

        setResultados(resultados);

        if (!resultados.length) {
            alert("Nenhum resultado encontrado");
            reset();
        }
    };

    return (
        <>
            <Styled.ContainerInput>
                <Styled.h2Input>Informações Rápidas de Pacientes e Usuários</Styled.h2Input>
                <Styled.InputArea onSubmit={handleSubmit(submitInput)}>
                    <input
                        placeholder='Digite o nome completo do paciente ou usuário'
                        {...register('nome')}
                    />
                    <button className='botao btn btn-primary material-symbols-outlined' type='submit'>
                        <span>Buscar</span>
                    </button>
                </Styled.InputArea>
            </Styled.ContainerInput>

            <Styled.ContainerCards>
                {resultados && resultados.map(item => (
                    <CardPaciente key={item.id} paciente={item} />
                ))}
            </Styled.ContainerCards>
        </>
    );
};