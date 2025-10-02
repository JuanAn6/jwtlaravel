import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth(); 

  if (isLoading) {
    // Muestra un indicador de carga mientras verifica el token
    return <div>Cargando autenticación...</div>;
  }

  // Si no está autenticado, redirige al login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Si está autenticado, permite ver la ruta anidada (Home)
  return <Outlet />;
};

export default ProtectedRoute;