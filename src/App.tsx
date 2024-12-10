
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useShoeList } from './components/getShoes';

import Home from './pages/Home';
import Order from './pages/Order';
import Matches from './pages/Matches';

function App() {

  const shoeList = useShoeList();

  if (!shoeList) {
    return <div className="App">Loading...</div>;
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home shoes={shoeList} />} />
      <Route path="/order" element={<Order />} />
      <Route path="/matches" element={<Matches />} />
    </Routes>
  </BrowserRouter>
  );

}

export default App
