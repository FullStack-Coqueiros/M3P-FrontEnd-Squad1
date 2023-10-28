import React, { useContext, useEffect, useState } from "react";
import { UserService } from '../../../services/User.Service.jsx';
import { AuthContext } from "../../../context/AuthContext.jsx";
import { HeaderContext } from "../../../context/HeaderContext.jsx";
import { MedicamentoService } from "../../../services/Medicamentos.service.jsx";
import * as Styled from './CadastroMedicamentosPage.Style.jsx';

export const CadastroMedicamentosPage = () =>{
    const { setData } = useContext(HeaderContext)
    useEffect(() => {
      setData({       
        titulo: 'CADASTRO DE MEDICAMENTOS',}) 
},[]);
useEffect
    
    
    const { auth } = useContext(AuthContext)
    

    const [dadosMedicacao, setDadosMedicacao] = useState({
        nomeMedicamento:'',
        tipoMedicamento: '',
        quantidade: '',
        unidade: '',
        observacoes: '',
        data: '',
        horario: '',
        statusSistema: '',
        pacienteId: '',
        usuarioId: '',
    });

    const [errosValidacao, setErrosValidacao] = useState({});
    const [statusCadastro, setStatusCadastro] = useState('');
    const [dirty, setDirty] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        const numericValue = parseFloat(value).toFixed(2);
        setDadosMedicacao({...dadosMedicacao,[name]:numericValue});
        setDadosMedicacao((dadosAntigos) => ({ ...dadosAntigos, [name]: value }));
        setDirty((prevDirty) => ({ ...prevDirty, [name]: true }));
    };
    const validarCampos = () => {
        const erros = {};

       
        if (!dadosMedicacao.nomeMedicamento || dadosMedicacao.nomeMedicamento.length < 5 || dadosMedicacao.nomeMedicamento.length > 100) {
            erros.nomeMedicamento = 'O campo nome do medicamento é obrigatório e deve ter entre 5 e 100 caracteres.';
        } 
        if (!dadosMedicacao.observacoes || dadosMedicacao.observacoes.length < 10 || dadosMedicacao.observacoes.length > 1000) {
            erros.nomeMedicamento = 'O campo observações é obrigatório e deve ter entre 10 e 1000 caracteres.';
        }
        if (!dadosMedicacao.data)
            erros.data = 'O campo data de inicio do medicamentocé de preenchimento obrigatório!';
        if (!dadosMedicacao.horario)
            erros.horario = 'O campo horario é de preenchimento obrigatório!';
        if (!dadosMedicacao.tipoMedicamento)
            erros.tipoMedicamento = 'O campo tipo de medicamento é de preenchimento obrigatório!';
        if (!dadosMedicacao.quantidade)
            erros.quantidade = 'O campo quantidade é de preenchimento obrigatório!';
        if (!dadosMedicacao.unidade)
            erros.unidade = 'O campo unidade é de preenchimento obrigatório!';
        if (!dadosMedicacao.observacoes)
            erros.observacoes = 'O campo observações é de preenchimento obrigatório!';
        return erros;
    };
    const handleCadastroClick = async () => {
        const erros = validarCampos();
    if (Object.keys(erros).length > 0) {
            setErrosValidacao(erros);
            return;
        }
        try {
            await MedicamentoService.Create(dadosMedicacao);
            setStatusCadastro('sucesso');
            setErrosValidacao({});
        } catch (error) {
            console.error(error);
            setStatusCadastro("falha");
            setErrosValidacao({});
        }
    };
    return (
        <Styled.ContainerCadastroMedicacao>
            <h2>Cadastro Medicação:</h2>

            <Styled.InputWrapper>
                <label htmlFor="name">Nome Medicação:</label>
                <input
                    type="text"
                    id="nomeMedicamento"
                    name="nomeMedicamento"
                    value={dadosMedicacao.nomeMedicamento}
                    onChange={handleChange}
                />
                {dirty.nomeMedicamento && errosValidacao.nomeMedicamento && (
                    <p className="error-message">{errosValidacao.nomeMedicamento}</p>
                )}
            </Styled.InputWrapper>
            <Styled.InputWrapper>
                <label htmlFor="date">Data:</label>
                <input
                    type="date"
                    id="data"
                    name="data"
                    value={dadosMedicacao.data}
                    onChange={handleChange}
                />
                {dirty.data && errosValidacao.data && (
                    <p className="error-message">{errosValidacao.data}</p>
                )}
            </Styled.InputWrapper>
            <Styled.InputWrapper>
                <label htmlFor="data">Horário:</label>
                <input
                    type="time"
                    id="horario"
                    name="horario"
                    value={dadosMedicacao.horario}
                    onChange={handleChange}
                />
                {dirty.horario && errosValidacao.horario && (
                    <p className="error-message">{errosValidacao.horario}</p>
                )}
            </Styled.InputWrapper>
            <Styled.InputWrapper>
                <label htmlFor="tipo de medicamento">Tipo de Medicação:</label>
                <select
                    name="tipoMedicamento"
                    id="tipoMedicamento"
                    value={dadosMedicacao.tipoMedicamento}
                    onChange={handleChange}
                >
                    <option value="">Selecione</option>
                    <option value="Capsula">Cápsulas</option>
                    <option value=" Comprimido">Comprimidos</option>
                    <option value="Liquido">Liquido</option>
                    <option value="Creme">Creme</option>
                    <option value="Gel">Gel</option>
                    <option value="Inalacao">Inalação</option>
                    <option value="Injecao">Injeção</option>
                    <option value="Spray">Spray</option>
                </select>
                {dirty.genero && errosValidacao.tipoMedicamento && (
                    <p className="error-message">{errosValidacao.tipoMedicamento}</p>
                )}
            </Styled.InputWrapper>
            <Styled.InputWrapper>
                <label htmlFor="dosagem">Dosagem:</label>
                <input
                    type="number"
                    id="quantiidade"
                    name="quantidade"
                    value={dadosMedicacao.quantidade}
                    onChange={handleChange}
                    step="0.01"
                />
                {dirty.quantidade && errosValidacao.quantidade && (
                    <p className="error-message">{errosValidacao.quantidade}</p>
                )}
            </Styled.InputWrapper>
            <Styled.InputWrapper>
                <label htmlFor="unidade de medida ">Unidade de Medida:</label>
                <select
                    name="unidade"
                    id="unidade"
                    value={dadosMedicacao.unidade}
                    onChange={handleChange}
                >
                    <option value="">Selecione</option>
                    <option value="mg">mg</option>
                    <option value="mcg">mcg</option>
                    <option value="g">g</option>
                    <option value="mL">ml</option>
                    <option value="Porcentagem">%</option>
                </select>
                {dirty.unidade && errosValidacao.unidade && (
                    <p className="error-message">{errosValidacao.unidade}</p>
                )}
            </Styled.InputWrapper>
            <Styled.InputWrapper>
                <label htmlFor="observacoes">Observações:</label>
                <input
                    type="text"
                    id="observacoes"
                    name="observacoes"
                    value={dadosMedicacao.observacoes}
                    onChange={handleChange}
                />
                <span>
                    {dirty.observacoes && errosValidacao.observacoes && (
                    <p className="error-message">{errosValidacao.observacoes}</p>
                )}</span>
            </Styled.InputWrapper>
            <Styled.InputWrapper>
                <label htmlFor="status">Status no Sistema:</label>
                <select
                    name="status"
                    id="status"
                    value={dadosMedicacao.statusSistema}
                    onChange={handleChange}
                >
                    <option value="">Selecione</option>
                    <option value="true">Ativo</option>
                    <option value="false">Inativo</option>
                </select>
                {dirty.statusSistema && errosValidacao.statusSistema && (
                    <p className="error-message">{errosValidacao.statusSistema}</p>
                )}
                </Styled.InputWrapper>
                <Styled.InputWrapper>
                <label htmlFor="paciente id">Cód Paciente:</label>
                <input
                    type="number"
                    id="pacienteId"
                    name="pacienteId"
                    value={dadosMedicacao.pacienteId}
                    onChange={handleChange}
                />
                </Styled.InputWrapper>
                <Styled.InputWrapper>
                <label htmlFor="usuario id">Cód Usuário:</label>
                <input
                    type="number"
                    id="usuarioId"
                    name="usuarioId"
                    value={dadosMedicacao.usuarioId}
                    onChange={handleChange}
                />
                </Styled.InputWrapper>
                <Styled.ButtonCadastro onClick={handleCadastroClick}>Cadastrar</Styled.ButtonCadastro>

            {statusCadastro === 'sucesso' && <Styled.SuccessMessage>Cadastrado com sucesso.</Styled.SuccessMessage>}
            {statusCadastro === 'falha' && <Styled.ErrorMessage>Falha ao cadastrar.</Styled.ErrorMessage>}
        </Styled.ContainerCadastroMedicacao>
    );



};