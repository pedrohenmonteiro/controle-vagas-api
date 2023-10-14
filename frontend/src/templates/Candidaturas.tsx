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
  const tecnologia = {
    nome: "Java",
  };

  return (
    <Container className="flex flex-col gap-4">
      <Title icon={<BsBookmark />}>Minhas candidaturas</Title>
      <Navigation />
      <Button icon={<RxUpdate />} icon2={<SlArrowDown />}>
        Atualizar
      </Button>
      <Text icon={<RiMoneyDollarCircleLine />} tecnologia="Vue">
        Java
      </Text>
    </Container>
  );
}
