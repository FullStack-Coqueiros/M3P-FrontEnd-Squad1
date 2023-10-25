import * as Styled from './CardUsuario.style.jsx';
import { ImUser } from 'react-icons/im';

const CardUsuario = ({ usuario }) => {
console.log(usuario)
  return (
    <>
      <Styled.CardUsuarioContainer>
        <Styled.RenderCardUsuario>
          <Styled.IconCardUsuario>
            <ImUser/>
          </Styled.IconCardUsuario>

          <Styled.DadosUsuario>
            <Styled.DadosNome>{usuario.nomeCompleto}</Styled.DadosNome>
            <Styled.Dados>{usuario.genero}</Styled.Dados>
            <Styled.Dados>{usuario.telefone}</Styled.Dados>
            <Styled.Dados>{usuario.tipo}</Styled.Dados>
          </Styled.DadosUsuario>
          
        </Styled.RenderCardUsuario>
      </Styled.CardUsuarioContainer>
    </>
  );
};

export default CardUsuario;