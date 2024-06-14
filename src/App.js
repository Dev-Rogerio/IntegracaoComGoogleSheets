import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Formulario from "../src/Components/Formulario/formulario.js";
import Test from "../src/Components/Formulario/Teste/test.js";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Formulario />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </React.Fragment>

  );
}

export default App;
