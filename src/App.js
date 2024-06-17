import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Formulario from "../src/Components/Formulario/formulario.js";
import Test from "../src/Components/Teste/test.js";
import Modal from "../src/Components/Modal/modal.jsx";
import Menu from "../src/Components/Menu/menu.jsx";

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
        </Routes>
      </Router>
    </React.Fragment>

  );
}

export default App;
