import React, { useState } from 'react';
import * as Styled from './InputPage.Style.jsx';
import { useForm } from 'react-hook-form';
import { PacienteService } from '../../../services/Paciente.service.jsx';
import CardPaciente from '../CardPaciente/CardPaciente.jsx';

export const InputPage = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const [pacienteSelect, setPacienteSelect] = useState([])

    const submitInput = async (dataInput) => {
        const {nome} = dataInput;
        
        PacienteService.ShowByNome(nome).then(response => {
            !response ? alert("Paciente não cadastrado") : reset()
            setPacienteSelect(response)
        });
    }
    
    return(
        <>
            <Styled.ContainerInput>
                <Styled.h2Input>Informações Rápidas de Pacientes</Styled.h2Input>
                <Styled.InputArea onSubmit={handleSubmit(submitInput)} >
                    <input 
                        placeholder='Digite o nome completo do paciente'
                        {...register('nome')}
                    />
                    <button className='botao btn btn-primary material-symbols-outlined' onClick={() => console.log("clicou")} type='submit'><span>Buscar</span></button>
                </Styled.InputArea>
            </Styled.ContainerInput> 

            <Styled.ContainerCards>
                {pacienteSelect && pacienteSelect.map(paciente => <CardPaciente paciente={paciente} key={paciente.id}/>)}
            </Styled.ContainerCards>
        </>
    )
}