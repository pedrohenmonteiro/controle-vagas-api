import Button from "./Button";
import Select, { SelectProps } from "./Select";
import TextField from "./TextField";
import Title from "./Title";

const tecnologies = ["Java", "TypeScript"];
const plataforms = ["LinkedIn", "Gupy"];

export default function FormCandidacy() {
  return (
    <div>
      <form className="flex flex-col gap-4">
        <Title>Atualizar</Title>
        <div className="flex justify-between items-center gap-4">
          <TextField name="empresa" label="Empresa" />
          <TextField
            name="salario"
            label="Salario"
            type="number"
            initialValue="0.00"
          />
        </div>
        <TextField name="descricao" label="Descricao" />
        <div className="flex gap-4">
          <Select selectValues={tecnologies} label="Selecione a tecnologia" />
          <Select selectValues={plataforms} label="Selecione a plataforma" />
        </div>

        <Button color="blue" bold>
          Salvar
        </Button>
      </form>
    </div>
  );
}
