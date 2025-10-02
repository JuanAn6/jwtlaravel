import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// 1. Crear el Contexto
const AuthContext = createContext();

// 2. Componente Proveedor (Provider)
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Función de Login (Simulada)
  const login = (email, password) => {
    // Aquí iría la llamada real a tu Backend (Ej. Axios)
    // Si la llamada es exitosa, guarda el token y la info del usuario.
    
    console.log(`Intentando login con: ${email}`);

    // Simulación de éxito después de un tiempo
    setTimeout(() => {
      setIsAuthenticated(true);
      setUser({ email: email, nombre: 'Usuario React', id: '123' });
      localStorage.setItem('token', 'simulated_jwt_token'); // Guarda el token
      navigate('/'); // Redirige al Home
    }, 1000); 
  };

  // Función de Logout
  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
    navigate('/login'); // Redirige al Login
  };

  // Efecto para verificar el token al cargar la app
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // En una app real, aquí se verifica si el token es válido con el backend
      setIsAuthenticated(true);
      // Simulación de recuperación de datos de usuario
      setUser({ email: 'usuario@ejemplo.com', nombre: 'Usuario Conectado', id: '123' });
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom Hook para usar la Autenticación
export const useAuth = () => {
  return useContext(AuthContext);
};