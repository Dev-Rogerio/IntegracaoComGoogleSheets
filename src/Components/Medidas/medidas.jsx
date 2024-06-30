import React from "react";

import '../Medidas/medidas.css';
// import Paris from '../AssetsIcons/paris.png';
// import Italy from '../AssetsIcons/italy.png';
// import Ingles from '../AssetsIcons/ingles.png';
// import BicoDown from '../AssetsIcons/bico.png';
// import Windsor from '../AssetsIcons/windsor.png';
// import Douglas from '../AssetsIcons/douglas.png';
import Colarinho from '../AssetsIcons/typeColarinho.png';
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
          <div className="containerColumnGray">
            <h3 className="ScribeToText">Cliente</h3>
            <div className="containerColumnChocolate">
              <section className="sectionId displayBlock">
                <p className="textMeasure" >ID</p>
                <input className="inputClient" type="text" />
              </section>
              <section className="sectionCpf displayBlock">
                <p className="textMeasure" >Cpf</p>
                <input className="inputClient" type="text" />
              </section>
              <section className="sectionNome displayBlock">
                <p className="textMeasure" >Nome</p>
                <input className="inputClient" type="text" />
              </section>
              <section className="sectionData displayBlock">
                <p className="textMeasure" >Data</p>
                <input className="inputClient" type="text" />
              </section>
              <sectio className="sectonEntrega displayBlock">
                <p className="textMeasure" >Entrega</p>
                <input className="inputClient" type="text" />
              </sectio>
            </div>
            <div className="measureData">
              <div className="containerColumnGray">
                <h3 className="ScribeToText">Medidas</h3>
                <div className="containerColumnChocolate">
                  <section className="displayBlock">
                    <input type="text" className="typeInput" />
                    <p className="textMeasure" >Colar</p>
                  </section>
                  <section className="displayBlock">
                    <input type="text" className="typeInput" />
                    <p className="pala textMeasure">Pala</p>
                  </section>
                  <section className="displayBlock">
                    <input type="text" className="typeInput" />
                    <p className="textMeasure">Manga</p>
                  </section>
                  <section className="displayBlock">
                    <input type="text" className="typeInput" />
                    <p className="textMeasure">Tórax</p>
                  </section>
                  <section className="displayBlock">
                    <input type="text" className="typeInput" />
                    <p className="textMeasure">Cintura</p>
                  </section>
                  <section className="displayBlock">
                    <input type="text" className="typeInput" />
                    <p className="textMeasure">Quadril</p>
                  </section>
                  <section className="displayBlock">
                    <input type="text" className="typeInput" />
                    <p className="textMeasure">Cumpr.</p>
                  </section>
                  <section className="displayBlock">
                    <input type="text" className="typeInput" />
                    <p className="textMeasure">Punho</p>
                  </section>
                  <section className="displayBlock">
                    <input type="text" className="typeInput" />
                    <p className="textMeasure">Biceps</p>
                  </section>
                  <section className="displayBlock">
                    <input type="text" className="typeInput" />
                    <p className="textMeasure">Braço</p>
                  </section>
                </div>
              </div>
            </div>


            <div className="ColarinhoData">
              <div className="containerColumnGray">
                <h3 className="ScribeToText">Modelos de Colarinho</h3>
                <form className="containerColumnChocolate formChocolate">

                  <section className="displayBlock">
                    <img src={Colarinho} alt="" className="imgColarinho" />
                    <div className="radioParis">
                      <input type="radio" id="paris" className="ColumnOneMeasure" />
                      <label className="textMeasure" htmlFor="paris">París</label>
                    </div>
                  </section>

                  <section className="displayBlock">
                    <img src={Colarinho} alt="" className="imgColarinho" />
                    <div className="radioParis">
                      <input type="radio" id="paris" className="ColumnOneMeasure" />
                      <label className="textMeasure" htmlFor="paris">Itáliano</label>
                    </div>
                  </section>

                  <div className="displayBlock">
                    <img src={Colarinho} alt="" className="imgColarinho" />
                    <div className="radioParis">
                      <input type="radio" id="paris" className="ColumnOneMeasure" />
                      <label className="textMeasure" htmlFor="paris">Inglês</label>
                    </div>
                  </div>


                  <div className="displayBlock">
                    <img src={Colarinho} alt="" className="imgColarinho" />
                    <div className="radioParis">
                      <input type="radio" id="paris" className="ColumnOneMeasure" />
                      <label className="textMeasure" htmlFor="paris">Bico-Down</label>
                    </div>
                  </div>
                  <div className="displayBlock">
                    <img src={Colarinho} alt="" className="imgColarinho" />
                    <div className="radioParis">
                      <input type="radio" id="paris" className="ColumnOneMeasure" />
                      <label className="textMeasure" htmlFor="paris">Windsor</label>
                    </div>
                  </div>

                  <div className="displayBlock">
                    <img src={Colarinho} alt="" className="imgColarinho" />
                    <div className="radioParis">
                      <input type="radio" id="paris" className="ColumnOneMeasure" />
                      <label className="textMeasure" htmlFor="paris">Douglas</label>
                    </div>
                  </div>

                </form>
              </div>
            </div>
            <div className="containerColumnGray">
              <h3 className="ScribeToText">Modelos de Punho</h3>
              <form className="containerColumnChocolate">
                <div className="divParisMeasure">
                  <img src={Duplo} alt="" className="imgSizePunho" />
                  <div className="radioParis">
                    <input type="radio" id="paris" className="ColumnOneMeasure" />
                    <label className="textMeasure" htmlFor="paris">Duplo</label>
                  </div>
                </div>
                <div className="divParisMeasure">
                  <img src={Redondo} alt="" className="imgSizePunho" />
                  <div className="radioParis">
                    <input type="radio" id="paris" className="ColumnOneMeasure" />
                    <label className="textMeasure" htmlFor="paris">Redondo</label>
                  </div>
                </div>
                <div className="divParisMeasure">
                  <img src={Chanfrado} alt="" className="imgSizePunho" />
                  <div className="radioParis">
                    <input type="radio" id="paris" className="ColumnOneMeasure" />
                    <label className="textMeasure" htmlFor="paris">Chanfrado</label>
                  </div>
                </div>
                <div className="divParisMeasure">
                  <img src={Duplo} alt="" className="imgSizePunho" />
                  <div className="radioParis">
                    <input type="radio" id="paris" className="ColumnOneMeasure" />
                    <label className="textMeasure" htmlFor="paris">Frances</label>
                  </div>
                </div>
                <div className="divParisMeasure">
                  <img src={FranceBotao} alt="" className="imgSizePunho" />
                  <div className="radioParis">
                    <input type="radio" id="paris" className="ColumnOneMeasure" />
                    <label className="textMeasure" htmlFor="paris">Frances C/botão</label>
                  </div>
                </div>

              </form>
            </div>
            <div className="containerColumnGray">
              <h3 className="ScribeToText">Especificações</h3>
              <div className="containerColumnChocolate formChocolate">
                <section className="displayBlock">
                  <label className="textMeasure" htmlFor=""> Mtrs/tecido</label>
                  <input type="text" className="displayBlock typeInput" />
                </section>

                <section className="displayBlock">
                  <label htmlFor="" className="textMeasure">Monograma:</label>
                  <input type="text" className="displayBlock typeInput iMonograma" />
                </section>

                <section>
                  <label htmlFor="" className="textMeasure">Bolso</label>
                  <input type="radio" className="displayBlock" />
                </section>
                <section>
                  <label htmlFor="" className="textMeasure">Sem/Bolso</label>
                  <input type="radio" className="displayBlock" />
                </section>
                <section>
                  <label htmlFor="" className="textMeasure">WA</label>
                  <input type="radio" className="displayBlock" />
                </section>
                <section>
                  <label htmlFor="" className="textMeasure">Const. Normal</label>
                  <input type="radio" className="displayBlock" />
                </section>
                <section>
                  <label htmlFor="" className="textMeasure">Const. Beirada</label>
                  <input type="radio" className="displayBlock" />
                </section>
                <section>
                  <label htmlFor="" className="textMeasure">Frente Lisa</label>
                  <input type="radio" className="displayBlock" />
                </section>





              </div>

            </div>
            <section className="containerColumnGray">
              <h3 className="ScribeToText">Modelo da Camisa</h3>
              <section className="containerMoldeMeasure">
                <div className="leftMolde">
                  <section className="itemSectionShirt" >
                    <img className="imgMang" src={Manga} alt="" />
                  </section>

                  <section className="itemSectionShirt" >
                    <section className="itemBolso">
                      <img className="imgbolso" src={Bolso} alt="" />
                      <img className="imgbolso" src={Pala} alt="" />
                    </section>
                  </section>

                  <section className="itemSectionShirt" >
                    <section className="itemFreteCosta">
                      <img className="imgFrente" src={Frente} alt="" />
                      <img className="imgFrente" src={Costa} alt="" />
                    </section>
                  </section>
                </div >

                <div>

                </div>
                <section className="itemSectionScribe">
                  <section className="scribeToObs">
                    <form action="">
                      <textarea className="messageTextarea"></textarea>
                    </form>
                  </section>
                </section>
              </section>
              <div className="containerColumnGray itemButton">
                <button className="buttonEnviar">Enviar</button>
                <button className="buttonLimpar">Limpar</button>
              </div>
            </section >
          </div >
        </div >

      </div >
    </>
  )
}
export default Medidas