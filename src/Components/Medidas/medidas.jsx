import React from "react";

import '../Medidas/medidas.css';
import Paris from '../AssetsIcons/paris.png';
import Italy from '../AssetsIcons/italy.png';
import Ingles from '../AssetsIcons/ingles.png';
import BicoDown from '../AssetsIcons/bico.png';
import Windsor from '../AssetsIcons/windsor.png';
import Douglas from '../AssetsIcons/douglas.png';
import Duplo from '../AssetsIcons/duplo.png';
import Redondo from '../AssetsIcons/redondo.png';
import Chanfrado from '../AssetsIcons/chanfrado.png';
import Manga from '../AssetsIcons/manga.png';
import Bolso from '../AssetsIcons/bolso.png';
import Pala from '../AssetsIcons/pala.png';
import Frente from '../AssetsIcons/frente.png';
import Costa from '../AssetsIcons/costa.png';
import FranceBotao from '../AssetsIcons/francesBotao.png';

const Medidas = () => {

  return (
    <>
      <div className="containerMeasure">
        <div className="collunTokenMeasure">
          <h1 className="productionToken">Ficha de Produção</h1>
          <div className="clientData">
            <h3 className="claintMeasure">Cliente</h3>
            <div className="scribe-Data">
              <p>CPF</p>
              <p>Nome</p>
              <p>Pedido</p>
              <p>Entrega</p>
            </div>
            <div className="iData">
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
            <div className="measureData">
              <div className="iMeasure">
                <h3 className="medidas">Medidas</h3>
                <input type="text" className="colar" />
                <p className="colar" >Colar</p>
                <input type="text" className="pala" />
                <p className="pala">Pala</p>
                <input type="text" className="manga" />
                <p className="manga">Manga</p>
                <input type="text" className="torax" />
                <p className="torax">Tórax</p>
                <input type="text" className="cintura" />
                <p className="cintura">Cintura</p>
                <input type="text" className="quadril" />
                <p className="quadril">Quadril</p>
                <input type="text" className="cumprimento" />
                <p className="cumprimento">Cumpr.</p>
                <input type="text" className="punho" />
                <p className="punho">Punho</p>
              </div>
            </div>
            <div className="typeColar">
              <h3 className="scribeParis">Modelos de Colarinho</h3>
              <form className="modelColar">
                <div className="divParisMeasure">
                  <img src={Paris} alt="" className="imgParis" />
                  <div className="radioParis">
                    <input type="radio" id="paris" className="ColumnOneMeasure" />
                    <label htmlFor="paris">París</label>
                  </div>
                </div>

                <div className="divParisMeasure">
                  <img src={Italy} alt="" className="imgParis" />
                  <div className="radioParis">
                    <input type="radio" id="paris" className="ColumnOneMeasure" />
                    <label htmlFor="paris">Itáliano</label>
                  </div>
                </div>

                <div className="divParisMeasure">
                  <img src={Ingles} alt="" className="imgParis" />
                  <div className="radioParis">
                    <input type="radio" id="paris" className="ColumnOneMeasure" />
                    <label htmlFor="paris">Inglês</label>
                  </div>
                </div>

                <div className="divParisMeasure">
                  <img src={BicoDown} alt="" className="imgParis" />
                  <div className="radioParis">
                    <input type="radio" id="paris" className="ColumnOneMeasure" />
                    <label htmlFor="paris">Bico-Down</label>
                  </div>
                </div>

                <div className="divParisMeasure">
                  <img src={Windsor} alt="" className="imgParis" />
                  <div className="radioParis">
                    <input type="radio" id="paris" className="ColumnOneMeasure" />
                    <label htmlFor="paris">Windsor</label>
                  </div>
                </div>

                <div className="divParisMeasure">
                  <img src={Douglas} alt="" className="imgParis" />
                  <div className="radioParis">
                    <input type="radio" id="paris" className="ColumnOneMeasure" />
                    <label htmlFor="paris">Douglas</label>
                  </div>
                </div>
              </form>
            </div>


            <div className="typePunho">
              <h3 className="scribeParis">Modelos de Punho</h3>
              <form className="modelPunho">
                <div className="divParisMeasure">
                  <img src={Duplo} alt="" className="imgParis" />
                  <div className="radioParis">
                    <input type="radio" id="paris" className="ColumnOneMeasure" />
                    <label htmlFor="paris">Duplo</label>
                  </div>
                </div>

                <div className="divParisMeasure">
                  <img src={Redondo} alt="" className="imgParis" />
                  <div className="radioParis">
                    <input type="radio" id="paris" className="ColumnOneMeasure" />
                    <label htmlFor="paris">Redondo</label>
                  </div>
                </div>

                <div className="divParisMeasure">
                  <img src={Chanfrado} alt="" className="imgParis" />
                  <div className="radioParis">
                    <input type="radio" id="paris" className="ColumnOneMeasure" />
                    <label htmlFor="paris">Chanfrado</label>
                  </div>
                </div>

                <div className="divParisMeasure">
                  <img src={Duplo} alt="" className="imgParis" />
                  <div className="radioParis">
                    <input type="radio" id="paris" className="ColumnOneMeasure" />
                    <label htmlFor="paris">Frances S/botão</label>
                  </div>
                </div>

                <div className="divParisMeasure">
                  <img src={FranceBotao} alt="" className="imgParis" />
                  <div className="radioParis">
                    <input type="radio" id="paris" className="ColumnOneMeasure" />
                    <label htmlFor="paris">Frances C/botão</label>
                  </div>
                </div>
              </form>
            </div>



            <section className="TypeCamisa">
              <h3 className="scribeParis">Modelo da Camisa</h3>

              <section className="containerMoldeMeasure">
                <div className="leftMolde">
                  <img className="imgMang" src={Manga} alt="" />
                  <section className="itemBolso">
                    <img className="imgbolso" src={Bolso} alt="" />
                    <img className="imgbolso" src={Pala} alt="" />
                  </section>
                  <section className="itemFreteCosta">
                    <img className="imgFrente" src={Frente} alt="" />
                    <img className="imgFrente" src={Costa} alt="" />

                  </section>
                </div >

                <section className="sectionScribe">
                  <section className="scribeForObs">a</section>


                  B</section>
              </section>
            </section >






            <span className="spanMangaMeasure"> </span>


            <span className="BolsoPalaMeasure"> </span>
            {/* */}

            {/* <div className="gridLeftMeasure">  */}

            {/* <div className="itemA">
              <div className="itemPalaBolso">
                <div className="itemB">D</div>
              </div> */}
            {/* </div> */}




          </div >
        </div >
      </div >
    </>
  )
}
export default Medidas