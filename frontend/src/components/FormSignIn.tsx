
function FormSignIn() {
  const handleLogin = () => {
    // Redireciona o usuário para a página de autorização do GitHub
    window.location.href = `http://localhost:8080/oauth2/authorize?response_type=code&redirect_uri=http://localhost:5173/login/oauth2/code/client-server&client_id=client-server&scope=read`;
  };

  return (
    <div>
      <h1>Bem-vindo ao Meu Aplicativo</h1>
      <button onClick={handleLogin}>Login com GitHub</button>
    </div>
  );
}

export default FormSignIn;