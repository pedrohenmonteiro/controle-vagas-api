import { useState } from "react";
import TextField from "./TextField";
import Button from "./Button";
import Title from "./Title";
import { Link, useNavigate } from "react-router-dom";

import AuthService from "../services/auth-services";
import Auth from "./Auth";

export default function FormSignIn() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({ username: "", password: "" });

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    console.log(values);

    try {
      await AuthService.login(values.username, values.password).then(() => {
        navigate("/candidaturas");
        window.location.reload();
      });
    } catch (error) {
      console.error("Erro. Tente novamente mais tarde.", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Auth title="Entre na sua conta">
        <TextField
          name="username"
          label="Email"
          onInputChange={(v) => handleInput("username", v)}
        />
        <TextField
          name="password"
          label="Senha"
          type="password"
          onInputChange={(v) => handleInput("password", v)}
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
