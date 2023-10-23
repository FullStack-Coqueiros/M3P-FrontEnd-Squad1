import React, { useContext, useEffect, useState } from "react";
import { UserService } from '../../../services/User.Service.jsx';
import { AuthContext } from "../../../context/AuthContext.jsx";
import { HeaderContext } from "../../../context/HeaderContext.jsx";
import * as Styled from './CadastroUsuariosPage.Style.jsx';

const CadastroUsuarioPage = () => {

    const { setData } = useContext(HeaderContext)
  useEffect(() => {
    setData({       
      titulo: 'CADASTRO DE USUÁRIOS',}) 
      
    }, []);

    useEffect
    
    
    const { auth } = useContext(AuthContext)
    

    const [dadosUsuario, setDadosUsuario] = useState({
        name: '',
        genero: '',
        cpf: '',
        telefone: '',
        email: '',
        password: '',
        tipo: '',
    });

    const [errosValidacao, setErrosValidacao] = useState({});
    const [statusCadastro, setStatusCadastro] = useState('');
    const [dirty, setDirty] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosUsuario((dadosAntigos) => ({ ...dadosAntigos, [name]: value }));
        setDirty((prevDirty) => ({ ...prevDirty, [name]: true }));
    };

    const validarCampos = () => {
        const erros = {};

        // validação do nome completo
        if (!dadosUsuario.name || dadosUsuario.name.length < 8 || dadosUsuario.name.length > 64) {
            erros.name = 'Nome completo é obrigatório e deve ter entre 8 e 64 caracteres.';
        }

        // validação do email
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!dadosUsuario.email || !regexEmail.test(dadosUsuario.email)) {
            erros.email = 'E-mail é obrigatório e deve ser válido.';
        }

        // validação do CPF
        const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (!dadosUsuario.cpf || !regexCPF.test(dadosUsuario.cpf)) {
            erros.cpf = 'CPF é obrigatório e deve estar no formato 000.000.000-00';
        }

        // validação do telefone
        const regexTelefone = /^\(\d{2}\)\s9\s\d{4,5}-\d{4}$/;
        if (!dadosUsuario.telefone || !regexTelefone.test(dadosUsuario.telefone)) {
            erros.telefone = 'Telefone é obrigatório e deve estar no formato (99) 9 9999-9999.';
        }

        // validação da senha
        if (!dadosUsuario.password || dadosUsuario.password.length < 6) {
            erros.password = 'Senha é obrigatória e deve ter pelo menos 6 caracteres.';
        }

        // validação do tipo
        if (!dadosUsuario.tipo) {
            erros.tipo = 'Tipo é obrigatório.'
        }

        return erros;
    };

    const handleCadastroClick = async () => {
        const erros = validarCampos();

        if (Object.keys(erros).length > 0) {
            setErrosValidacao(erros);
            return;
        }

        try {
            await UserService.CreateUser(dadosUsuario);
            setStatusCadastro('sucesso');
            setErrosValidacao({});
        } catch (error) {
            console.error(error);
            setStatusCadastro("falha");
            setErrosValidacao({});
        }
    };

    return (
        <Styled.ContainerCadastroUsuario>
            <h2>Cadastro de Usuário:</h2>

            <Styled.InputWrapper>
                <label htmlFor="name">Nome Completo:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={dadosUsuario.name}
                    onChange={handleChange}
                />
                {dirty.name && errosValidacao.name && (
                    <p className="error-message">{errosValidacao.name}</p>
                )}
            </Styled.InputWrapper>

            <Styled.InputWrapper>
                <label htmlFor="genero">Genero:</label>
                <select
                    name="genero"
                    id="genero"
                    value={dadosUsuario.genero}
                    onChange={handleChange}
                >
                    <option value="">Selecione</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="não declarar">Não Declarar</option>
                </select>
                {dirty.genero && errosValidacao.genero && (
                    <p className="error-message">{errosValidacao.genero}</p>
                )}
            </Styled.InputWrapper>

            <Styled.InputWrapper>
                <label htmlFor="cpf">CPF:</label>
                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    value={dadosUsuario.cpf}
                    onChange={handleChange}
                />
                {dirty.cpf && errosValidacao.cpf && (
                    <p className="error-message">{errosValidacao.cpf}</p>
                )}
            </Styled.InputWrapper>

            <Styled.InputWrapper>
                <label htmlFor="telefone">Telefone:</label>
                <input
                    type="text"
                    id="telefone"
                    name="telefone"
                    value={dadosUsuario.telefone}
                    onChange={handleChange}
                />
                {dirty.telefone && errosValidacao.telefone && (
                    <p className="error-message">{errosValidacao.telefone}</p>
                )}
            </Styled.InputWrapper>

            <Styled.InputWrapper>
                <label htmlFor="email">E-mail:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={dadosUsuario.email}
                    onChange={handleChange}
                />
                {dirty.email && errosValidacao.email && (
                    <p className="error-message">{errosValidacao.email}</p>
                )}
            </Styled.InputWrapper>

            <Styled.InputWrapper>
                <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={dadosUsuario.password}
                    onChange={handleChange}
                />
                {dirty.password && errosValidacao.password && (
                    <p className="error-message">{errosValidacao.password}</p>
                )}
            </Styled.InputWrapper>

            <Styled.InputWrapper>
                <label htmlFor="tipo">Tipo:</label>
                <select
                    name="tipo"
                    id="tipo"
                    value={dadosUsuario.tipo}
                    onChange={handleChange}
                >
                    <option value="">Selecione</option>
                    <option value="administrador">Administrador</option>
                    <option value="medico">Médico</option>
                    <option value="enfermeiro">Enfermeiro</option>
                </select>
                {dirty.tipo && errosValidacao.tipo && (
                    <p className="error-message">{errosValidacao.tipo}</p>
                )}
            </Styled.InputWrapper>

            <Styled.ButtonCadastro onClick={handleCadastroClick}>Cadastrar</Styled.ButtonCadastro>

            {statusCadastro === 'sucesso' && <Styled.SuccessMessage>Cadastrado com sucesso.</Styled.SuccessMessage>}
            {statusCadastro === 'falha' && <Styled.ErrorMessage>Falha ao cadastrar.</Styled.ErrorMessage>}
        </Styled.ContainerCadastroUsuario>
    );
};

export default CadastroUsuarioPage;
