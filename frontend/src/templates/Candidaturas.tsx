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
import TextField from "../components/TextField";
import Modal from "../components/Modal";
import FormCandidacy from "../components/FormCandidacy";

export type CandidaturasProps = {
  id: number;
  empresa: string;
  descricao: string;
  status: string;
  salario: number;
  plataforma: {
    id: number;
    nome?: string;
  };
  tecnologia: {
    id: number;
    nome?: string;
  };
} | null;

export default function Candidaturas() {
  const [candidatura, setCandidatura] = useState<CandidaturasProps[]>();
  const [showModal, setShowModal] = useState(false);

  const [candidaturaSelected, setCandidaturaSelected] =
    useState<CandidaturasProps>({
      id: 0,
      empresa: "",
      descricao: "",
      salario: 0,
      status: "EM_ANALISE",
      plataforma: {
        id: 0,
      },
      tecnologia: {
        id: 0,
      },
    });

  useEffect(() => {
    fetch("http://localhost:8080/candidaturas")
      .then((response) => response.json())
      .then((apicandidatura) => {
        setCandidatura(apicandidatura);
      });
  }, []);

  return (
    <div>
      <Container className="h-full">
        <div className="shadow-lg flex flex-col gap-8 p-6 m-12 rounded-3xl bg-white">
          <Title icon={<BsBookmark />}>Minhas candidaturas</Title>
          <Navigation />

          {candidatura?.map((candidatura) => {
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
                    setShowModal(true);
                    setCandidaturaSelected(candidatura);
                  }}
                >
                  Atualizar
                </Button>
              </div>
            );
          })}
        </div>
      </Container>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        {" "}
        <FormCandidacy
          candidatura={candidaturaSelected}
          onClose={() => {
            setShowModal(false);
            setCandidaturaSelected(null);
          }}
        />
      </Modal>
    </div>
  );
}
