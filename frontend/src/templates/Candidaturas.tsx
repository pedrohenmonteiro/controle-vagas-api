import Button from "../components/Button";
import { RxUpdate } from "react-icons/rx";
import { SlArrowDown } from "react-icons/sl";
import { BsBookmark } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Container from "../components/Container";
import Text from "../components/Text";

export default function Candidaturas() {
  

  return (
    <Container className="h-screen">
      <div className="shadow-lg flex flex-col gap-4 p-6 m-12">
      <Title icon={<BsBookmark />}>Minhas candidaturas</Title>
      <Navigation />
      
      <div>
        <Title>Desenvolvedor Backend</Title>
        <p className="text-lg gap-2 text-gray-600">Vaga de desenvolvimento Backend</p>

        <div>
        <Text icon={<RiMoneyDollarCircleLine />} tecnologia="Java">
        Java
      </Text>

      <Text icon={<RiMoneyDollarCircleLine />} tecnologia="Loc"> 2.5k mês</Text>
      <Text>ofodo</Text>
        </div>
      </div>

      
      </div>
    </Container>
  );
}
