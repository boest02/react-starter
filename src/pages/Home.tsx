import React from "react";
import Card from "../components/Card";
interface Shoe {
    type: string;
    image: string;
}

export default function Home({ shoes }: { shoes: Shoe[] }) {
  return (
    <>
      <h1>Home</h1>
      <Card shoes={shoes} />
    </>
  );
}
