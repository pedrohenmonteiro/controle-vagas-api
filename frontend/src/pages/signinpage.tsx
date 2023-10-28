import FormSignIn from "../components/FormSignIn";
import Container from "../components/Container";

export default function SignInPage() {
  return (
    <Container className="max-w-[520px]">
      <div className="shadow-lg flex flex-col gap-8 p-6 m-12 rounded-3xl bg-white">
        <FormSignIn />
      </div>
    </Container>
  );
}
