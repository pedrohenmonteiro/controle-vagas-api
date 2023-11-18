import { RxUpdate } from "react-icons/rx";
import { SlArrowDown } from "react-icons/sl";
import { BsBookmark } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Button from "../components/Button";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Container from "../components/Container";
import Text from "../components/Text";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import FormCandidacy from "../components/FormCandidacy";
import AuthService from "../auth/auth-services";

export type CandidaturasProps = {
  id: number | null;
  empresa: string;
  descricao: string;
  status: string;
  salario: number;
  plataforma: {
    id: number | null;
    nome?: string;
  };
  tecnologia: {
    id: number | null;
    nome?: string;
  };
} | null;

export default function Candidaturas() {
  const CANDIDATURAS_URL = `/candidaturas`;

  const [candidatura, setCandidatura] = useState<CandidaturasProps[]>();
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [filtroStatus, setFiltroStatus] = useState("Aprovado");

  const initialValue = {
    id: null,
    empresa: "",
    descricao: "",
    salario: 0,
    status: "EM_ANALISE",
    plataforma: {
      id: 1,
    },
    tecnologia: {
      id: 1,
    },
  };

  const [candidaturaSelected, setCandidaturaSelected] =
    useState<CandidaturasProps>(initialValue);

  useEffect(() => {
    AuthService.getResource(CANDIDATURAS_URL).then((apiData) => {
      setCandidatura(apiData);
    });
  }, [formSubmitted, filtroStatus]);

  if (!candidatura) return null;
  return (
    <div>
      <Container>
        <div className="shadow-lg flex flex-col gap-8 p-6 m-12 rounded-3xl bg-white">
          <div className="flex justify-between items-center">
            <Title icon={<BsBookmark />}>Minhas candidaturas</Title>
            <Button
              color="blue"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Nova Candidatura
            </Button>
          </div>
          <Navigation onFilterChange={(status) => setFiltroStatus(status)} />

          {candidatura.length > 0 ? (
            candidatura
              .filter((candidatura) => {
                return candidatura?.status === filtroStatus;
              })
              .map((candidatura) => {
                return (
                  <div
                    key={candidatura?.id}
                    className="flex items-start justify-between"
                  >
                    <div className="flex flex-col gap-1">
                      <Title>{candidatura?.empresa}</Title>
                      <Text medium>{candidatura?.descricao}</Text>
                      <div className="flex gap-4">
                        <Text tecnologia={candidatura?.tecnologia.nome}>
                          {candidatura?.tecnologia.nome}
                        </Text>
                        <Text icon={<RiMoneyDollarCircleLine />}>
                          {candidatura?.salario}
                        </Text>
                        <Text>{candidatura?.plataforma.nome}</Text>
                      </div>
                    </div>
                    <Button
                      icon={<RxUpdate />}
                      icon2={<SlArrowDown />}
                      onClick={() => {
                        setCandidaturaSelected(candidatura);
                        setShowModal(true);
                      }}
                    >
                      Atualizar
                    </Button>
                  </div>
                );
              })
          ) : (
            <p>Não há candidaturas aplicadas no momento.</p>
          )}
        </div>
      </Container>
      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
          setCandidaturaSelected(initialValue);
        }}
      >
        <FormCandidacy
          onClose={() => {
            setShowModal(false);
            setFormSubmitted((value) => !value);
          }}
          candidatura={candidaturaSelected}
        />
      </Modal>
    </div>
  );
}
