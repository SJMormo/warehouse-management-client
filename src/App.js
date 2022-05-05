import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import InventoryDetail from './components/InventoryDetail/InventoryDetail';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory/:id" element={<InventoryDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
