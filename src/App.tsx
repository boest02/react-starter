import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useShoeList } from "./components/getShoes";

import Home from "./pages/Home";
import Order from "./pages/Order";
import Matches from "./pages/Matches";
import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {

  const shoeList = useShoeList();

  if (!shoeList) {
    return <div className="App">Loading...</div>;
  }

  return (
    <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={<Home shoes={shoeList} />} />
          <Route path="/order" element={<Order />} />
          <Route path="/matches" element={<Matches />} />
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  );
}

export default App;
