import * as Styled from "./CardEstatistica.Style.jsx";
import LabLogo from "../../assets/LabLogo.png";

function CardEstatistica({ dataCard }) {
  return (
    <>
      <Styled.ContainerCardEstatisticas>
        <Styled.HeaderCard id="resultado">
          <span id="icone">{dataCard.icone || <img src={LabLogo} />}</span>
          {dataCard.resultado || "Erro"}
        </Styled.HeaderCard>

        <Styled.HeaderCard2 id="legenda">
          {dataCard.legenda || "Erro Aqui"}
        </Styled.HeaderCard2>
      </Styled.ContainerCardEstatisticas>
    </>
  );
}

export default CardEstatistica;
