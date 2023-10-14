import Button from "../components/Button";
import { RxUpdate } from "react-icons/rx";
import { SlArrowDown } from "react-icons/sl";
import { BsBookmark } from "react-icons/bs";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Container from "../components/Container";

export default function Candidaturas() {
  return (
    <Container>
      <Title icon={<BsBookmark />}>Minhas candidaturas</Title>
      <Navigation />
      <Button icon={<RxUpdate />} icon2={<SlArrowDown />}>
        Atualizar
      </Button>
    </Container>
  );
}
