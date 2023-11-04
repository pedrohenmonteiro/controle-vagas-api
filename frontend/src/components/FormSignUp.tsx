import { Link, useNavigate } from "react-router-dom";
import Auth from "./BaseAuth";
import Button from "./Button";
import TextField from "./TextField";
import { useState } from "react";
import AuthService from "../auth/auth-services";

export type SignUpProps = {
  nome: string;
  email: string;
  senha: string;
};

export default function FormSignUp() {
  const navigate = useNavigate();

  const [values, setValues] = useState<SignUpProps>({
    nome: "",
    email: "",
    senha: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    console.log(values);

    try {
      //  const signUp = await AuthService.signUp(values);
      if (true) {
        navigate("/candidaturas");
        window.location.reload();
      }
    } catch (error) {
      console.error("Erro. Tente novamente mais tarde.", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Auth title="Cria uma conta">
        <TextField
          name="nome"
          label="Nome"
          onInputChange={(v) => handleInput("nome", v)}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          onInputChange={(v) => handleInput("email", v)}
        />
        <TextField
          name="senha"
          label="Senha"
          type="password"
          onInputChange={(v) => handleInput("senha", v)}
        />

        <Button color="blue" bold type="submit" disabled={loading}>
          Entrar
        </Button>

        <div className="text-sm text-center text-gray-900 ">
          Não tem uma conta?{" "}
          <Link to="/cadastro">
            <a className="text-emerald-600 underline">Cadastre-se</a>
          </Link>
        </div>
      </Auth>
    </form>
  );
}
