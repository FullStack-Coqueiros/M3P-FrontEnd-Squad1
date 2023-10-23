import styled from 'styled-components';

export const ContainerCadastroUsuario = styled.div`
  display: row;
  width: 900px;
  height: auto;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const InputWrapper = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input,
  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .ErrorMessage {
    color: red;
    font-size: 0.8em;
    margin-top: 5px;
  }
`;

export const ButtonCadastro = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto; // Adicionado para centralizar na horizontal

  &:hover {
    background-color: #45a049;
  }
`;

export const SuccessMessage = styled.p`
  color: green;
`;

export const ErrorMessage = styled.p`
  color: red;
`;
