import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import InputMask from "react-input-mask";
import Colarinho from '../AssetsIcons/typeColarinho.png';
import Duplo from '../AssetsIcons/duplo.png';
import Redondo from '../AssetsIcons/redondo.png';
import Chanfrado from '../AssetsIcons/chanfrado.png';
import Manga from '../AssetsIcons/manga.png';
import Bolso from '../AssetsIcons/bolso.png';
import Pala from '../AssetsIcons/pala.png';
import Frente from '../AssetsIcons/frente.png';
import Costa from '../AssetsIcons/costa.png';
import Site from '../AssetsIcons/site.png';
import './producao.css';
import './print.css';
import MyModal from "./modal";


// Função para calcular a data de entrega
function calculateDeliveryDate(date) {
  if (!date) return '';
  const currentDate = new Date(date);
  currentDate.setDate(currentDate.getDate() + 16);
  return currentDate.toLocaleDateString();
}


function Producao() {
  const [dadosCliente, setDadosCliente] = useState(null);
  const [cpf, setCpf] = useState('');
  const [cliente, setCliente] = useState(null);
  const location = useLocation();
  const [contato, setContato] = useState('');
  const [error, setError] = useState('');
  const [formNumber, setFormNumber] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');
  const [vendedor, setVendedor] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clearColar, setClearColar] = useState('');
  const [clearPala, setClearPala] = useState('');
  const [clearManga, setClearManga] = useState('');
  const [clearTorax, setClearTorax] = useState('');
  const [clearCintura, setClearCintura] = useState('');
  const [clearQuadril, setClearQuadril] = useState('');
  const [clearCumprimento, setClearCumprimento] = useState('');
  const [clearPunho, setClearPunho] = useState('');
  const [clearMetro, setClearMetro] = useState('');
  const [clearMonograma, setClearMonograma] = useState('');
  const [clearParis, setClearParis] = useState('');
  const [clearWindsor, setClearWindsor] = useState('');
  const [clearItaly, setClearItaly] = useState('');
  const [clearIngles, setClearIngles] = useState('');
  const [clearDouglas, setClearDouglas] = useState('');
  const [clearBicoDow, setClearBicoDow] = useState('');
  const [selectedRadio, setSelectedRadio] = useState('');
  const [selectedPunhoRadio, setSelectedPunhoRadio] = useState('');
  const [selectedFrenteRadio, setSelectedFrenteRadio] = useState('');
  const [client, setClient] = useState('');
  const [formData, setFormData] = useState({ number: 1 });
  const [lastNumber, setLastNumber] = useState(1);
  const [deliveryDate, setDeliveryDate] = useState('');
  const navigate = useNavigate();
  const [inputDate, setInputDate] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const cpf = queryParams.get('cpf');
    if (cpf) {
      fetchClientData(cpf);
    }
  }, [location.search]);



  // Atualiza a data de entrega sempre que a data de entrada muda
  useEffect(() => {
    setDeliveryDate(calculateDeliveryDate(inputDate));
  }, [inputDate]);




  // Efeito para buscar dados do cliente quando o CPF mudar
  useEffect(() => {
    if (cpf) {
      fetchClientData(cpf);
    } else {
      setCliente({});
      setContato('');
    }
  }, [cpf]);


  // Efeito para atualizar o número do formulário no localStorage
  useEffect(() => {
    localStorage.setItem('ultimoLastNumber', lastNumber);
  }, [lastNumber]);



  // Efeito para atualizar os dados do formulário no localStorage
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);


  // Função para buscar dados do cliente
  // Exemplo de solicitação com axios
  const fetchClientData = async (cpf) => {
    try {
      const response = await axios.get(`http://localhost:3000/clienttable?cpf=${cpf}`);
      if (response.data && response.data.length > 0) {
        const clientData = response.data[0];
        setCliente(clientData);
        setContato(clientData.telefone || '');
      } else {
        setCliente({});
        setContato('');
      }
    } catch (error) {
      console.error('Erro ao buscar dados do cliente:', error);
      setError('Erro ao buscar dados do cliente');
      setCliente({});
      setContato('');
    }
  };





  // Função para lidar com mudanças no CPF
  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  };




  const handlePrint = () => {
    window.print();
  };



  const handleLimparFormulario = () => {
    setCpf('');
    setCliente({});
    setContato('');
    setInputDate('');
    setDeliveryDate('');
    setClient('');
    setClearColar('');
    setClearPala('');
    setClearManga('');
    setClearTorax('');
    setClearCintura('');
    setClearQuadril('');
    setClearCumprimento('');
    setClearPunho('');
    setClearMetro('');
    setClearMonograma('');
    setClearParis('');
    setClearWindsor('');
    setClearItaly('');
    setClearIngles('');
    setClearDouglas('');
    setClearBicoDow('');
    setClearParis('');
    setSelectedRadio('');
    setSelectedPunhoRadio('');
    setSelectedFrenteRadio('');
    setVendedor('')
    setInputDate('')
  }


  // Função para redirecionar para o formulário
  // const redirectToFormulario = () => {
  //   navigate('/');
  // };

  const isValidCPF = (cpf) => {
    // Adicione a lógica para validar o CPF
    return true; // Supondo que o CPF é válido
  };

  const handleSubmit = () => {
    if (isValidCPF(cpf)) {
      fetchClientData(cpf);
    } else {
      console.error('CPF inválido');
    }
  };








  // Função para fechar o modal
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };







  const handleDateChange = (event) => {
    setInputDate(event.target.value);
  };

  return (
    <>
      <div className="containerTypeMeasure">
        <form onSubmit={handleSubmit} className="screenTokenMeasure">
          <section className="_wrapper-header">
            <section>
              <h1>COTOVIA</h1>
              <img src={Site} alt="" />
            </section>
            <section>
              <p className="for-text">VENDEDOR:</p>
              <input
                className="for-Inputs"
                type="text"
                onChange={(e) => setVendedor(e.target.value)}
              />
            </section>
            <section className="_sec-HeaderMain">
              <h1 className="textToken">Ficha de Produção</h1>
            </section>
            <section className="_sec-HeaderRight">
              <p className="for-text">N.</p>
              <input
                className="for-Inputs"
                type="text"
                readOnly
              />
            </section>
          </section>




          {/* a partir daqui tem mudanças na grid   */}




          <main className="_rows-OneData">
            <section class="wrapper-dataForm">

              <section>
                <p className="for-text">DADOS DO CLIENTE</p>
              </section>

              <section>
                <p className="for-text">CPF:</p>
                <InputMask
                  mask="999.999.999-99"
                  type="text"
                  className="for-Inputs"
                  value={cpf} s
                  onChange={handleCpfChange}
                />
              </section>

              <section>
                <p className="for-text">CONTATO:</p>
                <input
                  type="text"
                  className="for-Inputs"
                  value={contato}
                />
              </section>

              <section>
                <p className="for-text">CLIENTE:</p>
                <input
                  type="text"
                  className="for-Inputs"
                  value={cliente ? cliente.nome : ''}
                  readOnly
                />
              </section>


              {/* ===================================================== Data / Entrega */}

              <section className="wrapper-DeliveryDate">
                <section>
                  {/* <p className="for-text">DATE:</p> */}
                  {/* <input
                    type="date"
                    className="for-Inputs"
                    value={inputDate}
                    onChange={handleDateChange}
                  /> */}
                </section>

                <section>
                  {/* <p className="for-text">ENTREGA:</p> */}
                  {/* <input
                    type="text"
                    className="for-Inputs"
                    value={deliveryDate}
                    readOnly
                  /> */}
                </section>
              </section>

              {/* <section className="measures-datas">
                <div>
                  <input
                    type="text"
                    onChange={(e) => setClearColar(e.target.value)}
                  />
                  <p>Colar</p>
                </div>
                <div>
                  <input
                    type="text"
                    onChange={(e) => setClearPala(e.target.value)}
                  />
                  <p>Pala</p>
                </div>
                <div>
                  <input
                    type="text"
                    onChange={(e) => setClearManga(e.target.value)}
                  />
                  <p>Manga</p>
                </div>
                <div>
                  <input
                    type="text"
                    onChange={(e) => setClearTorax(e.target.value)}
                  />
                  <p>Tórax</p>
                </div>
                <div>
                  <input
                    type="text"
                    onChange={(e) => setClearCintura(e.target.value)}
                  />
                  <p>Cintura</p>
                </div>
                <div>
                  <input
                    type="text"
                    onChange={(e) => setClearQuadril(e.target.value)}
                  />
                  <p>Quadril</p>
                </div>
                <div>
                  <input
                    type="text"
                    onChange={(e) => setClearCumprimento(e.target.value)}
                  />
                  <p>Cumpr.</p>
                </div>
                <div>
                  <input
                    type="text"
                    onChange={(e) => setClearPunho(e.target.value)}
                  />
                  <p>Punho</p>
                </div>
              </section> */}
            </section>



            <div class="wrapper-measure">
              <div className="box-colar">

                <section className="_sec-colar">
                  <img src={Colarinho} alt="" className="imgColarinho" />
                  <div className="_secInfoRadio">
                    <input
                      type="radio"
                      id="paris"
                      className="_secImput-radio"
                      value="paris"
                      checked={selectedRadio === 'paris'}
                      onChange={(e) => setSelectedRadio(e.target.value)}
                    />
                    <label htmlFor="windsor" className="_secInfoRadio">PARIS</label>
                  </div>
                </section>

                <section className="_sec-colar">
                  <img src={Colarinho} alt="" className="imgColarinho" />
                  <div className="_secInfoRadio">
                    <input
                      type="radio"
                      id="paris"
                      className="_secImput-radio"
                      value="paris"
                      checked={selectedRadio === 'paris'}
                      onChange={(e) => setSelectedRadio(e.target.value)}
                    />
                    <label htmlFor="windsor" className="_secInfoRadio">WINDSOR</label>
                  </div>
                </section>




                <section className="_sec-colar">
                  <img src={Colarinho} alt="" className="imgColarinho" />
                  <div className="_secInfoRadio">
                    <input
                      type="radio"
                      id="paris"
                      className="_secImput-radio"
                      value="paris"
                      checked={selectedRadio === 'paris'}
                      onChange={(e) => setSelectedRadio(e.target.value)}
                    />
                    <label htmlFor="windsor">ITALY</label>
                  </div>
                </section>

                <section className="_sec-colar">
                  <img src={Colarinho} alt="" className="imgColarinho" />
                  <div className="_secInfoRadio">
                    <input
                      type="radio"
                      id="paris"
                      className="_secImput-radio"
                      value="paris"
                      checked={selectedRadio === 'paris'}
                      onChange={(e) => setSelectedRadio(e.target.value)}
                    />
                    <label htmlFor="windsor" className="_secInfoRadio">INGLÊS</label>
                  </div>
                </section>



                <section className="_sec-colar">
                  <img src={Colarinho} alt="" className="imgColarinho" />
                  <div className="_secInfoRadio">
                    <input
                      type="radio"
                      id="paris"
                      className="_secImput-radio"
                      value="paris"
                      checked={selectedRadio === 'paris'}
                      onChange={(e) => setSelectedRadio(e.target.value)}
                    />
                    <label htmlFor="windsor">DOUGLAS</label>
                  </div>
                </section>
                <section className="_sec-colar">
                  <img src={Colarinho} alt="" className="imgColarinho" />
                  <div className="_secInfoRadio">
                    <input
                      type="radio"
                      id="paris"
                      className="_secImput-radio"
                      value="paris"
                      checked={selectedRadio === 'paris'}
                      onChange={(e) => setSelectedRadio(e.target.value)}
                    />
                    <label htmlFor="windsor" className="_secInfoRadio">BICO_DOW</label>
                  </div>
                </section>


              </div>
            </div>




          </main>
          <div className="rowsTwoMeasure">
            <section className="_wrapper-measure-left">
              <section className="meters">
                <p className="for-text">MTRS/TEC.</p>
                <input
                  type="text"
                  className="for-Inputs for-Inputs-small"
                  value={clearMetro}
                  onChange={(e) => setClearMetro(e.target.value)}
                />
              </section>
              <section className="meters">
                <p className="for-text">MONOGRAMA</p>
                <input
                  type="text"
                  className="for-Inputs for-Inputs-large"
                  value={clearMonograma}
                  onChange={(e) => setClearMonograma(e.target.value)}
                />
              </section>
            </section>


            <section className="_wrapper-fist">
              <section className="_sec-first">
                <img src={Duplo} alt="" className="_punho" />
                <section>
                  <input
                    type="radio"
                    className="_secImput-radio"
                    value="duplo"
                    checked={selectedPunhoRadio === 'duplo'}
                    onChange={(e) => setSelectedPunhoRadio(e.target.value)}
                  />
                  <label className="_secInfoRadio" htmlFor="duplo">DUPLO</label>
                </section>
              </section>

              <section className="_sec-first">
                <img src={Redondo} alt="" className="_punho" />
                <section className="_typeRadio" >
                  <input className="_secImput-radio"
                    type="radio"
                    value='redondo'
                    checked={selectedPunhoRadio === 'redondo'}
                    onChange={(e) => setSelectedPunhoRadio(e.target.value)}
                  />
                  <label htmlFor="" className="_secInfoRadio" >REDONDO</label>
                </section>
              </section>

              <section className="_sec-first">
                <img src={Chanfrado} alt="" className="_punho" />

                <section className="_typeRadio" >
                  <input className="_secImput-radio"
                    type="radio"
                    value='chanfrado'
                    checked={selectedPunhoRadio === 'chanfrado'}
                    onChange={(e) => setSelectedPunhoRadio(e.target.value)}
                  />
                  <label htmlFor="" className="_secInfoRadio" >CHANFRADO</label>
                </section>

              </section>

            </section>
          </div>


          {/* ============================================================================= */}




          <section className="rowsThreeMeasure">

            <section className="item-CollumnLeft">
              <section>
                <img className="imgManga" src={Manga} alt="Manga" />
              </section>
              <section>
                <img className="imgTypeBolso" src={Bolso} alt="Bolso" />
              </section>
              <section>
                <img className="imgTypePala" src={Pala} alt="Pala" />
              </section>
              <section>
                <img className="img-frente" src={Frente} alt="Frente" />
              </section>
              <section>
                <img className="img-costa" src={Costa} alt="Costa" />
              </section>
            </section>




            <section className="item-rowsRight">
              <section>
                <input
                  className="_secImput-radio "
                  type="radio"
                  value='lisa'
                  checked={selectedFrenteRadio === 'lisa'}
                  onChange={(e) => setSelectedFrenteRadio(e.target.value)}
                />
                <label htmlFor="" className="_secInfoRadio">FRENTE_LISA</label>
              </section>
              <section>
                <input
                  className="_secImput-radio"
                  type="radio"
                  value='embutida'
                  checked={selectedFrenteRadio === 'embutida'}
                  onChange={(e) => setSelectedFrenteRadio(e.target.value)}
                />
                <label htmlFor="" className="_secInfoRadio">FRENTE_EMB.</label>
              </section>
              <section>
                <input
                  className="_secImput-radio"
                  type="radio"
                  value='macho'
                  checked={selectedFrenteRadio === 'macho'}
                  onChange={(e) => setSelectedFrenteRadio(e.target.value)}
                />
                <label htmlFor="" className="_secInfoRadio">FRENTE_MACHO</label>
              </section>
              <section>
                <input
                  className="_secImput-radio"
                  type="radio"
                  value='barbatana'
                  checked={selectedFrenteRadio === 'barbatana'}
                  onChange={(e) => setSelectedFrenteRadio(e.target.value)}
                />
                <label htmlFor="" className="_secInfoRadio">WA</label>
              </section>
              <form>
                {/* <label htmlFor="comments" >Digite seu texto aqui:</label> */}
                <textarea
                  name="comments"
                  id="comments"
                  rows="4"
                  cols="50"
                  placeholder="Escreva suas observações aqui..."
                >
                </textarea>
              </form>
            </section>
          </section>

          {/* --------------------------------------->>>>>>> parei aqui */}

          {/* <form className="iArea" >
              <input
                type="text"
                placeholder="Digite"
                className="textInput"
                autoFocus
              />
              <input
                type="text"
                placeholder="Digite"
                className="textInput"
                autoFocus
              />
              <input
                type="text"
                placeholder="Digite"
                className="textInput"
                autoFocus
              />
              <input
                type="text"
                placeholder="Digite"
                className="textInput"
                autoFocus
              />
              <input
                type="text"
                placeholder="Digite"
                className="textInput"
                autoFocus
              />
            </form> */}


          {/* Se é bet tem que ser brilhante */}

          {/* ------------------------------------------------------->>>>>>>>>  terminei aqui */}






          {/* <section>
               
              </section> */}





          {/* <div className="typeOfShirts">
                <div className="moldeLeft">
                </div>
                <section className="typeBolso">
                </section>
                <section className="FrenteCosta">
                 
               
                </section>
              </div> */}




          {/* ========================================frente */}


          {/* <div className="displayBlock">
              <section className="firstRowsOptions" >
                <article className="ArticleGap">          
                                 </article>


                <article className="ArticleGap">
                 
                  
                </article>
                <article className="ArticleGap">
                 
                 
                </article>
                <article className="ArticleGap">
                  <input type="radio"
                    value='wa'
                    checked={selectedFrenteRadio === 'wa'}
                    onChange={(e) => setSelectedFrenteRadio(e.target.value)}
                  />
                </article>
                <article className="ArticleGap">
                 
                  <label htmlFor="" className="textColor" >C/Barbatana</label>
                </article>
              </section>
              <header className="Message">



               
              </header>
            </div> */}






          {/* ============================================================================ */}




          {/* =====================================delete */}
          {/* </section> */}
          {/* _rows-OneData  ^ */}
          {/* <p>Last Number: {lastNumber}</p> */}
          {/* <div className="flexData _marginTopDate">
            <p className="textColor">DATE:</p>
            <input
              type="date"
              className="iDateProduction iFont"
              value={inputDate}
              onChange={handleDateChange}
            />
            <div className="flexDataDelivery">
              <p className="textColor iEntrega">ENTREGA:</p>
              <input
                type="text"
                className="iEntregaProduction iFont"
                value={deliveryDate}
                readOnly
              />
            </div>
          </div> */}
          {/* delete====================================== */}




          {/* =============================================medidas */}
          {/* <section className="measuresDatas _marginTop">
            <div className="_divMeasure">
              <div>
                <input
                  type="text"
                  className="iColarProducao iFild"

                  onChange={(e) => setClearColar(e.target.value)}
                />
                <p className="pFild">Colar</p>
              </div>
              <div>
                <input
                  type="text"
                  className="iPalaProducao iFild"

                  onChange={(e) => setClearPala(e.target.value)}
                />
                <p className="pFild">Pala</p>
              </div>
              <div>
                <input
                  type="text"
                  className="iMangaProducao iFild"

                  onChange={(e) => setClearManga(e.target.value)}
                />
                <p className="pFild">Manga</p>
              </div>
              <div>
                <input
                  type="text"
                  className="iToraxProducao iFild"
                  onChange={(e) => setClearTorax(e.target.value)}
                />
                <p className="pFild">Tórax</p>
              </div>
              <div>
                <input
                  type="text"
                  className="iCinturaProducao iFild"

                  onChange={(e) => setClearCintura(e.target.value)}
                />
                <p className="pFild">Cintura</p>
              </div>
              <div>
                <input
                  type="text"
                  className="iQuadrilProducao iFild"

                  onChange={(e) => setClearQuadril(e.target.value)}
                />
                <p className="pFild">Quadril</p>
              </div>
              <div>
                <input
                  type="text"
                  className="iCumprProducao iFild"

                  onChange={(e) => setClearCumprimento(e.target.value)}
                />
                <p className="pFild">Cumpr.</p>
              </div>
              <div>
                <input
                  type="text"
                  className="iPunhoProducao iFild"

                  onChange={(e) => setClearPunho(e.target.value)}
                />
                <p className="pFild">Punho</p>
              </div>
            </div>
          </section> */}
          {/* medidas============================================== */}














          {/* <section className="collumnOneModel"> */}


          {/* ----------------------------primary---------------------- */}

          {/* <div className="centralized">
                  <div className="_sec-colar">
                   
                    <div className="_secInfoRadio">
                      <input
                        type="radio"
                        id="paris"
                        className="_secImput-radio"
                        value="paris"
                        checked={selectedRadio === 'paris'}
                        onChange={(e) => setSelectedRadio(e.target.value)}
                      />
                      <label htmlFor="paris">París</label>
                    </div>
                  </div>

                  <div className="_sec-colar">
                    <img src={Colarinho} alt="" className="imgColarinho" />
                    <div className="_secInfoRadio">
                      <input
                        type="radio"
                        id="windsor"
                        className="_secImput-radio"
                        value='windsor'
                        checked={selectedRadio === 'windsor'}
                        onChange={(e) => setSelectedRadio(e.target.value)}
                      />
                      <label htmlFor="windsor">Windsor</label>
                    </div>
                  </div>
                </div> */}


          {/* --------------------------second---------------------- */}
          {/* <div className="centralized">
                  <div className="_sec-colar">
                    <img src={Colarinho} alt="" className="imgColarinho" />
                    <div className="_secInfoRadio">
                      <input
                        type="radio"
                        id="italy"
                        className="_secImput-radio"
                        value="italy"
                        checked={selectedRadio === 'italy'}
                        onChange={(e) => setSelectedRadio(e.target.value)}
                      />
                      <label htmlFor="italy">Italy</label>
                    </div>
                  </div>

                  <div className="_sec-colar">
                    <img src={Colarinho} alt="" className="imgColarinho" />
                    <div className="_secInfoRadio">
                      <input
                        type="radio"
                        id="ingles"
                        className="_secImput-radio"
                        value='ingles'
                        checked={selectedRadio === 'ingles'}
                        onChange={(e) => setSelectedRadio(e.target.value)}
                      />
                      <label htmlFor="ingles">Inglês</label>
                    </div>
                  </div>
                </div> */}

          {/* <div className="centralized">
                  <div className="_sec-colar">
                    <img src={Colarinho} alt="" className="imgColarinho" />
                    <div className="_secInfoRadio">
                      <input
                        type="radio"
                        id="douglas"
                        className="_secImput-radio"
                        value='douglas'
                        checked={selectedRadio === 'douglas'}
                        onChange={(e) => setSelectedRadio(e.target.value)}
                      />
                      <label htmlFor="douglas">Douglas</label>
                    </div>
                  </div>

                  <div className="_sec-colar">
                    <img src={Colarinho} alt="" className="imgColarinho" />
                    <div className="_secInfoRadio">
                      <input
                        type="radio"
                        id="bicoDow"
                        className="_secImput-radio"
                        value='bicoDow'
                        checked={selectedRadio === 'bicoDow'}
                        onChange={(e) => setSelectedRadio(e.target.value)}
                      />
                      <label htmlFor="bicoDow">Bico-Dow</label>
                    </div>
                  </div>
                </div> */}


          {/* </section> */}
          {/* </div> */}



















          <div className="areaBottom">
            <button className="screenClose typeToButton" >Sair</button>
            <button type="submit" className="sendForm typeToButton">Enviar</button>
            <button className="printScreen typeToButton" onClick={handlePrint}>Imprimir</button>
            <button type="button" className="backToForm">Voltar ao Formulário</button>
          </div>





        </form >
        {/* {isModalOpen && <MyModal onClose={closeModal} />} */}
      </div >
    </>
  )
}
export default Producao