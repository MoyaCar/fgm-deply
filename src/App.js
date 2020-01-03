import React from 'react';

import Navbar from './componentes/Navbar/Navbar';
import Empresa from './componentes/Empresa/Empresa';
import Servicios from './componentes/Servicios/Servicios';
import Politica from './componentes/Politica/Politica';

function App() {
  return (
    <div>
      <Navbar />
      <Empresa />
      <Servicios />
      <Politica />
    </div>
  );
}

export default App;