import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Importa el proveedor

// Páginas y Componentes
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';

function App() {
  return (
    // Envuelve toda la aplicación para que el contexto de Auth esté disponible
    <Router>
      <AuthProvider>
        <Routes>
          {/* Rutas Públicas (accesibles sin login) */}
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />

          {/* Rutas Protegidas (Solo accesibles si isAuthenticated es true) */}
          <Route path="/" element={<ProtectedRoute />}>
            {/* Si vas a '/', se renderiza Home, pero antes pasa por ProtectedRoute */}
            <Route index element={<Home />} /> 
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;