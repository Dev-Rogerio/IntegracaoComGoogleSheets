import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Formulario from "../src/Components/Formulario/formulario.js";
import Test from "../src/Components/Teste/test.js";
import Modal from "../src/Components/Modal/modal.jsx";
import Menu from "../src/Components/Menu/menu.jsx";
import Tabela from '../src/Components/Formulario/Tabela/tabela.jsx';
import Medidas from '../src/Components/Medidas/medidas.jsx';
import Producao from './Components/FichaProducao/producao.js';
import ClientTabela from '../src/Components/Formulario/clientTabela.jsx';
import ModalCadCli from '../src/Components/Formulario/ModalClientTable/modal.jsx'
import ModalEdite from "./Components/Formulario/ModalEdite/modalEdite.jsx";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/test" element={<Test />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/tabela" element={<Tabela />} />
          <Route path="/medidas" element={<Medidas />} />
          <Route path="/producao" element={<Producao />} />
          <Route path="/clientTable" element={<ClientTabela />} />
          <Route path="/modalcadcli" element={<ModalCadCli />} />
          <Route path="/modaledite" element={<ModalEdite />} />

        </Routes>
      </Router>
    </React.Fragment>
  );
}
export default App;
