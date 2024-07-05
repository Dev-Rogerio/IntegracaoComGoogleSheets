import React from "react";

import '../Medidas/medidas.css';
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
import html2canvas from "html2canvas";

const Medidas = () => {

  const handlePrint = () => {
    window.print();
  };

  const handlePrintAndSendEmail = async () => {
    const exampleImgData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACt...'

    const exampleData = {
      email: 'rogerioalmeida.tech@gmail.com',
      subject: 'Ficha de Produção - Exemplo',
      text: 'Aqui estão os detalhes da ficha de produção (exemplo estático)',
      image: exampleImgData
    };
    const element = document.querySelector('.containerMeasure');
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: 'rogerioalmeida.tech@gmail.com',
          subject: 'Ficha de Produção',
          text: 'Aqui estão os detalhes da ficha de produção',
          image: imgData
        })
      });
      if (response.ok) {
        alert('Email enviado com sucesso')
        window.print();
      } else {
        alert('Falha ao enviar o email');
      }
    } catch (error) {
      console.error('erro:', error)
      alert('Erro ao enviar o email');
    }
  }

  // const handleSave = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3001/send-email', {
  //       method: 'POST',
  //       headres: {
  //         'Content-type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         email: 'roger.ngt@gmail.com',
  //         subject: 'Ficha de Produção',
  //         text: 'Aqui estão os detalhes da ficha de produção.'
  //       })
  //     });
  //     if (response.ok) {
  //       alert('Email enviado com sucesso');
  //     } else {
  //       alert('Falha ao enviar o email.');
  //     }
  //   } catch (error) {
  //     console.error('erro:', error);
  //     alert('Erro ao enviar o email.');
  //   }
  // }

  return (
    <>
      <div className="containerMeasure">
        <div className="collunTokenMeasure">
          <h1 className="productionToken">Ficha de Produção</h1>
          <div className="measureData">
            <div className="containerColumnGrayClient">
              <h3 className="ScribeToText">Cliente</h3>
              <div className="containerColumnChocolateClient">
                <section className="sectionId displayBlock">
                  <p className="textMeasure" >N.</p>
                  <input className="inputClient itemId" type="text" />
                </section>
                <section className="sectorCpf displayBlock">
                  <p className="textMeasure" >Cpf</p>
                  <input className="inputClient itemCpf" type="text" />
                </section>
                <section className="sectionNome displayBlock">
                  <p className="textMeasure" >Nome</p>
                  <input className="inputClient itemNome" type="text" />
                </section>
                <section className="sectionData displayBlock">
                  <p className="textMeasure" >Pedido</p>
                  <input className="inputClient itemData" type="text" />
                </section>
                <section className="sectionEntrega displayBlock">
                  <p className="textMeasure" >Entrega</p>
                  <input className="inputClient itemEntrega" type="text" />
                </section>
              </div>
            </div>
            <div className="measureData">
              <div className="containerColumnGrayMedidas">
                <h3 className="ScribeToText">Medidas</h3>
                <div className="containerColumnChocolateMedidas">
                  <section className="displayBlockMedidas">
                    <input type="text" className="inputMedidas" />
                    <p className="textMeasure" >Colar</p>
                  </section>
                  <section className="displayBlockMedidas">
                    <input type="text" className="inputMedidas" />
                    <p className="pala textMeasure">Pala</p>
                  </section>
                  <section className="displayBlockMedidas">
                    <input type="text" className="inputMedidas" />
                    <p className="textMeasure">Manga</p>
                  </section>
                  <section className="displayBlockMedidas">
                    <input type="text" className="inputMedidas" />
                    <p className="textMeasure">Biceps</p>
                  </section>
                  <section className="displayBlockMedidas">
                    <input type="text" className="inputMedidas" />
                    <p className="textMeasure">Braço</p>
                  </section>
                  <section className="displayBlockMedidas">
                    <input type="text" className="inputMedidas" />
                    <p className="textMeasure">Tórax</p>
                  </section>
                  <section className="displayBlockMedidas">
                    <input type="text" className="inputMedidas" />
                    <p className="textMeasure">Cintura</p>
                  </section>
                  <section className="displayBlockMedidas">
                    <input type="text" className="inputMedidas" />
                    <p className="textMeasure">Quadril</p>
                  </section>
                  <section className="displayBlockMedidas">
                    <input type="text" className="inputMedidas" />
                    <p className="textMeasure">Cumprim.</p>
                  </section>
                  <section className="displayBlockMedidas">
                    <input type="text" className="inputMedidas" />
                    <p className="textMeasure">Punho</p>
                  </section>

                </div>
              </div>
            </div>


            <div className="ColarinhoData">
              <div className="containerColumnGrayColar">
                <h3 className="ScribeToText">Modelos de Colarinho</h3>
                <form className="containerColumnChocolateColar">

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
            <div className="containerColumnGrayPunho">
              <h3 className="ScribeToText">Modelos de Punho</h3>
              <form className="containerColumnChocolatePunho">
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
            <div className="containerColumnGrayOpcoes ">
              <h3 className="ScribeToText">Opções</h3>
              <div className="containerColumnChocolateOpcoes">
                <section className="sectionMetragem">
                  <input type="text" className="iMetragem" />
                  <label className="textMeasure" htmlFor=""> M/tecido</label>
                </section>
                <section className="sectionMOnograma">
                  <input type="text" className="iMonograma" />
                  <label htmlFor="" className="textMeasure">Monograma:</label>
                </section>

                <section>
                  <label htmlFor="" className="textMeasure">Bolso</label>
                  <input type="radio" className="displayBlock" />
                </section>

                <section>
                  <label htmlFor="" className="textMeasure">C/Normal</label>
                  <input type="radio" className="displayBlock" />
                </section>

                <section>
                  <label htmlFor="" className="textMeasure">C/Beirada</label>
                  <input type="radio" className="displayBlock" />
                </section>

                <section>
                  <label htmlFor="" className="textMeasure">F/Lisa</label>
                  <input type="radio" className="displayBlock" />
                </section>

                <section>
                  <label htmlFor="" className="textMeasure">F/Macho</label>
                  <input type="radio" className="displayBlock" />
                </section>

                <section>
                  <label htmlFor="" className="textMeasure">F/Emb.</label>
                  <input type="radio" className="displayBlock" />
                </section>


                <section>
                  <label htmlFor="" className="textMeasure">WA</label>
                  <input type="radio" className="displayBlock" />
                </section>

                <section>
                  <label htmlFor="" className="textMeasure">F/Barbatana</label>
                  <input type="radio" className="displayBlock" />
                </section>
              </div>

            </div>
            <section className="containerColumnGray">
              <h3 className="ScribeToText">Modelo da Camisa</h3>
              <section className="containerMoldeMeasure">
                <div className="leftMolde">
                  <section className="itemSectionShirt" >
                    <img className="imgMang" src={Manga} alt="Manga" />
                  </section>

                  <section className="itemSectionShirt" >
                    <section className="itemBolso">
                      <img className="imgbolso" src={Bolso} alt="Bolso" />
                      <img className="imgbolso" src={Pala} alt="Pala" />
                    </section>
                  </section>

                  <section className="itemSectionShirt" >
                    <section className="itemFreteCosta">
                      <img className="imgFrente" src={Frente} alt="Frente" />
                      <img className="imgFrente" src={Costa} alt="Costa" />
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
                <button className="buttonSalvar" onClick={handlePrintAndSendEmail}>Salvar</button>
                <button className="buttonExcluir">Excluir</button>
                <button className="buttonLimpar" onClick={handlePrint}>Imprimir</button>
              </div>
            </section >
          </div >
        </div >

      </div >
    </>
  )
}
export default Medidas