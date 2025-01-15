import { useRef } from 'react';
import "./NewShoe.scss";

interface Shoe {
    type: string,
    foot: string,
    brand: string,
    image: string,
    size: number,
    name: string
}

export default function NewShoe() {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const sizes = [];

    for (let i = 1; i <= 20; i++) {
        sizes.push(<option key={i} value={i}>{i}</option>);
        let j = i + .5;
        sizes.push(<option key={j} value={j}>{j}</option>);
    }

    const addShoe = async (shoe: Shoe) => {
        const headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        };

        const response = await fetch("http://127.0.0.1:3000/api/shoes/add", {
            method: "POST",
            body: JSON.stringify(shoe),
            headers: headersList
        });

        const data = await response.text();
        console.log(data);

    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        let shoe = {};
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
            shoe[key] = value;
        }
        console.log(shoe);
        addShoe(shoe);
    };

    return (
        <>
        <button className="add-shoe" onClick={() => dialogRef.current?.showModal()}>Add Shoe</button>
        <dialog className="new-shoe" ref={dialogRef}>
            <button className="close-btn" onClick={() => dialogRef.current?.close()}>X</button>
            <h2>Add a New Shoe</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter Shoe Name:</label>
                <input required type="text" name="name" id="name" placeholder="Name" />

                <label htmlFor="type">Enter Shoe Type:</label>
                <input required type="text" name="type" id="type" placeholder="Type" />

                <label htmlFor="brand">Enter Shoe Brand:</label>
                <input required type="text" name="brand" id="brand" placeholder="Brand" />

                <label htmlFor="image">Add an Image URL:</label>
                <input required type="text" name="image" id="image" placeholder="Image URL" />

                <label htmlFor="foot">Which Foot?</label>
                <select required name="foot" id="foot">
                    <option value="">--Please which foot--</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>

                <label htmlFor="size">What Size?</label>
                <select required name="size" id="size">
                    <option value="">--Please choose a size--</option>
                    {sizes}
                </select>

                <button>OK</button>
            </form>
        </dialog>
        </>
    );
}
