import Button from "../components/Button";
import { RxUpdate } from "react-icons/rx";
import { SlArrowDown } from "react-icons/sl";
import { BsBookmark } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Container from "../components/Container";
import Text from "../components/Text";

type CandidaturasProps = {
  
}


export default function Candidaturas() {
  

  return (
    <Container className="h-screen">
      <div className="shadow-lg flex flex-col gap-8 p-6 m-12">
      <Title icon={<BsBookmark />}>Minhas candidaturas</Title>
      <Navigation />
      
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
            <Title>Desenvolvedor Backend</Title>
            <Text medium>Vaga de desenvolvimento backend</Text>
            <div className="flex gap-4">
              <Text tecnologia="Java">Java</Text>
              <Text icon={<RiMoneyDollarCircleLine />}> 2.5k mês</Text>
              <Text>LinkedIn</Text>
            </div>
        </div>
              <Button icon={<RxUpdate />} icon2={<SlArrowDown />}>Atualizar</Button>
      </div>

      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
            <Title>Desenvolvedor Backend</Title>
            <Text medium>Vaga de desenvolvimento backend</Text>
            <div className="flex gap-4">
              <Text tecnologia="Java">Java</Text>
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
