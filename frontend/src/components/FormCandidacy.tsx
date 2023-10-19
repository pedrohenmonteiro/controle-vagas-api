import TextField from "./TextField";

export default function FormCandidacy() {
  return (
    <div>
      <form>
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
      </form>
    </div>
  );
}
