import { useState } from "react";
import TextField from "./TextField";
import Button from "./Button";
import Title from "./Title";

export default function FormSignIn() {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({ email: "", senha: "" });

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5 ">
        <Title>Entrar</Title>
        <TextField
          name="email"
          label="Email"
          onInputChange={(v) => handleInput("email", v)}
        />
        <TextField
          name="senha"
          label="Senha"
          type="password"
          onInputChange={(v) => handleInput("senha", v)}
        />

        <Button color="blue" bold type="submit" disabled={loading}>
          Salvar
        </Button>
      </div>
    </form>
  );
}
