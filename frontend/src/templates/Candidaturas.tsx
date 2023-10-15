import { RxUpdate } from "react-icons/rx";
import { SlArrowDown } from "react-icons/sl";
import { BsBookmark } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Button from "../components/Button";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Container from "../components/Container";
import Text from "../components/Text";
import { useEffect, useState } from "react";


type CandidaturasProps = {
  "id": number,
  "empresa": string,
  "descricao": string,
  "status": string,
  "salario": number,
  "plataforma": {
      "id": number,
      "nome": string
  },
  "tecnologia": {
      "id": number,
      "nome": string
  }
}



export default function Candidaturas() {

  const [data, setData] = useState<CandidaturasProps>()
  
  useEffect(() => {
    fetch('http://localhost:8080/candidaturas/11')
    .then(response => response.json())
    .then(apiData => {
      setData(apiData); 
      console.log(apiData)
    })
  
  }, [])
  

  return data && (
    <Container className="h-screen">
      <div className="shadow-lg flex flex-col gap-8 p-6 m-12">
      <Title icon={<BsBookmark />}>Minhas candidaturas</Title>
      <Navigation />
      
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
            <Title>{data?.empresa}</Title>
            <Text medium>{data?.descricao}</Text>
            <div className="flex gap-4">
              <Text tecnologia={data?.tecnologia.nome}>{data?.tecnologia.nome}</Text>
              <Text icon={<RiMoneyDollarCircleLine />}>{data?.salario}</Text>
              <Text>{data?.plataforma.nome}</Text>
            </div>
        </div>
              <Button icon={<RxUpdate />} icon2={<SlArrowDown />}>Atualizar</Button>
      </div>

      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
            <Title>Desenvolvedor Backend</Title>
            <Text medium>Vaga de desenvolvimento backend</Text>
            <div className="flex gap-4">
              <Text tecnologia="Golang">Golang</Text>
              <Text icon={<RiMoneyDollarCircleLine />}> 2.5k mês</Text>
              <Text>LinkedIn</Text>
            </div>
        </div>
              <Button icon={<RxUpdate />} icon2={<SlArrowDown />}>Atualizar</Button>
      </div>

      
      </div>
    </Container>
  );
}
