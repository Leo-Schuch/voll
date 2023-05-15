import "./App.css";
import Avaliacao from "./components/Avaliacao";
import Button from "./components/Button";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Graphic from "./components/Graphic";
import Header from "./components/Header";
import Subtitle from "./components/Subtitle";
import Tabela from "./components/Tabela";
import Title from "./components/Title";
import useDataConsult from "./useConsultData";
import useProfessionalData from "./useProfessionalData";

function App() {
  const {data: consultas, erro: consultasErro} =useDataConsult();
  const {data: profissionais, erro: profissionaisErro} = useProfessionalData()

  if(consultasErro || profissionaisErro){
    console.log('Ocorreu um erro na req')
  }
  return (
    <>
      <Header />
      <Container>
        <Title>Área administrativa</Title>
        <Button>Cadastrar especialista</Button>
        <Title imagem='consultas'>Consultas do dia</Title>
        <Tabela consults={consultas}/>
        <Title imagem='grafico' > Consultas mensais por especialistas</Title>
        <Subtitle>Dezembro/22</Subtitle>
        <Graphic consultas ={consultas} profissionais={profissionais}/>
        <Avaliacao profissionais={profissionais}/>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
