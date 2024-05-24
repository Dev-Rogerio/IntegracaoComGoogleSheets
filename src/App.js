import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Formulario from "../src/Components/Formulario/formulario.js"

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Formulario />} />
        </Routes>

      </Router>
    </React.Fragment>

  );
}

export default App;
