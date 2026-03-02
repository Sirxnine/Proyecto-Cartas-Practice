import { useState,  } from 'react';
import { cartasEjemplo } from './componentes/CartasIniciales';
import type { Carta } from './types/index';
import { Route, Routes } from 'react-router';
import FormularioCarta from './componentes/Form';
import Home from './pages/Home';

function App() {
  const [cartas, setCartas] = useState<Carta[]>(cartasEjemplo);

    const añadirCarta = (nueva: Carta) => {
    setCartas([nueva, ...cartas]);
  };

  const eliminarCarta = (id: number) => {
  setCartas(cartas.filter(c => c.id !== id));
};

  return (
      <Routes>
      <Route path='/' element={<Home añadirCarta={añadirCarta} eliminarCarta={eliminarCarta} cartas={cartas} />} />
      <Route path='/Form' element={<FormularioCarta onCrear={añadirCarta} />} />
    </Routes>

  );
}

export default App;