import { Link } from "react-router-dom";
import Auth from "./Auth";
import Button from "./Button";
import TextField from "./TextField";
import { useState } from "react";

export default function FormSignUp() {
  const [values, setValues] = useState({ nome: "", email: "", senha: "" });

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Auth title="Entre na sua conta">
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
