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
        formState: { error },
    } = useForm();

    const [pacienteSelect, setPacienteSelect] = useState(null);

    const submitInput = async (dataInput) => {
        const { nomeCompleto } = dataInput;

        const paciente = await PacienteService.ShowByNome(nomeCompleto);

        if (!paciente) {
            alert('Usuário não cadastrado');
            setPacienteSelect(null);
        } else {
            setPacienteSelect(paciente);
            reset();
        }
    };

    return (
        <>
            <Styled.ContainerInput>
                <h4>Encontre o paciente</h4>
                <Styled.InputArea onSubmit={handleSubmit(submitInput)}>
                    <input
                        placeholder='Digite o nome completo do paciente'
                        {...register('nomeCompleto')}
                    />
                    <button className='botao botao btn btn-primary' type='submit'><span className='material-symbols-outlined'>Buscar</span></button>
                </Styled.InputArea>
            </Styled.ContainerInput>

            <Styled.ContainerCards>
             {pacienteSelect && pacienteSelect.map(paciente => <FormConsulta paciente={paciente} key={paciente.id}/>)}
            </Styled.ContainerCards>
        </>
    );
};