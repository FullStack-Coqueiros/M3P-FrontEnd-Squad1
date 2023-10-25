import React, { useEffect, useState } from 'react';
import * as Styled from './InputPage.Style.jsx';
import { useForm } from 'react-hook-form';
import { PacienteService } from '../../../services/Paciente.service.jsx';
import { UserService } from '../../../services/User.Service.jsx';
import CardPaciente from '../CardPaciente/CardPaciente.jsx';
import CardUsuario from '../CardUsuario/CardUsuario.jsx';

export const InputPage = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const [resultados, setResultados] = useState([]);
    const [todosOsDados, setTodosOsDados] = useState([]);

    useEffect(() => {
        // Simule carregamento de todos os dados (pode ser ajustado conforme necessário)
        const carregarTodosOsDados = async () => {
            const todosOsPacientes = await PacienteService.Get();
            const todosOsUsuarios = await UserService.Get();

            const todosOsDados = [...todosOsPacientes, ...todosOsUsuarios];
            setTodosOsDados(todosOsDados);
        };

        carregarTodosOsDados();
    }, []);

    const submitInput = async (dataInput) => {
        const { nome } = dataInput;
    
        const pacientes = await PacienteService.ShowByNome(nome);
        const usuarios = await UserService.ShowByNome(nome);
    
        const resultados = [...pacientes, ...usuarios];
    
        // Filtra os resultados que contêm o nome informado
        const resultadosFiltrados = resultados.filter(item =>
            item.nomeCompleto.toLowerCase().includes(nome.toLowerCase())
        );
    
        setResultados(resultadosFiltrados);
    
        if (!resultadosFiltrados.length) {
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
                
                {resultados.length > 0
                    ? resultados.map(item => (
                        <div key={item.id}>
                            {item.convenio ? (
                                <CardPaciente paciente={item} />
                            ) : (
                                <CardUsuario usuario={item} />
                            )}
                        </div>
                    ))
                    : todosOsDados.map(item => (
                        <div key={item.id}>
                            {item.nomeCompleto ? (
                                <CardPaciente paciente={item} />
                            ) : (
                                <CardUsuario usuario={item} />
                            )}
                        </div>
                    ))}
            </Styled.ContainerCards>
        </>
    );
};