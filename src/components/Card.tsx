// import { useState, useEffect } from 'react'
import './Card.scss'

interface Shoe {
    type: string;
    image: string;
}

function Card(props: { shoes: Shoe[] }) {
    return (
        <div className="flex flex-wrap gap-3 justify-center">
            {props.shoes.map((shoe: Shoe, index) => (
                <div className="card" key={index}>
                    <img src={shoe.image} />
                    <dl>
                        {(Object.keys(shoe) as Array<keyof Shoe>).map((key) => key != 'image' ? <><dt>{key}</dt> <dd>{shoe[key]}</dd></> : <></>)}
                    </dl>
                </div>
            ))}
        </div>
    );

}

export default Card