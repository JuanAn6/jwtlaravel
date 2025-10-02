import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    
    // Aquí iría la llamada al Backend para registrar al usuario
    console.log(`Registrando usuario: ${email}`);

    // Simulación: si es exitoso, redirige al login para que inicie sesión
    alert('Registro exitoso. ¡Inicia sesión!');
    navigate('/login');
  };

  return (
    <div>
      <h1>Registro de Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
      <p>¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link></p>
    </div>
  );
};

export default Register;