import { useEffect, useState } from "react";
import Button from "./Button";
import TextField from "./TextField";
import Title from "./Title";
import { CandidaturasProps } from "../templates/Candidaturas";
import Select from "./Select";
import { useNavigate } from "react-router-dom";

type FormCandidacyProps = {
  candidatura: CandidaturasProps;
  onClose: () => void;
};

export default function FormCandidacy({
  candidatura,
  onClose,
}: FormCandidacyProps) {
  const API_URL = "http://localhost:8080";
  const TECNOLOGIAS_URL = `${API_URL}/tecnologias`;
  const PLATAFORMAS_URL = `${API_URL}/plataformas`;
  const CANDIDATURAS_URL = `${API_URL}/candidaturas`;

  const [tecnologies, setTecnologies] = useState();
  const [platforms, setPlatforms] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(TECNOLOGIAS_URL)
      .then((response) => response.json())
      .then((apiData) => {
        setTecnologies(apiData);
      });

    fetch(PLATAFORMAS_URL)
      .then((response) => response.json())
      .then((apiData) => {
        setPlatforms(apiData);
      });
  }, []);

  const [values, setValues] = useState({
    empresa: candidatura?.empresa || "",
    descricao: candidatura?.descricao || "",
    salario: candidatura?.salario || "",
    status: candidatura?.status,
    plataforma: {
      id: candidatura?.plataforma?.id || null,
    },
    tecnologia: {
      id: candidatura?.tecnologia?.id || null,
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

    const method = candidatura?.id ? "PUT" : "POST";

    const url = `${CANDIDATURAS_URL}${
      method.includes("PUT") ? `/${candidatura?.id}` : ""
    }`;

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(values);

      if (!response.ok) {
        throw new Error(`Erro na solicitação ${method}`);
      }

      onClose();
    } catch (error) {
      console.error(`Erro ao enviar a solicitação ${method}`, error);
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
            initialValue={values?.empresa}
            onInputChange={(v) => handleInput("empresa", v)}
          />
          <TextField
            name="salario"
            label="Salario"
            type="number"
            initialValue={values?.salario == 0 ? "" : values?.salario}
            onInputChange={(v) => handleInput("salario", v)}
          />
        </div>
        <TextField
          name="descricao"
          label="Descricao"
          initialValue={values?.descricao}
          onInputChange={(v) => handleInput("descricao", v)}
        />
        <div className="flex gap-4">
          <Select
            selectValues={tecnologies}
            label="Selecione a tecnologia"
            initialValue={values?.tecnologia.id?.toString()}
            onSelectChange={(v) => handleSelect("tecnologia", v)}
          />
          <Select
            selectValues={platforms}
            label="Selecione a plataforma"
            initialValue={values?.plataforma.id?.toString()}
            onSelectChange={(v) => handleSelect("plataforma", v)}
          />
        </div>

        <Button color="blue" bold type="submit" disabled={loading}>
          Salvar
        </Button>
      </div>
    </form>
  );
}
