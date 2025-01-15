import Shoes from "../components/Shoes";
import NewShoe from "../components/NewShoe";
interface Shoe {
  type: string;
  image: string;
}

export default function Home({ shoes }: { shoes: Shoe[] }) {
  return (
    <>
      <div className="title-bar flex items-center w-5/6" >
        <h1 className="text-4xl font-bold my-5 mx-auto text-center">Home</h1>
        <NewShoe />
      </div>
      <Shoes shoes={shoes} />

    </>
  );
}
