import React from 'react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user, logout } = useAuth(); // Obtiene la info del usuario y la función logout

  return (
    <div>
      <h1>Bienvenido al Home, {user?.nombre}!</h1>
      <p>Esta es una página protegida. Tu email es: **{user?.email}**.</p>
      
      {/* Botón para cerrar sesión */}
      <button onClick={logout} style={{ marginTop: '20px' }}>
        Cerrar Sesión
      </button>

      <h2>Contenido Exclusivo</h2>
      <p>Aquí pondrías la funcionalidad principal de tu aplicación.</p>
    </div>
  );
};

export default Home;