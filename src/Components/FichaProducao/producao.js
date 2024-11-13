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
import Site from '../AssetsIcons/logocotovia.jpeg';
import './producao.css';
import './print.css';
import MyModal from "./modal";

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

  useEffect(() => {
    setDeliveryDate(calculateDeliveryDate(inputDate));
  }, [inputDate]);

  useEffect(() => {
    if (cpf) {
      fetchClientData(cpf);
    } else {
      setCliente({});
      setContato('');
    }
  }, [cpf]);

  useEffect(() => {
    localStorage.setItem('ultimoLastNumber', lastNumber);
  }, [lastNumber]);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

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

  const isValidCPF = (cpf) => {
    return true;
  };

  const handleSubmit = () => {
    if (isValidCPF(cpf)) {
      fetchClientData(cpf);
    } else {
      console.error('CPF inválido');
    }
  };

  const handleAutoDecimalInput = (value, setter) => {
    let numericValue = value.replace(/\D/g, '');


    if (numericValue.length > 2) {
      numericValue = numericValue.slice(0, -2) + '.' + numericValue.slice(-2);
    }
    setter(numericValue);
  };

  const handleDateChange = (event) => {
    setInputDate(event.target.value);
  };

  return (
    <>
      <div className="containerTypeMeasure">
        <form onSubmit={handleSubmit} className="form-ScreenTokenMeasure">
          <section className="_wrapper-header">
            <section>
              {/* <h1>COTOVIA</h1> */}
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
          <main className="_rows-OneData">
            <section class="wrapper-dataForm">
              <section className="client-data-title">
                <p>DADOS DO CLIENTE</p>
              </section>
              <section className="wrapperContact">
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
              </section>
              <section className="wrapper-DeliveryDate">
                <section className="info-date">
                  <section className="oderDate">
                    <p className="for-text">DATE:</p>
                    <input
                      type="date"
                      className="for-Inputs for-inputs-small"
                      value={inputDate}
                      onChange={handleDateChange}
                    />
                  </section>
                  <section className="oderDate">
                    <p className="for-text">ENTREGA:</p>
                    <input
                      type="text"
                      className="for-Inputs for-inputs-small"
                      value={deliveryDate}
                      readOnly
                    />
                  </section>
                </section>

              </section>
              <section className="measures-datas">
                <div>
                  <input
                    type="text"
                    value={clearColar}
                    onChange={(e) => handleAutoDecimalInput(e.target.value, setClearColar)}
                  />
                  <p>Colar</p>
                </div>
                <div>
                  <input
                    type="text"
                    value={clearPala}
                    onChange={(e) => handleAutoDecimalInput(e.target.value, setClearPala)}
                  />
                  <p>Pala</p>
                </div>
                <div>
                  <input
                    type="text"
                    value={clearManga}
                    onChange={(e) => handleAutoDecimalInput(e.target.value, setClearManga)}
                  />
                  <p>Manga</p>
                </div>
                <div>
                  <input
                    type="text"
                    value={clearTorax}
                    onChange={(e) => handleAutoDecimalInput(e.target.value, setClearTorax)}
                  />
                  <p>Tórax</p>
                </div>
                <div>
                  <input
                    type="text"
                    value={clearCintura}
                    onChange={(e) => handleAutoDecimalInput(e.target.value, setClearCintura)}
                  />
                  <p>Cintura</p>
                </div>
                <div>
                  <input
                    type="text"
                    value={clearQuadril}
                    onChange={(e) => handleAutoDecimalInput(e.target.value, setClearQuadril)}
                  />
                  <p>Quadril</p>
                </div>
                <div>
                  <input
                    type="text"
                    value={clearCumprimento}
                    onChange={(e) => handleAutoDecimalInput(e.target.value, setClearCumprimento)}
                  />
                  <p>Cumpr.</p>
                </div>
                <div>
                  <input
                    type="text"
                    value={clearPunho}
                    onChange={(e) => handleAutoDecimalInput(e.target.value, setClearPunho)}
                  />
                  <p>Punho</p>
                </div>
              </section>
              <section className="_wrapper-measure-left">
                <section className="meters">
                  <section className="tissue">
                    <p className="for-text">MTRS/TEC.</p>
                    <input
                      type="text"
                      className="for-Inputs for-Inputs-small"
                      value={clearMetro}
                      onChange={(e) => setClearMetro(e.target.value)}
                    />
                  </section>
                  <section className="tissue">
                    <p className="for-text">MONOGRAMA</p>
                    <input
                      type="text"
                      className="for-Inputs for-Inputs-large"
                      value={clearMonograma}
                      onChange={(e) => setClearMonograma(e.target.value)}
                    />
                  </section>
                </section>
              </section>
            </section>
            <div class="wrapper-measure">
              <section className="box-colar">
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
                    <label htmlFor="paris" className="for-text">PARIS</label>
                  </div>
                </section>
                <section className="_sec-colar">
                  <img src={Colarinho} alt="" className="imgColarinho" />
                  <div className="_secInfoRadio">
                    <input
                      type="radio"
                      id="windsor"
                      className="_secImput-radio"
                      value="windsor"
                      checked={selectedRadio === 'windsor'}
                      onChange={(e) => setSelectedRadio(e.target.value)}
                    />
                    <label htmlFor="windsor" className="for-text">WINDSOR</label>
                  </div>
                </section>
                <section className="_sec-colar">
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
                    <label htmlFor="italy" className="for-text">ITALY</label>
                  </div>
                </section>
                <section className="_sec-colar">
                  <img src={Colarinho} alt="" className="imgColarinho" />
                  <div className="_secInfoRadio">
                    <input
                      type="radio"
                      id="ingles"
                      className="_secImput-radio"
                      value="ingles"
                      checked={selectedRadio === 'ingles'}
                      onChange={(e) => setSelectedRadio(e.target.value)}
                    />
                    <label htmlFor="ingles" className="for-text">INGLÊS</label>
                  </div>
                </section>
                <section className="_sec-colar">
                  <img src={Colarinho} alt="" className="imgColarinho" />
                  <div className="_secInfoRadio">
                    <input
                      type="radio"
                      id="douglas"
                      className="_secImput-radio"
                      value="douglas"
                      checked={selectedRadio === 'douglas'}
                      onChange={(e) => setSelectedRadio(e.target.value)}
                    />
                    <label htmlFor="douglas" className="for-text">DOUGLAS</label>
                  </div>
                </section>
                <section className="_sec-colar">
                  <img src={Colarinho} alt="" className="imgColarinho" />
                  <div className="_secInfoRadio">
                    <input
                      type="radio"
                      id="bicdow"
                      className="_secImput-radio"
                      value="bicodow"
                      checked={selectedRadio === 'bicodow'}
                      onChange={(e) => setSelectedRadio(e.target.value)}
                    />
                    <label htmlFor="bicodow" className="for-text">BICO_DOW</label>
                  </div>
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
                    <label className="for-text" htmlFor="duplo">DUPLO</label>
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
                    <label htmlFor="" className="for-text" >REDONDO</label>
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
                    <label htmlFor="" className="for-text" >CHANFRADO</label>
                  </section>
                </section>
              </section>
            </div>
          </main>
          <div className="rowsTwoMeasure">
            <section className="typeFront">
              <section>
                <input
                  className="_secImput-radio "
                  type="radio"
                  value='lisa'
                  checked={selectedFrenteRadio === 'lisa'}
                  onChange={(e) => setSelectedFrenteRadio(e.target.value)}
                />
                <label htmlFor="" className="for-text">FRENTE LISA</label>
              </section>
              <section>
                <input
                  className="_secImput-radio"
                  type="radio"
                  value='embutida'
                  checked={selectedFrenteRadio === 'embutida'}
                  onChange={(e) => setSelectedFrenteRadio(e.target.value)} />
                <label htmlFor="" className="for-text">F. EMB.</label>
              </section>

              <section>
                <input
                  className="_secImput-radio"
                  type="radio"
                  value='macho'
                  checked={selectedFrenteRadio === 'macho'}
                  onChange={(e) => setSelectedFrenteRadio(e.target.value)}
                />
                <label htmlFor="" className="for-text">F. MACHO</label>
              </section>

              <section>
                <input
                  className="_secImput-radio"
                  type="radio"
                  value='barbatana'
                  checked={selectedFrenteRadio === 'barbatana'}
                  onChange={(e) => setSelectedFrenteRadio(e.target.value)}
                />
                <label htmlFor="" className="for-text">WA</label>
              </section>
            </section>
          </div>

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
              <form>
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
          <div className="areaBottom">
            <button className="screenClose typeToButton" >Sair</button>
            <button type="submit" className="sendForm typeToButton">Enviar</button>
            <button className="printScreen typeToButton" onClick={handlePrint}>Imprimir</button>
            <button type="button" className="backToForm">Cadastro</button>
          </div>
        </form >
      </div >
    </>
  )
}
export default Producao