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
          <div className="_dispalayFlexHeader">
            <section className="sectionHeaderLeft">
              <p className="textColor">VENDEDOR:</p>
              <input
                type="text"
                className="seller  iFont"

                onChange={(e) => setVendedor(e.target.value)}
              />
            </section>
            <h1 className="textToken">Ficha de Produção</h1>
            <section className="sectionHeaderRight">
              <label htmlFor="number">N.</label>
              <input
                type="text"
                className="numberToken iFont"

                readOnly
              />
            </section>
          </div>
          <div className="rowsOneMeasure">
            <section className="dataClient">
              <article className="ArtcleContactName">
                <div className="flexData _toMedidaPrint">
                  <p className="textColor textCpfMediaPrint">CPF:</p>
                  <InputMask
                    mask="999.999.999-99"
                    type="text"
                    className="iClientProduction iFont"
                    value={cpf}
                    onChange={handleCpfChange}
                  />
                </div>

                <div className="flexData">
                  <p className="_textColor">CONTATO:</p>
                  <input
                    type="text"
                    className="iClientProduction iFont"
                    value={contato}
                  />
                  {/* <p>Last Number: {lastNumber}</p> */}
                </div>
              </article>
              <div className="flexData _marginTop">
                <p className="textColor" >CLIENTE:</p>
                <input
                  type="text"
                  className="iContactProduction iFont"
                  value={cliente ? cliente.nome : ''}
                  readOnly
                />
              </div>
              <div className="flexData _marginTopDate">
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
              </div>
              <section className="measuresDatas _marginTop">
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
              </section>
            </section>
            <div className="divCollumnTwoRight">
              <section className="collumnOneModel">
                <div className="centralized">
                  <div className="_displayBlock">
                    <img src={Colarinho} alt="" className="imgParis" />
                    <div className="_displayFlex _iParis">
                      <input
                        type="radio"
                        id="paris"
                        className="iParis"
                        value="paris"
                        checked={selectedRadio === 'paris'}
                        onChange={(e) => setSelectedRadio(e.target.value)}
                      />
                      <label className="textColor" htmlFor="paris">París</label>
                    </div>
                  </div>
                  <div className="_displayBlock">
                    <img src={Colarinho} alt="" className="imgParis" />
                    <div className="_displayFlex">
                      <input
                        type="radio"
                        id="windsor"
                        className="iParis"
                        value='windsor'
                        checked={selectedRadio === 'windsor'}
                        onChange={(e) => setSelectedRadio(e.target.value)}
                      />
                      <label className="textColor" htmlFor="windsor">Windsor</label>
                    </div>
                  </div>
                </div>
              </section>
              <div className="centralized">
                <div className="_displayBlock">
                  <img src={Colarinho} alt="" className="imgParis" />
                  <div className="_displayFlex">
                    <input
                      type="radio"
                      id="italy"
                      className="iParis"
                      value="italy"
                      checked={selectedRadio === 'italy'}
                      onChange={(e) => setSelectedRadio(e.target.value)}
                    />
                    <label className="textColor" htmlFor="italy">Italy</label>
                  </div>
                </div>
                <div className="_displayBlock">
                  <img src={Colarinho} alt="" className="imgParis" />
                  <div className="_displayFlex _iIngles">
                    <input
                      type="radio"
                      id="ingles"
                      className="iParis"
                      value='ingles'
                      checked={selectedRadio === 'ingles'}
                      onChange={(e) => setSelectedRadio(e.target.value)}
                    />
                    <label className="textColor" htmlFor="ingles">Inglês</label>
                  </div>
                </div>
              </div>
              <div className="centralized">
                <div className="_displayBlock">
                  <img src={Colarinho} alt="" className="imgParis" />
                  <div className="_displayFlex _iDouglas">
                    <input
                      type="radio"
                      id="douglas"
                      className="iParis"
                      value='douglas'
                      checked={selectedRadio === 'douglas'}
                      onChange={(e) => setSelectedRadio(e.target.value)}
                    />
                    <label className="textColor" htmlFor="douglas">Douglas</label>
                  </div>
                </div>
                <div className="_displayBlock">
                  <img src={Colarinho} alt="" className="imgParis" />
                  <div className="_displayFlex _BicoDow">
                    <input
                      type="radio"
                      id="bicoDow"
                      className="iParis"
                      value='bicoDow'
                      checked={selectedRadio === 'bicoDow'}
                      onChange={(e) => setSelectedRadio(e.target.value)}
                    />
                    <label className="textColor" htmlFor="bicoDow">Bico-Dow</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rowsTwoMeasure">
            <section className="optionLeft">
              <section className="meters">
                <p className="textColor textColorMediaPrint">Mtrs/Tec.</p>
                <input
                  type="text"
                  className="iMeters iFont"
                  value={clearMetro}
                  onChange={(e) => setClearMetro(e.target.value)}
                />
              </section>
              <section className="meters">
                <p className="textColor">Monograma</p>
                <input
                  type="text"
                  className="iMonograma  iFont"
                  value={clearMonograma}
                  onChange={(e) => setClearMonograma(e.target.value)}
                />
              </section>
            </section>
            <section className="optionRight">
              <section className="_imgPunho">
                <img src={Duplo} alt="" className="punhoDouble" />
                <section className="_typeRadio" >
                  <input
                    type="radio"
                    value='duplo'
                    checked={selectedPunhoRadio === 'duplo'}
                    onChange={(e) => setSelectedPunhoRadio(e.target.value)}
                  />
                  <label htmlFor="" className="textColor" >Duplo</label>
                </section>
              </section>
              <section className="_imgPunho">
                <img src={Redondo} alt="" className="punhoDouble" />
                <section className="_typeRadio" >
                  <input
                    type="radio"
                    value='redondo'
                    checked={selectedPunhoRadio === 'redondo'}
                    onChange={(e) => setSelectedPunhoRadio(e.target.value)}
                  />
                  <label htmlFor="" className="textColor" >Redondo</label>
                </section>
              </section>
              <section className="_imgPunho">
                <img src={Chanfrado} alt="" className="punhoDouble" />
                <section className="_typeRadio" >
                  <input type="radio"
                    value='chanfrado'
                    checked={selectedPunhoRadio === 'chanfrado'}
                    onChange={(e) => setSelectedPunhoRadio(e.target.value)}
                  />
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
                    <input type="radio"
                      value='lisa'
                      checked={selectedFrenteRadio === 'lisa'}
                      onChange={(e) => setSelectedFrenteRadio(e.target.value)}
                    />
                    <label htmlFor="" className="textColor" >Frente Lisa</label>
                  </article>
                  <article className="ArticleGap">
                    <input type="radio"
                      value='embutida'
                      checked={selectedFrenteRadio === 'embutida'}
                      onChange={(e) => setSelectedFrenteRadio(e.target.value)}
                    />
                    <label htmlFor="" className="textColor" >Frente Embutida</label>
                  </article>
                  <article className="ArticleGap">
                    <input type="radio"
                      value='macho'
                      checked={selectedFrenteRadio === 'macho'}
                      onChange={(e) => setSelectedFrenteRadio(e.target.value)}
                    />
                    <label htmlFor="" className="textColor" >Frente Macho</label>
                  </article>
                  <article className="ArticleGap">
                    <input type="radio"
                      value='wa'
                      checked={selectedFrenteRadio === 'wa'}
                      onChange={(e) => setSelectedFrenteRadio(e.target.value)}
                    />
                    <label htmlFor="" className="textColor" >WA</label>
                  </article>
                  <article className="ArticleGap">
                    <input type="radio"
                      value='barbatana'
                      checked={selectedFrenteRadio === 'barbatana'}
                      onChange={(e) => setSelectedFrenteRadio(e.target.value)}
                    />
                    <label htmlFor="" className="textColor" >C/Barbatana</label>
                  </article>
                </section>
                <header className="Message">
                  <form className="iArea" >
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
                  </form>
                </header>
              </div>
            </section>
          </section>
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