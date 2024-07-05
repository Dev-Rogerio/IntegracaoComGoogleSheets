import React from "react";
import { useNavigate } from 'react-router-dom';
import FormularioIcon from "../AssetsIcons/formulario.png"
import Formulario from "../AssetsIcons/formulario.png";
import Cadastro from "../AssetsIcons/cadastro.png";
import Medida from '../AssetsIcons/medida.png';
import Site from '../AssetsIcons/site.png';
import "../Menu/menu.css";

const Menu = () => {
  const navigate = useNavigate(); // Hook para navegação
  const redirectToFormulario = () => window.open('https://docs.google.com/spreadsheets/d/1lW0Umi_ctxjxSQgSP2PaCJlcVwmfLJSO2ybCoDm_Htk/edit?gid=0#gid=0');
  const redirectToMeasure = () => navigate('/producao')

  return (
    <>
      <div className="MenuScreen">
        <div className="containnerMenu">
          <div className="itemCadastroMenu centerMenu" onClick={() => navigate('/formulario')}>
            <img className="imgMenu" src={Cadastro} alt="Vendas" />
            <p className="textP">Cadastro</p>
          </div>
          <div className="itemFormularioMenu centerMenu" onClick={redirectToFormulario}>
            <img className="imgMenu" src={FormularioIcon} alt="Formulario" />
            <p className="textP">Formulário</p>
          </div>
          <div className="itemMeasureMenu centerMenu" onClick={redirectToMeasure}>
            <img className="imgMenu" src={Medida} alt="Medida" />
            <p className="textP">Medidas</p>
          </div>
          <div className="itemOnLineMenu centerMenu">
            <img className="imgMenu" src={Site} alt="Site" />
            <p className="textP">Site</p>
          </div>
        </div>
      </div >
    </>
  )
}
export default Menu