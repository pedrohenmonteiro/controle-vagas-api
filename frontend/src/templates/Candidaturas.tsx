import Button from "../components/Button";
import { RxUpdate } from "react-icons/rx";
import { SlArrowDown } from "react-icons/sl";
import { BsBookmark } from "react-icons/bs";
import Title from "../components/Title";

export default function Candidaturas() {
  return (
    <div>
      <Button icon={<RxUpdate />} icon2={<SlArrowDown />}>
        Atualizar
      </Button>

      <Title icon={<BsBookmark />}>Minhas candidaturas</Title>
    </div>
  );
}
