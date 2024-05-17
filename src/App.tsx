import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0);
  
  const shoeImageUrls: string[] = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D",
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

  getList().then((data) => {
    console.log(data);
  });

  return (
    <>
      <div className='flex flex-row justify-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
