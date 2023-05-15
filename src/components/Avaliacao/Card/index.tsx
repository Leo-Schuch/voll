import { Rating } from "@mui/material";
import IProfessional from "../../../types/IProfessional";
import styled from "styled-components";

const StyledContainer = styled.div`
    flex: 40%;
    max-width: 100%;
    background-color: #ffffff;
    padding: 1em;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
    border-radius: 8px;
    color: var(--cinza);
    margin: 1em 2em 1em;
`

const StyledList = styled.ul`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0;
`

const StyledItem = styled.li`
    list-style-type: none;
`

const StyledInfoItem = styled(StyledItem)`
    flex-grow: 1;
`

const StyledImg = styled.img`
    border-radius: 100%;
    width: 64px;
    object-fit: cover;
    height: 64px;
    border: 2px solid var(--azul-claro);
    margin-right: 1em;
`

const StyledParagraph = styled.p`
    margin: .5em 0;
    font-size: 14px;
`


function Card({ profissional }: {profissional: IProfessional}){
    return(
        <StyledContainer>
            <StyledList>
                <StyledItem>
                    <StyledImg src={profissional.imagem} alt={`foto de perfil do profissional ${profissional.nome}`}/>
                </StyledItem>
                <StyledInfoItem>
                    <StyledParagraph>{profissional.nome}</StyledParagraph>
                    <StyledParagraph>{profissional.especialidade}</StyledParagraph>
                </StyledInfoItem>
                <StyledItem>
                    <Rating 
                        name="simple-controlled"
                        value={profissional.nota}
                        readOnly={true}
                    />
                </StyledItem>
            </StyledList>
        </StyledContainer>
    )
}
export default Card;