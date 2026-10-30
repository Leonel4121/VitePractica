import { useState } from "react"; 

export default function App() { 
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState(""); 
  const [clave, setClave] = useState(""); 
  const [mensaje, setMensaje] = useState(""); 

  const enviar = (e) => { 
    e.preventDefault(); 
    if (!nombre || !telefono || !correo || !clave) { 
      setMensaje("Por favor, completa todos los campos."); 
      return; 
    } 
    setMensaje(`Bienvenido, ${nombre}`); 
  }; 

  return ( 
    <main style={{ maxWidth: 360, margin: "40px auto", padding: 16 }}> 
      <h1>Registro</h1> 
      <form onSubmit={enviar} style={{ display: "grid", gap: 12 }}> 
        <input type="text" placeholder="Nombre" value={nombre} 
          onChange={(e) => setNombre(e.target.value)} /> 
        <input type="tel" placeholder="Teléfono" value={telefono} 
          onChange={(e) => setTelefono(e.target.value)} /> 
        <input type="email" placeholder="Correo" value={correo} 
          onChange={(e) => setCorreo(e.target.value)} /> 
        <input type="password" placeholder="Contraseña" value={clave} 
          onChange={(e) => setClave(e.target.value)} /> 
        <button type="submit">Entrar</button> 
      </form> 
      <p>{mensaje}</p> 
    </main> 
  ); 
}