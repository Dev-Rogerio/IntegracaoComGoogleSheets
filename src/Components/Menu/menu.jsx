import React from "react";
import { useNavigate } from 'react-router-dom';
import FormularioIcon from "../AssetsIcons/formulario.png"
import Formulario from "../AssetsIcons/formulario.png";
import Vendas from "../AssetsIcons/vendas.png";
import Medida from '../AssetsIcons/medida.png';
import Site from '../AssetsIcons/site.png';
import "../Menu/menu.css";

const Menu = () => {
  const navigate = useNavigate(); // Hook para navegação
  const redirectToFormulario = () => navigate('/formulario');

  return (
    <>
      <div className="MenuScreen">
        <div className="screenMenu">

          <div className="rowsOneMenu">
            <div className="formMenu" onClick={redirectToFormulario}>
              <img className="imgMenu" src={Vendas}
                alt="Vendas" />
              <p className="textP">Cadastro</p>
            </div>
            <div className="formMenu">
              <img className="imgMenu" src={FormularioIcon} alt="Formulário" />
              <p className="textP">Formulário</p>
            </div>
          </div>

          <div className="rowsTwoMenu">
            <div className="formMenu">
              <img className="imgMenu" src={Medida} alt="" />
              <p className="textP">Medidas</p>
            </div>
            <div className="formMenu">
              <img className="imgMenu" src={Site} alt="" />
              <p className="textP">Site</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default Menu