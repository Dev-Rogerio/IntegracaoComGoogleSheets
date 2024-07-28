import React, { useState, useEffect } from "react";
import axios from 'axios';
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

const Producao = () => {
  const [lastNumber, setLastNumber] = useState(() => {
    return parseInt(localStorage.getItem('ultimoLastNumber')) || 1000;
  });

  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem('formData');
    return savedFormData ? JSON.parse(savedFormData) :
      { number: lastNumber, cpf: '', clien: '', contato: '' };
  });

  useEffect(() => {
    localStorage.setItem('ultimoLastNumber', lastNumber);
  }, [lastNumber]);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const calculateDelivreryDate = (date) => {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() + 16);
    return currentDate.toLocaleDateString();
  };

  const [formNumber, setFormNumber] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');
  const [vendedor, setVendedor] = useState('');
  const [cpf, setCpf] = useState(formData.cpf || '');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clearColar, setClearColar] = useState('');
  const [clearPala, setClearPala] = useState('');
  const [clearManga, setClearManga] = useState('');
  const [clearTorax, setClearTorax] = useState('');
  const [clearCintura, setClearCintura] = useState('');
  const [clearQuadril, setClearQuadril] = useState('');
  const [clearCumprimento, setClearCumprimento] = useState('');
  const [clearPunho, setClearPunho] = useState('');
  const [clearMetro, setClearMetro] = useState(formData.clearMetro || '');
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
  const [client, setClient] = useState(formData.client || '');
  const [contato, setContato] = useState(formData.contato || '');
  const [inputDate, setInputDate] = useState('');
  const navigate = useNavigate();
  const [deliveryDate, setDeliveryDate] = useState(calculateDelivreryDate());
  const handlePrint = () => {
    window.print();
  };
  const handleLimparFormulario = () => {
    setCpf('')
    setClient('');
    setContato('');
    setInputDate('');
    setDeliveryDate('');
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
  const redirectToFormulario = () => {
    navigate('/');
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (vendedor.trim() === '') {
      setErrorMessage('Preencha o campo Vendedor.');
      setIsModalOpen(true);
      return;
    }
    if (cpf.trim() === '') {
      setErrorMessage('Preencha o campo CPF.');
      setIsModalOpen(true);
      return;
    }
    if (inputDate.trim() === '') {
      setErrorMessage('Informe um data válida');
      setIsModalOpen(true);
      return;
    }
    if (selectedRadio.trim() === '') {
      setErrorMessage('selecione um tipo de colarinho');
      setIsModalOpen(true);
      return;
    }
    if (clearMetro.trim() === '') {
      setErrorMessage('Qual a metragem do tecido.');
      setIsModalOpen(true);
      return;
    }
    if (selectedPunhoRadio.trim() === "") {
      setErrorMessage('Selecione um tipo de punho');
      setIsModalOpen(true);
      return;
    }
    if (selectedFrenteRadio.trim() === '') {
      setErrorMessage('Selecione o tipo de frente');
      setIsModalOpen(true);
      return;
    }
    const newFormNumber = formNumber + 1;
    setFormNumber(newFormNumber);
    console.log("Formulário enviado com sucesso!");
    handleLimparFormulario();
    setLastNumber(newFormNumber);
    const updateFormData = { ...formData, number: newFormNumber, cpf, client, contato };
    setFormData(updateFormData);
    setDeliveryDate(calculateDelivreryDate(inputDate));
    console.log('dados enviados:', updateFormData);
  };
  const closeModal = () => {
    setIsModalOpen(false)
  }
  useEffect(() => {
    setDeliveryDate(calculateDelivreryDate())
  }, []);
  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setInputDate(newDate);
    if (newDate) {
      setDeliveryDate(calculateDelivreryDate(newDate));
    } else {
      setDeliveryDate('');
    }
  };

  const handleCpfChange = async (event) => {
    const newCpf = event.target.value;
    setCpf(newCpf);
    if (newCpf.length === 14) {
      try {
        const response = await axios.get(`http://localhost:3001/medidas/client/${newCpf}`);
        console.log('resposta da API:', response.data);
        if (response.data && response.data.client) {
          setClient(response.data.client);
          setContato(response.data.contato || '');
          setFormData({ ...formData, client: response.data.client, contato: response.data.contato || '' });
        } else {
          setClient('Cliente não encontrado');
        }
      } catch (error) {
        console.error('Erro ao buscar cliente pelo CPF:', error);
        setClient('erro ao buscar cliente');
      }
    } else {
      setClient('');
    }
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
                value={vendedor}
                onChange={(e) => setVendedor(e.target.value)}
              />
            </section>
            <h1 className="textToken">Ficha de Produção</h1>
            <section className="sectionHeaderRight">
              <label htmlFor="number">N.</label>
              <input
                type="text"
                className="numberToken iFont"
                value={formData.number}
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
                <MyModal isOpen={isModalOpen} handleClose={closeModal}>
                  {errorMessage}
                </MyModal>
                <div className="flexData">
                  <p className="_textColor">CONTATO:</p>
                  <input
                    type="text"
                    className="iClientProduction iFont"
                    value={contato}
                  />
                </div>
              </article>
              <div className="flexData _marginTop">
                <p className="textColor" >CLIENTE:</p>
                <input
                  type="text"
                  className="iContactProduction iFont"
                  value={client}
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
                      value={clearColar}
                      onChange={(e) => setClearColar(e.target.value)}
                    />
                    <p className="pFild">Colar</p>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="iPalaProducao iFild"
                      value={clearPala}
                      onChange={(e) => setClearPala(e.target.value)}
                    />
                    <p className="pFild">Pala</p>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="iMangaProducao iFild"
                      value={clearManga}
                      onChange={(e) => setClearManga(e.target.value)}
                    />
                    <p className="pFild">Manga</p>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="iToraxProducao iFild"
                      value={clearTorax}
                      onChange={(e) => setClearTorax(e.target.value)}
                    />
                    <p className="pFild">Tórax</p>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="iCinturaProducao iFild"
                      value={clearCintura}
                      onChange={(e) => setClearCintura(e.target.value)}
                    />
                    <p className="pFild">Cintura</p>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="iQuadrilProducao iFild"
                      value={clearQuadril}
                      onChange={(e) => setClearQuadril(e.target.value)}
                    />
                    <p className="pFild">Quadril</p>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="iCumprProducao iFild"
                      value={clearCumprimento}
                      onChange={(e) => setClearCumprimento(e.target.value)}
                    />
                    <p className="pFild">Cumpr.</p>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="iPunhoProducao iFild"
                      value={clearPunho}
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
            <button className="screenClose typeToButton" onClick={redirectToFormulario}>Sair</button>
            <button type="submit" className="sendForm typeToButton">Enviar</button>
            <button className="printScreen typeToButton" onClick={handlePrint}>Imprimir</button>
          </div>
        </form >
      </div >
    </>
  )
}
export default Producao