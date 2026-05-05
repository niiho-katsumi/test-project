import Header from "../components/organisms/Header";


type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div className="my-10 mx-auto max-w-200">{children}</div>
    </>
  );
}
