import { useState } from "react";
import TextField from "./TextField";
import Button from "./Button";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

export default function FormSignIn() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({ username: "", password: "" });

  const clientId = "myclientid";
  const clientSecret = "myclientsecret";

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);

    try {
      const response = await fetch("http://localhost:8080/oauth2/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        },
        body: `grant_type=password&username=${values.username}&password=${values.password}`,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const token = data.access_token;

        navigate("/candidaturas");

        localStorage.setItem("access_token", token);
      } else {
        console.error("Erro de autenticação");
      }
    } catch (error) {
      console.error("Erro. Tente novamente mais tarde.", error);
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
