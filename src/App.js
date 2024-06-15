import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Formulario from "../src/Components/Formulario/formulario.js";
import Test from "../src/Components/Formulario/Teste/test.js";
import Modal from "../src/Components/Modal/modal.jsx";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Formulario />} />
          <Route path="/test" element={<Test />} />
          <Route path="/modal" element={<Modal />} />
        </Routes>
      </Router>
    </React.Fragment>

  );
}

export default App;
