import React from "react";

import Colarinho from '../AssetsIcons/typeColarinho.png';
import Duplo from '../AssetsIcons/duplo.png';
import Redondo from '../AssetsIcons/redondo.png';
import Chanfrado from '../AssetsIcons/chanfrado.png';
import Manga from '../AssetsIcons/manga.png';
import Bolso from '../AssetsIcons/bolso.png';
import Pala from '../AssetsIcons/pala.png';
import Frente from '../AssetsIcons/frente.png';
import Costa from '../AssetsIcons/costa.png';

import '../FichaProdução/producao.css';
import '../FichaProdução/print.css';

const Producao = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="containerTypeMeasure">
        <div className="screenTokenMeasure">
          <div className="_dispalayFlexHeader">
            <section className="sectionHeaderLeft">
              <p className="textColor">VENDEDOR:</p>
              <input type="text" className="seller  iFont" />
            </section>
            <h1 className="textToken">Ficha de Produção</h1>
            <section className="sectionHeaderRight">
              <p>N.</p>
              <input type="text" className="NumberToken iFont" />
            </section>
          </div>
          <div className="rowsOneMeasure">
            <section className="dataClient">
              <article className="ArtcleContactName">
                <div className="flexData _toMedidaPrint">
                  <p className="textColor textCpfMediaPrint">CPF:</p>
                  <input type="text" className="iClientProduction iFont" />
                </div>
                <div className="flexData">
                  <p className="_textColor">CONTATO:</p>
                  <input type="text" className="iClientProduction iFont" />
                </div>
              </article>
              <div className="flexData _marginTop">
                <p className="textColor" >CLIENTE:</p>
                <input type="text" className="iContactProduction iFont" />
              </div>
              <div className="flexData _marginTopDate">
                <p className="textColor">DATE:</p>
                <input type="text" className="iDateProduction iFont" />
                <div className="flexDataDelivery">
                  <p className="textColor iEntrega">ENTREGA:</p>
                  <input type="text" className="iEntregaProduction iFont" />
                </div>
              </div>
              <section className="measuresDatas _marginTop">
                <div className="_divMeasure">
                  <div>
                    <input type="text" className="iColarProducao iFild" />
                    <p className="pFild">Colar</p>
                  </div>
                  <div>
                    <input type="text" className="iPalaProducao iFild" />
                    <p className="pFild">Pala</p>
                  </div>
                  <div>
                    <input type="text" className="iMangaProducao iFild" />
                    <p className="pFild">Manga</p>
                  </div>
                  <div>
                    <input type="text" className="iToraxProducao iFild" />
                    <p className="pFild">Tórax</p>
                  </div>
                  <div>
                    <input type="text" className="iCinturaProducao iFild" />
                    <p className="pFild">Cintura</p>
                  </div>
                  <div>
                    <input type="text" className="iQuadrilProducao iFild" />
                    <p className="pFild">Quadril</p>
                  </div>
                  <div>
                    <input type="text" className="iCumprProducao iFild" />
                    <p className="pFild">Cumpr.</p>
                  </div>
                  <div>
                    <input type="text" className="iPunhoProducao iFild" />
                    <p className="pFild">Punho</p>
                  </div>
                </div>
              </section>
            </section>
            <div className="divCollumnTwoRight">
              <section className="collumnOneModel">
                <div className="centralized">
                  <div className="_displayBlock">
                    <img src={Colarinho} alt="" className="imgParis" />
                    <div className="_displayFlex _iParis">
                      <input type="radio" id="paris" className="iParis" />
                      <label className="textColor" htmlFor="">París</label>
                    </div>
                  </div>
                  <div className="_displayBlock">
                    <img src={Colarinho} alt="" className="imgParis" />
                    <div className="_displayFlex">
                      <input type="radio" id="paris" className="iParis" />
                      <label className="textColor" htmlFor="">Windsor</label>
                    </div>
                  </div>
                </div>
              </section>
              <div className="centralized">
                <div className="_displayBlock">
                  <img src={Colarinho} alt="" className="imgParis" />
                  <div className="_displayFlex">
                    <input type="radio" id="paris" className="iParis" />
                    <label className="textColor" htmlFor="">Italy</label>
                  </div>
                </div>
                <div className="_displayBlock">
                  <img src={Colarinho} alt="" className="imgParis" />
                  <div className="_displayFlex _iIngles">
                    <input type="radio" id="paris" className="iParis" />
                    <label className="textColor" htmlFor="">Inglês</label>
                  </div>
                </div>
              </div>
              <div className="centralized">
                <div className="_displayBlock">
                  <img src={Colarinho} alt="" className="imgParis" />
                  <div className="_displayFlex _iDouglas">
                    <input type="radio" id="paris" className="iParis" />
                    <label className="textColor" htmlFor="">Douglas</label>
                  </div>
                </div>
                <div className="_displayBlock">
                  <img src={Colarinho} alt="" className="imgParis" />
                  <div className="_displayFlex _BicoDow">
                    <input type="radio" id="paris" className="iParis" />
                    <label className="textColor" htmlFor="">Bico-Dow</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rowsTwoMeasure">
            <section className="optionLeft">
              <section className="meters">
                <p className="textColor textColorMediaPrint">Mtrs/Tec.</p>
                <input type="text" className="iMeters iFont" />
              </section>
              <section className="meters">
                <p className="textColor">Monograma</p>
                <input type="text" className="iMonograma  iFont" />
              </section>
            </section>


            <section className="optionRight">
              <section className="_imgPunho">
                <img src={Duplo} alt="" className="punhoDouble" />
                <section className="_typeRadio" >
                  <input type="radio" />
                  <label htmlFor="" className="textColor" >Duplo</label>
                </section>
              </section>
              <section className="_imgPunho">
                <img src={Redondo} alt="" className="punhoDouble" />
                <section className="_typeRadio" >
                  <input type="radio" />
                  <label htmlFor="" className="textColor" >Rdondo</label>
                </section>
              </section>
              <section className="_imgPunho">
                <img src={Chanfrado} alt="" className="punhoDouble" />
                <section className="_typeRadio" >
                  <input type="radio" />
                  <label htmlFor="" className="textColor" >Chanfrado</label>
                </section>
              </section>


            </section>
          </div>
          <section className="rowsThreeMeasure">
            <section className="itemRowsLeft ">
              <div className="typeOfShirts">
                <div className="moldeLeft">
                  <img className="imgManga" src={Manga} alt="Manga" />
                </div>
                <section className="typeBolso">
                  <img className="imgTypeBolso" src={Bolso} alt="Bolso" />
                  <img className="imgTypeBolso" src={Pala} alt="Pala" />
                </section>
                <section className="FrenteCosta">
                  <img className="imgMolde" src={Frente} alt="Frente" />
                  <img className="imgMolde" src={Costa} alt="Costa" />
                </section>
              </div>
            </section>
            <section className="typeFormRight">
              <div className="displayBlock">
                <section className="firstRowsOptions" >
                  <article className="ArticleGap">
                    <input type="radio" />
                    <label htmlFor="" className="textColor" >Frente Lisa</label>
                  </article>
                  <article className="ArticleGap">
                    <input type="radio" />
                    <label htmlFor="" className="textColor" >Frente Embutida</label>
                  </article>
                  <article className="ArticleGap">
                    <input type="radio" />
                    <label htmlFor="" className="textColor" >Frente Macho</label>
                  </article>
                  <article className="ArticleGap">
                    <input type="radio" />
                    <label htmlFor="" className="textColor" >WA</label>
                  </article>
                  <article className="ArticleGap">
                    <input type="radio" />
                    <label htmlFor="" className="textColor" >C/Barbatana</label>
                  </article>
                </section>
                <header className="Message">
                  <form type="text" className="iArea" />
                </header>
              </div>
            </section>
          </section>
          <div className="areaBottom">
            <button className="screenClose typeToButton">Sair</button>
            <button className="sendForm typeToButton">Enviar</button>
            <button className="printScreen typeToButton" onClick={handlePrint}>Imprimir</button>

          </div>




        </div >
      </div >
    </>
  )
}
export default Producao