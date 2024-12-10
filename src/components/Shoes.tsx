/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from "./Card";

type Props = {
  shoes: Array<object>;
};

export default function Shoes({ shoes }: Props) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {shoes.map((shoe: any) => (
        <Card item={shoe}  key={shoe.id}/>
      ))}
    </div>
  );
}
