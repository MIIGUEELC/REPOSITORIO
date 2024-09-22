import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [valorEntrada, setvalorEntrada] = useState('');
  const [tipoConversion, setConversionType] = useState('kmAmillas');
  const [resultado, setresultado] = useState('');
  const [reverso, setreverso] = useState(false);
  const [conversionesGuardadas, setconversionesGuardadas] = useState([]);

  // Tasas de conversión
  const conversionRates = {
    kmAmillas: 0.621371,
    millasAkm: 1.60934,
    piesAmetros: 0.3048,
    metrosApies: 3.28084,
    cmApulgadas: 0.393701,
    pulgadasAcm: 2.54,
  };

  // para recuperar conversiones guardadas
  useEffect(() => {
    const storedConversions = localStorage.getItem('conversionesGuardadas');
    if (storedConversions) {
      setconversionesGuardadas(JSON.parse(storedConversions)); // Parsear 
    }
  }, []);

  // Guardo las conversiones en localStorage
  useEffect(() => {
    if (conversionesGuardadas.length > 0) {
      localStorage.setItem('conversionesGuardadas', JSON.stringify(conversionesGuardadas));
    }
  }, [conversionesGuardadas]);

  // Manejo del input y cálculo instantáneo
  const cambioInput = (e) => {
    const value = e.target.value;
    setvalorEntrada(value);
    convertirValor(value, tipoConversion);
  };

  // Función para convertir el valor
  const convertirValor = (value, type) => {
    if (!isNaN(value) && value !== '') {
      const rate = conversionRates[type];
      const resultado = (parseFloat(value) * rate).toFixed(2);
      setresultado(resultado);
    } else {
      setresultado('');
    }
  };

  // Invertir el tipo de conversión 
  const handleSwap = () => {
    const nuevaConversion = tipoConversion.includes('a')
      ? tipoConversion.split('a').reverse().join('a')
      : tipoConversion;
    setConversionType(nuevaConversion);
    setreverso(!reverso);
    convertirValor(resultado, nuevaConversion);
    setvalorEntrada(resultado);
    setresultado(valorEntrada);
  };

  // Guardar la conversión en la lista y en localStorage
  const guardarConversion = () => {
    if (valorEntrada && resultado) {
      const nuevaConversion = {
        id: Date.now(),
        from: valorEntrada,
        to: resultado,
        type: tipoConversion,
      };
      const conversionesModificadas = [...conversionesGuardadas, nuevaConversion];
      setconversionesGuardadas(conversionesModificadas); // Actualizo el estado
      setvalorEntrada('');
      setresultado(''); 
    }
  };

  // Eliminar una conversión guardada y actualizar localStorage
  const borrarConversion = (id) => {
    const conversionesModificadas = conversionesGuardadas.filter((conversion) => conversion.id !== id);
    setconversionesGuardadas(conversionesModificadas);
    localStorage.setItem('conversionesGuardadas', JSON.stringify(conversionesModificadas)); // Actualizar el localStorage
  };

  return (
    <div className="converter-container">
      <h1>Unit Converter</h1>
      <div className="converter-box">
        <select
          value={tipoConversion}
          onChange={(e) => setConversionType(e.target.value)}
        >
          <option value="kmAmillas">Km &#10142; Millas</option>
          <option value="millasAkm">Millas &#10142; Km</option>
          <option value="piesAmetros">Pies &#10142; Metros</option>
          <option value="metrosApies">Metros &#10142; Pies</option>
          <option value="cmApulgadas">Cm &#10142; Pulgadas</option>
          <option value="pulgadasAcm">Pulgadas &#10142; Cm</option>
        </select>

        <input
          type="number"
          value={valorEntrada}
          onChange={cambioInput}
          placeholder="Introduce valor"
        />

        <span className="swap-icon" onClick={handleSwap}>
          ⇆
        </span>

        <span className={`resultado ${!resultado ? 'empty' : ''}`}>
          {!resultado ? <span className="placeholder">      </span> : resultado}
        </span>


        <button onClick={guardarConversion}>♥</button>
      </div>

      {/* Lista de conversiones guardadas */}
      <div className="conversiones-guardadas">
        {conversionesGuardadas.map((conv) => (
          <div key={conv.id} className="conversion-item">
            <span>
              {conv.from} ({conv.type.split('A')[0]}) a {conv.to} ({conv.type.split('A')[1]})
            </span>
            <button onClick={() => borrarConversion(conv.id)}>✖</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;




