
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/organisms/Navbar';
import Footer from './components/organisms/Footer';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <div className="app-layout">
      <Navbar />

      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
