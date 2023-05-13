import styled from "styled-components";
import logo from "./assets/logo.png";
import perfil from "./assets/perfil.png";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 4em;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: .1;
`;

const StyledLink = styled.a`
  color: var(--azul-escuro);
  font-weight: 700;
`;

function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="Logo empresa Voll" />
      <Container>
        <img src={perfil} alt="Imagem de perfil usuário" />
        <StyledLink href="/">Sair</StyledLink>
      </Container>
    </StyledHeader>
  );
}

export default Header;
