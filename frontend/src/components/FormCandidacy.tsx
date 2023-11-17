import { useEffect, useState } from "react";
import Button from "./Button";
import TextField from "./TextField";
import Title from "./Title";
import { CandidaturasProps } from "../templates/Candidaturas";
import Select from "./Select";
import AuthService from "../auth/auth-services";

type FormCandidacyProps = {
  candidatura: CandidaturasProps;
  onClose: () => void;
};

export default function FormCandidacy({
  candidatura,
  onClose,
}: FormCandidacyProps) {
  const TECNOLOGIAS_URL = `/tecnologias`;
  const PLATAFORMAS_URL = `/plataformas`;
  const CANDIDATURAS_URL = `/candidaturas`;

  const [tecnologies, setTecnologies] = useState();
  const [platforms, setPlatforms] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AuthService.getResource(TECNOLOGIAS_URL).then((apiData) => {
      setTecnologies(apiData);
    });

    AuthService.getResource(PLATAFORMAS_URL).then((apiData) => {
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

    AuthService.postResource(CANDIDATURAS_URL, values)
      .then(() => {
        onClose();
      })
      .catch((e) => {
        console.error("Erro ao enviar solicitaçao", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) return <div>Carregando...</div>;
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
