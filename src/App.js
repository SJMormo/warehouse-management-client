import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import InventoryDetail from './components/InventoryDetail/InventoryDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory/:id" element={<InventoryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
