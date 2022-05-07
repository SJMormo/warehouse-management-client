import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import InventoryDetail from './components/InventoryDetail/InventoryDetail';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import NotFound from './components/NotFound/NotFound';
import ManageInventories from './components/ManageInventories/ManageInventories';
import AddNewItem from './components/AddNewItem/AddNewItem';
import { ToastContainer } from 'react-toastify';
import MyItems from './components/MyItems/MyItems';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/manageinventories" element={<ManageInventories />} />
        <Route path="/addnewitem" element={<AddNewItem />} />
        <Route path="/myitems" element={<MyItems />} />

        <Route path="/inventory/:id" element={
          <RequireAuth>
            <InventoryDetail />
          </RequireAuth>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
