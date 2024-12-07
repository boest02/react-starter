import Card from "../components/Card";
interface Shoe {
    type: string;
    image: string;
}

export default function Home({ shoes }: { shoes: Shoe[] }) {
  return (
    <>
      <h1 className="text-4xl font-bold my-5 mx-auto text-center">Home</h1>
      <Card shoes={shoes} />
    </>
  );
}
