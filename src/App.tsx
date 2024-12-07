import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss'
import Home from './pages/Home';
import Order from './pages/Order';
import Matches from './pages/Matches';

const shoeImageUrls: string[] = [
  "https://thursdayboots.com/cdn/shop/products/1024x1024-Men-Captain-Whiskey-030922-Side.jpg?v=1658505769&width=1008",
  "https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg",
  "https://cdn.khadims.com/image/tr:e-sharpen-01,h-822,w-940,cm-pad_resize/data/khadims/06-apr-2022/35923835930_4.jpg",
  "https://i.redd.it/v3jqhi6ew0b71.jpg"
];


const getList = async () => {
  try {
    const response = await fetch("http://localhost:5173/shoes.json", { method: "GET" });
    const data = await response.json();

    data.forEach((element: { image: string; }) => {
      if (!element.image) {
        element.image = shoeImageUrls[Math.floor(Math.random() * shoeImageUrls.length)];
      }
    });

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

function App() {

  const [shoes, setShoes] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getAllShoes();
  }, []);

  const getAllShoes = () => {
    getList().then((data) => {
      console.log(data);
      setShoes(data);
      setLoading(false);
    });
  };


  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home shoes={shoes} />} />
      <Route path="/order" element={<Order />} />
      <Route path="/matches" element={<Matches />} />
    </Routes>
  </BrowserRouter>
  );

}

export default App
