import Title from "./Title";

type AuthProps = {
  children: React.ReactNode;
  title: string;
};

function Auth({ title, children }: AuthProps) {
  return (
    <div className="shadow-lg flex flex-col gap-8 p-6 m-12 rounded-3xl bg-white">
      <Title>{title}</Title>
      <div className="flex flex-col gap-5 ">{children}</div>
    </div>
  );
}

export default Auth;
