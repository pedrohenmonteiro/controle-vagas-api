import { useEffect, useState } from "react";
import Button from "./Button";
import Select, { SelectProps } from "./Select";
import TextField from "./TextField";
import Title from "./Title";
import { CandidaturasProps } from "../templates/Candidaturas";

type FormCandidacyProps = {
  candidatura: CandidaturasProps;
  onClose: () => void;
};

export default function FormCandidacy({
  candidatura,
  onClose,
}: FormCandidacyProps) {
  const [tecnologies, setTecnologies] = useState();
  const [platforms, setPlatforms] = useState();
  const [loading, setLoading] = useState(false);

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
    status: "EM_ANALISE",
    plataforma: {
      id: null,
    },
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

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8080/candidaturas/" + candidatura?.id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error("Erro na solicitação PUT");
      }

      onClose();
    } catch (error) {
      console.error("Erro ao enviar a solicitação PUT", error);
      console.log(values);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5 ">
        <Title>Atualizar candidatura</Title>
        <div className="flex justify-between items-center gap-4">
          <TextField
            name="empresa"
            label="Empresa"
            initialValue={candidatura?.empresa}
            onInputChange={(v) => handleInput("empresa", v)}
          />
          <TextField
            name="salario"
            label="Salario"
            type="number"
            initialValue={candidatura?.salario}
            onInputChange={(v) => handleInput("salario", v)}
          />
        </div>
        <TextField
          name="descricao"
          label="Descricao"
          initialValue={candidatura?.descricao}
          onInputChange={(v) => handleInput("descricao", v)}
        />
        <div className="flex gap-4">
          <Select
            selectValues={tecnologies}
            label="Selecione a tecnologia"
            initialValue={candidatura?.tecnologia.nome}
            onSelectChange={(v) => handleSelect("tecnologia", v)}
          />
          <Select
            selectValues={platforms}
            label="Selecione a plataforma"
            initialValue={candidatura?.plataforma.nome}
            onSelectChange={(v) => handleSelect("plataforma", v)}
          />
        </div>

        {!loading ? (
          <Button color="blue" bold type="submit">
            Salvar
          </Button>
        ) : (
          <Button color="blue" bold disabled>
            Salvar
          </Button>
        )}
      </div>
    </form>
  );
}
