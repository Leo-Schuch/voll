import styled from "styled-components";
import facebook from "./assets/facebook.png";
import google from "./assets/google.png";
import instagram from "./assets/instagram.png";
import whatsapp from "./assets/whatsapp.png";

const StyledFooter = styled.footer`
  height: 100%;
  color: white;
  padding: 1em;
  background-color: var(--azul-escuro);
  text-align: center;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 10%;
  margin: 1em auto;
`;

const StyledItem = styled.li`
  list-style-type: none;
  display: flex;
  gap: 0 10px;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledList>
        <StyledItem>
          <a target="blank" href="https://facebook.com">
            <img src={facebook} alt="Logo Facebook" />
          </a>
          <a href="https://google.com" target="blank">
            <img src={google} alt="Logo google" />
          </a>
          <a target="blank" href="https://instagram.com">
            <img src={instagram} alt="Logo instagram" />
          </a>
          <a target="blank" href="https://whatsapp.com">
            <img src={whatsapp} alt="Logo whatsapp" />
          </a>
        </StyledItem>
      </StyledList>
      <p>2023 Desenvolvido por Schuch | Projeto sem fins comerciais</p>
    </StyledFooter>
  );
}

export default Footer;
