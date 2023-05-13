import avaliacao from './assets/avaliacao.png'
import grafico from './assets/grafico.png'
import consulta from './assets/consulta.png'
import styled from 'styled-components'

interface Props {
    imagem?: string,
    children?: React.ReactNode
}

interface IImages{
    avaliacao: string,
    grafico: string,
    consulta: string
}

const StyledSpan = styled.span<Props>`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25px;
    height: 25px;
    background-image: ${props => props.imagem ? `url(${props.imagem})` : 'none'};
`

const StyledTitle = styled.h2`
    color: var(--azul-claro);
`
const StyledContainer = styled.div`
    display: flex;
    align-items: center;
`

function Title({imagem, children}: Props){
    const imagesList: IImages = {
        avaliacao: avaliacao,
        grafico: grafico,
        consulta: consulta
    }
    return(
        <StyledContainer>
           {imagem && <StyledSpan imagem={imagesList[imagem as keyof IImages]}/>}
            <StyledTitle>{children}</StyledTitle>
        </StyledContainer>
    )
}

export default Title