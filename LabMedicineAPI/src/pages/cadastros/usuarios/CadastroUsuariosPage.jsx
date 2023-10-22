import React, { useState } from "react";
import { UserService } from '../../../services/User.Service.jsx';

const CadastroUsuarioPage = () => {
    const [dadosUsuario, setDadosUsuario] = useState({
        nomeCompleto: '',
        genero: '',
        cpf: '',
        telefone: '',
        email: '',
        senha: '',
        tipo: '',
    });

    const [errosValidacao, setErrosValidacao] = useState({});
    const [statusCadastro, setStatusCadastro] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosUsuario((dadosAntigos) => ({...dadosAntigos, [name]: value }));
    };

    const validarCampos = () => {
        const erros = {};

        // validação do nome completo
        if (!dadosUsuario.nomeCompleto || dadosUsuario.nomeCompleto.length < 8 || dadosUsuario.nomeCompleto.length > 64) {
            erros.nomeCompleto = 'Nome completo é obrigatório e deve ter entre 8 e 64 caracteres.';
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
        if (!dadosUsuario.senha || dadosUsuario.senha.length < 6) {
            erros.senha = 'Senha é obrigatória e deve ter pelo menos 6 caracteres.';
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
        <div className="ContainerCadastroUsuario">
            <h2>Cadastro de Usuário</h2>

            <div className="InputWrapper">
                <label htmlFor="nomeCompleto">Nome Completo:</label>
                <input 
                type="text" 
                id="nomeCompleto"
                name="nomeCompleto"
                value={dadosUsuario.nomeCompleto}
                onChange={handleChange}
                />
                {errosValidacao.nomeCompleto && (
                    <ErrorMessage>{errosValidacao.nomeCompleto}</ErrorMessage>
                )}
            </div>

            <div className="InputWrapper">
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
                {errosValidacao.genero && (
                    <ErrorMessage>{errosValidacao.genero}</ErrorMessage>
                )}
            </div>
            <div className="InputWrapper">
                    <label htmlFor="cpf">CPF:</label>
                    <input 
                    type="text"
                    id="cpf" 
                    name="cpf"
                    value={dadosUsuario.cpf}
                    onChange={handleChange}
                    />
                    {errosValidacao.cpf && (
                        <ErrorMessage>{errosValidacao.cpf}</ErrorMessage>
                    )}
                </div>

                <div className="InputWrapper">
                    <label htmlFor="telefone">Telefone:</label>
                    <input 
                    type="text" 
                    id="telefone"
                    name="telefone"
                    value={dadosUsuario.telefone}
                    onChange={handleChange}
                    />
                    {errosValidacao.telefone && (
                        <ErrorMessage>{errosValidacao.telefone}</ErrorMessage>
                    )}
                </div>

                <div className="InputWrapper">
                    <label htmlFor="email">E-mail:</label>
                    <input 
                    type="text" 
                    id="email"
                    name="email"
                    value={dadosUsuario.email}
                    onChange={handleChange}
                    />
                    {errosValidacao.email && (
                        <ErrorMessage>{errosValidacao.email}</ErrorMessage>
                    )}
                </div>

                <div className="InputWrapper">
                    <label htmlFor="senha">Senha:</label>
                    <input 
                    type="password" 
                    id="senha"
                    name="senha"
                    value={dadosUsuario.senha}
                    onChange={handleChange}                    
                    />
                    {errosValidacao.senha && (
                        <ErrorMessage>{errosValidacao.senha}</ErrorMessage>
                    )}
                </div>

                <div className="InputWrapper">
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
                    {errosValidacao.tipo && (
                        <ErrorMessage>{errosValidacao.tipo}</ErrorMessage>
                    )}
                </div>

                <button onClick={handleCadastroClick}>Cadastrar</button>

                {statusCadastro === 'sucesso' && <p>Cadastrado com sucesso.</p>}
                {statusCadastro === 'falha' && <p>Falha ao cadastrar.</p>}
        </div>
    );
};

export default CadastroUsuarioPage;