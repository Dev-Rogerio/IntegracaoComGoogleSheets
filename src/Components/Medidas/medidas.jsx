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
              <section className="sectionId itemData">
                <p className="textClient" >ID</p>
                <input className="inputClient" type="text" />
              </section>
              <sectio className="sectionCpf itemData">
                <p className="textClient" >CPF</p>
                <input className="inputClient" type="text" />
              </sectio>
              <section className="sectionNome itemData">
                <p className="textClient" >Nome</p>
                <input className="inputClient" type="text" />
              </section>
              <section className="sectionData itemData">
                <p className="textClient" >Data</p>
                <input className="inputClient" type="text" />
              </section>
              <sectio className="sectonEntrega itemData">
                <p className="textClient" >Entrega</p>
                <input className="inputClient" type="text" />
              </sectio>
            </div>
            <div className="measureData">
              <div className="containerColumnGray">
                <h3 className="ScribeToText">Medidas</h3>
                <div className="containerColumnChocolate">
                  <section className="sectionColar itemMeasure">
                    <input type="text" className="colar iMeasure" />
                    <p className="colar textMeasure" >Colar</p>
                  </section>
                  <section className="Pala itemMeasure">
                    <input type="text" className="pala iMeasure" />
                    <p className="pala textMeasure">Pala</p>
                  </section>
                  <section className="manga itemMeasure">
                    <input type="text" className="manga iMeasure" />
                    <p className="manga textMeasure">Manga</p>
                  </section>
                  <section className="torax itemMeasure">
                    <input type="text" className="torax iMeasure" />
                    <p className="torax textMeasure">Tórax</p>
                  </section>
                  <section className="cintura itemMeasure">
                    <input type="text" className="cintura iMeasure" />
                    <p className="cintura textMeasure">Cintura</p>
                  </section>
                  <section className="quadril itemMeasure">
                    <input type="text" className="quadril iMeasure" />
                    <p className="quadril textMeasure">Quadril</p>
                  </section>
                  <section className="cumprimento itemMeasure">
                    <input type="text" className="cumprimento iMeasure" />
                    <p className="cumprimento textMeasure">Cumpr.</p>
                  </section>
                  <section className="punho itemMeasure">
                    <input type="text" className="punho iMeasure" />
                    <p className="punho textMeasure">Punho</p>
                  </section>
                  <section className="biceps itemMeasure">
                    <input type="text" className="biceps iMeasure" />
                    <p className="biceps textMeasure">Biceps</p>
                  </section>
                  <section className="braco itemMeasure">
                    <input type="text" className="braco iMeasure" />
                    <p className="braco textMeasure">Braço</p>
                  </section>
                </div>
              </div>
            </div>


            <div className="ColarinhoData">
              <div className="containerColumnGray">
                <h3 className="ScribeToText">Modelos de Colarinho</h3>
                <form className="containerColumnChocolate formChocolate">

                  <section className="sectionTypeColarinho">
                    <img src={Colarinho} alt="" className="imgColarinho" />
                    <div className="radioParis">
                      <input type="radio" id="paris" className="ColumnOneMeasure" />
                      <label className="textMeasure" htmlFor="paris">París</label>
                    </div>
                  </section>

                  <section className="sectionTypeColarinho">
                    <img src={Colarinho} alt="" className="imgColarinho" />
                    <div className="radioParis">
                      <input type="radio" id="paris" className="ColumnOneMeasure" />
                      <label className="textMeasure" htmlFor="paris">Itáliano</label>
                    </div>
                  </section>

                  <div className="sectionTypeColarinho">
                    <img src={Colarinho} alt="" className="imgColarinho" />
                    <div className="radioParis">
                      <input type="radio" id="paris" className="ColumnOneMeasure" />
                      <label className="textMeasure" htmlFor="paris">Inglês</label>
                    </div>
                  </div>


                  <div className="sectionTypeColarinho">
                    <img src={Colarinho} alt="" className="imgColarinho" />
                    <div className="radioParis">
                      <input type="radio" id="paris" className="ColumnOneMeasure" />
                      <label className="textMeasure" htmlFor="paris">Bico-Down</label>
                    </div>
                  </div>
                  <div className="sectionTypeColarinho">
                    <img src={Colarinho} alt="" className="imgColarinho" />
                    <div className="radioParis">
                      <input type="radio" id="paris" className="ColumnOneMeasure" />
                      <label className="textMeasure" htmlFor="paris">Windsor</label>
                    </div>
                  </div>

                  <div className="sectionTypeColarinho">
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
                      <textarea name="" id="">M</textarea>
                    </form>
                  </section>
                </section>
              </section>
              <div className="containerColumnGray itemButton">
                <button>Enviar</button>
                <button>Limpar</button>
              </div>
            </section >
          </div >
        </div >

      </div >
    </>
  )
}
export default Medidas