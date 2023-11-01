import { useState } from "react";
import TextField from "./TextField";
import Button from "./Button";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

import AuthService from "../services/auth-services";

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
      <div className="flex flex-col gap-5 ">
        <Title>Entrar</Title>
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
          Salvar
        </Button>
      </div>
    </form>
  );
}
