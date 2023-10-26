import React from "react";
import { useForm } from 'react-hook-form';
import { PacienteService } from '../../services/Paciente.service.jsx';
import { FormConsulta } from '../FormularioComponents/FormConsultas/FormConsulta.jsx';

export const InputPageConsulta = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState:{error},
    } = useForm();

    const [pacienteSelect, setPacienteSelect] = useState(null)

    const submitInput = async (dataInput) => {
        const {nome} = dataInput;

        const paciente = await PacienteService.ShowByNome(nome);
        console.log(paciente.nome)

        if(!paciente) {
            alert('Usuario não encontrado');
            setPacienteSelect(null);
            reset();
        } else {
            setPacienteSelect(paciente);
            reset();
        }
    }

    return (
        <>
        </>
    )
}