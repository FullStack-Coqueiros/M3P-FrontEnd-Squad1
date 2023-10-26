import { useState } from "react";
import { useForm } from  "react-hook-form";
import { InputComponent } from "../../InputComponents/InputComponent.jsx";
import { ConsultaService } from "../../../services/Consulta.service.jsx";
import { Switch } from "antd";

export const FormConsulta = ({ paciente }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { erros },
    } = useForm();

    const createConsulta = (consultaData) => {
        ConsultaService.CreateConsulta(consultaData)
        .then(response => {
            console.log('Consulta cadastrada com sucesso:', response);
            reset();
        })
        .catch(error => {
            console.error('Erro ao cadastrar consulta:', error);
        });
    };

    const deleteConsulta = (consultaData) => {
        ConsultaService.DeleteConsulta(consultaData.id)
        .then(response => {
            console.log('Consulta deletada com sucesso:', response);
            reset();
        })
        .catch(error => {
            console.error('Erro ao deletar consulta:', error);
        });
    };

    const submitForm = async (consultaData) => {
        const data = {...consultaData, pacienteId: paciente.id}
        const consulta = await ConsultaService.CreateConsulta(data);

        if(!consulta) {
            alert("Nova consulta cadastrada");
            reset();
        } else {
            alert("Consulta não cadastrada");
        }
    };

    return (
        <></>
    )
}