import "./App.css";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Graphic from "./components/Graphic";
import Header from "./components/Header";
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
        <Tabela consults={consultas}/>
        <Graphic consultas ={consultas} profissionais={profissionais}/>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
