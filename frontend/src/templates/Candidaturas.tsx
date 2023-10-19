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

type CandidaturasProps = {
  id: number;
  empresa: string;
  descricao: string;
  status: string;
  salario: number;
  plataforma: {
    id: number;
    nome: string;
  };
  tecnologia: {
    id: number;
    nome: string;
  };
};

export default function Candidaturas() {
  const [data, setData] = useState<CandidaturasProps[]>();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/candidaturas")
      .then((response) => response.json())
      .then((apiData) => {
        setData(apiData);
      });
  }, []);

  return (
    <div>
      <Container className="h-full">
        <div className="shadow-lg flex flex-col gap-8 p-6 m-12 rounded-3xl bg-white">
          <Title icon={<BsBookmark />}>Minhas candidaturas</Title>
          <Navigation />

          {data?.map((data) => {
            return (
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <Title>{data?.empresa}</Title>
                  <Text medium>{data?.descricao}</Text>
                  <div className="flex gap-4">
                    <Text tecnologia={data?.tecnologia.nome}>
                      {data?.tecnologia.nome}
                    </Text>
                    <Text icon={<RiMoneyDollarCircleLine />}>
                      {data?.salario}
                    </Text>
                    <Text>{data?.plataforma.nome}</Text>
                  </div>
                </div>
                <Button
                  icon={<RxUpdate />}
                  icon2={<SlArrowDown />}
                  onClick={() => setShowModal(true)}
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
        <FormCandidacy />
      </Modal>
    </div>
  );
}
