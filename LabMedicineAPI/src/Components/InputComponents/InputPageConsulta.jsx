import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { PacienteService } from '../../services/Paciente.service.jsx';
import { FormConsulta } from '../FormularioComponents/FormConsultas/FormConsulta.jsx';
import * as Styled from './InputPageConsulta.style.jsx';

export const InputPageConsulta = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [pacienteSelect, setPacienteSelect] = useState(null);
    const [buscaRealizada, setBuscaRealizada] = useState(false);

    const submitInput = async (dataInput) => {
        const { nome } = dataInput;

        if (!nome) {
            // Se o campo de nome estiver vazio, redefine os estados
            setPacienteSelect(null);
            setBuscaRealizada(false);
            return;
        }

        const pacientes = await PacienteService.ShowByNome(nome);

        const pacientesFiltrados = pacientes.filter(item =>
            item.nomeCompleto.toLowerCase().includes(nome.toLowerCase())
        );

        setPacienteSelect(pacientesFiltrados);
        setBuscaRealizada(true);

        if (pacientesFiltrados.length === 0) {
            // Se nenhum paciente for encontrado, exiba um alerta ou faça algo apropriado
            alert('Nenhum paciente encontrado');
        }

        reset();
    };

    return (
        <>
            <Styled.ContainerInput>
                <h4>Encontre o paciente</h4>
                <Styled.InputArea onSubmit={handleSubmit(submitInput)}>
                    <input
                        placeholder='Digite o nome completo do paciente'
                        {...register('nome')}
                    />
                    <button className='botao botao btn btn-primary' type='submit'>
                        <span className='material-symbols-outlined'>Buscar</span>
                    </button>
                </Styled.InputArea>
            </Styled.ContainerInput>

            <Styled.ContainerCards>
                {buscaRealizada && pacienteSelect && pacienteSelect.length > 0 ? (
                    pacienteSelect.map(paciente => (
                        <FormConsulta paciente={paciente} key={paciente.id} />
                    ))
                ) : (
                    <p>{buscaRealizada ? 'Nenhum paciente encontrado' : ''}</p>
                )}
            </Styled.ContainerCards>
        </>
    );
};