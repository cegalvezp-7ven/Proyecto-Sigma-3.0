
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/organisms/Navbar';
import Footer from './components/organisms/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';
import Promociones from './pages/Promociones';
import Login from './pages/Login';
import './styles/templates/global.css';

function App() {
  return (
    <div className="app-layout">
      <Navbar />

      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
