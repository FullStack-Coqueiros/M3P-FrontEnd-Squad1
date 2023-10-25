import * as Styled from './CardPaciente.Style.jsx';
import { ImUser } from 'react-icons/im';

const CardPaciente = ({ paciente }) => {
console.log(paciente)
  return (
    <>
      <Styled.CardPacienteContainer>
        <Styled.RenderCardPaciente>
          <Styled.IconCardPaciente>
            <ImUser/>
          </Styled.IconCardPaciente>

          <Styled.DadosPaciente>
            <Styled.DadosNome>{paciente.nomeCompleto}</Styled.DadosNome>
            <Styled.Dados>{paciente.dataNascimento}</Styled.Dados>
            <Styled.Dados>{paciente.telefone}</Styled.Dados>
            <Styled.Dados>{paciente.convenio}</Styled.Dados>
          </Styled.DadosPaciente>
          
        </Styled.RenderCardPaciente>
      </Styled.CardPacienteContainer>
    </>
  );
};

export default CardPaciente;