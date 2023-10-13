import Button from "../components/Button";
import { RxUpdate } from "react-icons/rx";
import { SlArrowDown } from "react-icons/sl";

export default function Candidaturas() {
  return (
    <div>
      <Button icon={<RxUpdate />} icon2={<SlArrowDown />}>
        Atualizar
      </Button>
    </div>
  );
}
