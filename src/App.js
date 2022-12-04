import { useState } from 'react';
import './App.css';

function App() {
  const [regalos, setRegalos]= useState (["Medias", "Zapatillas", "Tarjetas"])
  const handleSubmit = (e) => {e.preventDefault()
    if (nuevoRegalo !== ""){
    setRegalos([...regalos,nuevoRegalo])
    setNuevoRegalo ("")
  }}
  const [nuevoRegalo, setNuevoRegalo] = useState ()
  const handleChange = (e) => setNuevoRegalo (e.target.value)
  const handleDelete = (borrar) => {
    const resultado = regalos.filter (regalo => regalo !== borrar)
    setRegalos (resultado)
  }
 
  return (
    <div className="App">
      <header className="App-header">
      <img src='imagennav.jpg' alt="imgnavidad" />
        <div className='imagennavidad'>
          <h1>Lista de regalos!</h1>
          <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={nuevoRegalo}>
            </input>
            <button>Agregar regalo</button>
          </form>
          {regalos.map (regalo => <h2>{regalo} <button onClick={()=>handleDelete(regalo)}>Borrar</button> </h2>)} 
          {/* <h2>Medias</h2>
          <h2>Zapatillas</h2>
          <h2>Tarjetas</h2> */}
        </div>
         {/* <a
          className="imagennavidad"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buscas algo mas?
        </a> */}
      </header>
    </div>
  );
}

export default App;
