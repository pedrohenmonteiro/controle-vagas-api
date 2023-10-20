import { useEffect, useState } from "react";
import Button from "./Button";
import Select, { SelectProps } from "./Select";
import TextField from "./TextField";
import Title from "./Title";

export default function FormCandidacy() {
  const [tecnologies, setTecnologies] = useState();
  const [platforms, setPlatforms] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/tecnologias")
      .then((response) => response.json())
      .then((apiData) => {
        setTecnologies(apiData);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/plataformas")
      .then((response) => response.json())
      .then((apiData) => {
        setPlatforms(apiData);
      });
  }, []);

  const [values, setValues] = useState({
    empresa: "",
    descricao: "",
    salario: "",
    plataforma: "",
    tecnologia: {
      id: null,
    },
  });

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSelect = (field: string, value: string) => {
    setValues((s) => ({
      ...s,
      [field]: {
        id: +value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5 ">
        <Title>Atualizar candidatura</Title>
        <div className="flex justify-between items-center gap-4">
          <TextField
            name="empresa"
            label="Empresa"
            onInputChange={(v) => handleInput("empresa", v)}
          />
          <TextField
            name="salario"
            label="Salario"
            type="number"
            initialValue="0.00"
            onInputChange={(v) => handleInput("salario", v)}
          />
        </div>
        <TextField
          name="descricao"
          label="Descricao"
          onInputChange={(v) => handleInput("descricao", v)}
        />
        <div className="flex gap-4">
          <Select
            selectValues={tecnologies}
            label="Selecione a tecnologia"
            onSelectChange={(v) => handleSelect("tecnologia", v)}
          />
          <Select selectValues={platforms} label="Selecione a plataforma" />
        </div>

        <Button color="blue" bold type="submit">
          Salvar
        </Button>
      </div>
    </form>
  );
}
