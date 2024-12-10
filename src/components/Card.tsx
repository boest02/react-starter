// import { useState, useEffect } from 'react'
import "./Card.scss";

interface Item {
  type: string;
  image: string;
  id: string;
}

function Card({ item }: { item: Item }) {
  return (
    <div className="card">
      <img src={item.image} />
      <dl>
        {(Object.keys(item) as Array<keyof Item>).map((key_name, index) =>
            key_name !== "image" && (<div key={index}><dt>{key_name}</dt> <dd>{item[key_name]}</dd></div>)
        )}
      </dl>
    </div>
  );
}

export default Card;
