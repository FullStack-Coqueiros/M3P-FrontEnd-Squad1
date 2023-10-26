import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../../context/AuthContext.jsx';
import InputMask from 'react-input-mask';
import { HeaderContext } from '../../../context/HeaderContext.jsx';
import { FormPaciente } from '../../../Components/FormularioComponents/FormPacientes/FormPaciente.jsx';
import { PacienteService } from "../../../services/Paciente.service.jsx";
import * as Styled from './CadastroPacientePage.style.jsx';

export const CadastroPaciente = () => {
    const { setData } = useContext(HeaderContext);
    useEffect(() => {
        setData({
            titulo: "CADASTRAR PACIENTE",
        });
    }, []);

    const { isLoggedIn } = useContext(AuthContext);

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleDeleteClick = async () => {
        if(window.confirm("Deseja realmente excluir o paciente?")) {
            try {
                await PacienteService.DeletePaciente(id);
                console.log('Paciente excluido com sucesso');
            } catch (error) {
                console.error("Erro ao excluir paciente:", error);
            }
        }
    };

    const [formData, setFormData] = useState({
        nomeCompleto: "",
        genero: "",
        dataNascimento: "",
        cpf: "",
        rg: "",
        estadoCivil: "",
        telefone: "",
        email: "",
        naturalidade: "",
        contatoEmergencia: "",
        alergias: "",
        cuidadosEspecificos: "",
        convenio: "",
        numeroConvenio: "",
        validadeConvenio: "",
        cep: "",
        cidade: "",
        estado: "",
        logradouro: "",
        numero: "",
        bairro: "",
        pontoReferencia: "",
        statusSistema: "",
    });

    const [showModal, setShowModal] = useState(false);

    const handleModalToggle = () => {
        setShowModal(!showModal);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await PacienteService.CreatePaciente(formData);
            setFormData({
                nomeCompleto: "",
                genero: "",
                dataNascimento: "",
                cpf: "",
                rg: "",
                estadoCivil: "",
                telefone: "",
                email: "",
                naturalidade: "",
                contatoEmergencia: "",
                alergias: "",
                cuidadosEspecificos: "",
                convenio: "",
                numeroConvenio: "",
                validadeConvenio: "",
                cep: "",
                cidade: "",
                estado: "",
                logradouro: "",
                numero: "",
                bairro: "",
                pontoReferencia: "",
                statusSistema: "",
            });
            alert("Paciente cadastrado com sucesso!");
            setIsEditing(false);
        } catch (error) {
            console.error(error);
            alert("Erro ao cadastrar paciente!");
        }
    };

    const handleCEPBlur = async (e) => {
        const cep = e.target.value.replace(/\D/g, "");
        if (cep.length === 8) {
          try {
            // Utiliza a PacienteService para obter os dados do CEP
            const data = await PacienteService.GetCEPData(cep);
    
            // Atualiza o estado com os dados do CEP
            setFormData({
              ...formData,
              cep,
              cidade: data.localidade,
              estado: data.uf,
              logradouro: data.logradouro,
              complemento: data.complemento,
              bairro: data.bairro,
            });
          } catch (error) {
            console.error(error);
            
          }
        }
    };

    const usuarios = {
        id: 1,
        nome: "Nome de Usuário",
      };

      return (
        <Styled.containerCadastroPaciente>
          
            <Styled.H3>Preencha os campos para cadastrar o paciente</Styled.H3>
          
          <div>
            <FormPaciente />
          </div>
        </Styled.containerCadastroPaciente>
      );
}