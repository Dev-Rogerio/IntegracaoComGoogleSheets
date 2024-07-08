import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ReactModal from "react-modal";
import InputMask from "react-input-mask";
import "../Formulario/formulario.css";
import logoForm from "../../Img/logo branco.png";
import ModalMassage from "../Modal/modal";

ReactModal.setAppElement('#root');
function Formulario() {
  const navigate = useNavigate(); // Hook para navegação
  const redirectToFormulario = () => navigate('/');

  const [id, setId] = useState(parseInt(localStorage.getItem('ultimoId')) || 1);
  const [vendedor, setVendedor] = useState('');
  const [dataPedido, setDataPedido] = useState('');
  const [pedido, setPedido] = useState('');
  const [client, setClient] = useState('');
  const [celular, setCelular] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [referencia, setReferencia] = useState('');
  const [compra, setCompra] = useState('');
  const [taxaCartao, setTaxaCartao] = useState('');
  const [descCart, setDescCart] = useState('');
  const [taxaComissao, setTaxaComissao] = useState('');
  const [descCom, setDescCom] = useState('');
  const [valorBruto, setValorBruto] = useState('');
  const [valorLiquido, setValorLiquido] = useState('');
  const [caixa, setCaixa] = useState('');
  const [formaPagamento, setFormaPagamento] = useState('');
  const [taxaDesconto, setTaxaDesconto] = useState('');
  const [resultadoDesconto, setResultadoDesconto] = useState('');
  const [cpf, setCpf] = useState('');
  const [aniversario, setAniversario] = useState('');
  const [desconto, setDesconto] = useState('');
  const [vlCDesc, setVlCdesc] = useState(0);
  const [txCom, setTxCom] = useState(0);
  const [pagVend, setPagVend] = useState(0);
  const [valorComDesconto, setValorComDesconto] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [birthday, setBirthday] = useState('');
  const [cpfCadastrado, setCpfCadastrado] = useState(false);
  const [cpfList, setCpfList] = useState(new Set());

  useEffect(() => {
    const ultimoIdSalvo = parseInt(localStorage.getItem('ultimoId')) || 1;
    setId(ultimoIdSalvo);
  }, []);

  const handleLimparFormulario = () => {
    setId(id + 1);
    setVendedor('');
    setDataPedido('');
    setPedido('');
    setClient('');
    setCelular('');
    setTelefone('');
    setEmail('');
    setReferencia('');
    setCompra('');
    setTaxaCartao('');
    setDescCart('');
    setTaxaComissao('');
    setDescCom('');
    setValorBruto('');
    setValorLiquido('');
    setCaixa('');
    setCpf('');
    setAniversario('');
    setDesconto('');
    setValorComDesconto('');
  };
  const checkCpfRegistered = async (cpf) => {
    try {
      const response = await fetch(`http://localhost:3000/medidas/client/${cpf}`);
      if (response.ok) {
        const data = await response.json();
        return !!data.client;
      } else {
        console.error('Erro ao verificar CPF:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Erro ao verificar CPF:', error);
      return false;
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateFields()) {
      openModal();
      return;
    }
    const cpf = event.target.cpf.value;
    if (cpfList.has(cpf)) {
      alert("Este CPF já foi inserido.");
      return;
    }
    const cpfAlreadyRegistered = await checkCpfRegistered(cpf);
    if (cpfAlreadyRegistered) {
      alert("Este CPF já está cadastrado.");
      return;
    }
    const data = {
      id,
      Vendedor: vendedor,
      'Data_Pedido': dataPedido,
      Pedido: pedido,
      Cliente: client,
      cpf,
      Celular: celular,
      Telefone: telefone,
      email,
      Referencia: referencia,
      'Vl_Comp': compra,
      Taxa: taxaCartao,
      'Desc_Cartao': descCart,
      'Valor_Bruto': valorBruto,
      Comissão: taxaComissao,
      'Valor_Liq.': valorLiquido,
      Caixa: caixa,
      'Form_Pag.': formaPagamento,
      Aniversario: aniversario,
    };
    console.log('Enviando dados:', data);
    setIsLoading(true);
    try {
      const response = await fetch("https://sheetdb.io/api/v1/iacg5pfqkrtq0", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('Dados enviados com sucesso');
        handleLimparFormulario();
        setCpfList(new Set(cpfList).add(cpf));
        setDataVencimento();
      } else {
        console.error('Erro ao enviar dados', response.statusText);
      }
    } catch (error) {
      console.log('Erro ao enviar dados', error);
    } finally {
      setIsLoading(false);
    }
    handleLimparFormulario();
    localStorage.setItem('ultimoId', id + 1);
  };
  const validateFields = () => {
    let valid = true;
    let newErrors = {};
    if (!vendedor) {
      newErrors.Vendedor = 'Vendedor é obrigatório';
      valid = false;
    }
    if (!dataPedido) {
      newErrors.Data = 'Data do pedido é obrigatória';
      valid = false;
    }
    if (!pedido) {
      newErrors.Pedido = 'Pedido é obrigatório';
      valid = false;
    }
    if (!cpf) {
      newErrors.CPF = 'CPF inválido';
      valid = false;
    } else if (!validaCPF(cpf)) {
      newErrors.CPF = 'Cpf inválido';
      valid = false;
    }
    if (!client) {
      newErrors.Cliente = 'Cliente é obrigatório';
      valid = false;
    }
    if (!celular) {
      newErrors.Celular = 'Celular é obrigatório';
      valid = false;
    }
    if (!aniversario) {
      newErrors.Aniversario = 'Aniversário é obrigatório';
      valid = false
    }
    if (!email) {
      newErrors.Email = 'Email é obrigatório';
      valid = false;
    }
    if (!referencia) {
      newErrors.Referencia = 'Referência é obrigatória';
      valid = false;
    }
    if (!compra) {
      newErrors.Compra = 'Valor da compra é obrigatório';
      valid = false;
    }
    const aniversarioError = validateAniversario(aniversario);
    if (aniversarioError) {
      newErrors.Aniversario = aniversarioError;
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };
  function validaCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 ||
      cpf === "00000000000" ||
      cpf === "11111111111" ||
      cpf === "22222222222" ||
      cpf === "33333333333" ||
      cpf === "44444444444" ||
      cpf === "55555555555" ||
      cpf === "66666666666" ||
      cpf === "77777777777" ||
      cpf === "88888888888" ||
      cpf === "99999999999") {
      return false;
    }
    let add = 0;
    for (let i = 0; i < 9; i++) {
      add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(9))) {
      return false;
    }
    add = 0;
    for (let i = 0; i < 10; i++) {
      add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(10))) {
      return false;
    }
    return true;
  }
  const validateAniversario = (aniversario) => {
    if (!aniversario) return 'Data de nascimento é obrigatória';
    const today = new Date();
    const aniversarioParts = aniversario.split('/');
    const aniversarioDate = new Date(aniversarioParts[2], aniversarioParts[1] - 1, aniversarioParts[0]);

    if (aniversarioDate.getFullYear() <= 1900) {
      return 'Data de nascimento deve ser maior que 1900';
    }
    const age = today.getFullYear() - aniversarioDate.getFullYear();
    const monthDifference = today.getMonth() - aniversarioDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < aniversarioDate.getDate())
    ) {
      age == age - 1;
    }
    if (age < 0 || age > 120) {
      return 'Data de nascimento inválida';
    }
    return '';
  };
  const setInputSelection = (element, start, end) => {
    // Verifica se o elemento de entrada suporta a seleção de texto
    if (element.type === 'text' || element.type === 'search' || element.type === 'tel' || element.type === 'url' || element.type === 'password') {
      element.selectionStart = start;
      element.selectionEnd = end;
    }
  };
  const formatDate = (date) => {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  };
  const handleValorCompraChange = (event) => {
    const valor = event.target.value;
    setCompra(valor);
    const valorComDescontoCalculado = calcularDesconto(valor, desconto);
    setValorComDesconto(valorComDescontoCalculado);
  };
  const handleDescontoChange = (event) => {
    const descontoValue = event.target.value;
    setDesconto(descontoValue);
    const valorComDescontoCalculado = calcularDesconto(compra, descontoValue);
    setValorComDesconto(valorComDescontoCalculado);
  };
  const handleTaxaDescontoChange = (event) => {
    const txDesconto = event.target.value;
    setTaxaDesconto(txDesconto);
    const desconto = calcularDesconto(valorBruto, txDesconto);
    setResultadoDesconto(desconto);
  };
  const handleTaxaCartaoChange = (event) => {
    const txCartao = event.target.value;
    setTaxaCartao(txCartao);
    const valorBase = desconto ? parseFloat(valorComDesconto) : parseFloat(compra);
    const taxaDoCartao = parseFloat(txCartao);
    const valorDescontoCartão = (valorBase * taxaDoCartao) / 100;
    setDescCart(valorDescontoCartão.toFixed(2));
    const novoValorBruto = calcularValorBruto(valorBase, valorDescontoCartão);
    setValorBruto(novoValorBruto);
  };
  const handleTaxaComissaoChange = (event) => {
    const txComissao = event.target.value;
    setTaxaComissao(txComissao);
    const valorDaCompra = parseFloat(compra);
    const taxaDeComissao = parseFloat(txComissao)
    if (!isNaN(valorDaCompra) && !isNaN(taxaDeComissao)) {
      const descCom = (valorDaCompra * taxaDeComissao) / 100 + valorDaCompra;
      setDescCom(descCom.toFixed(2));
      const valorLiquido = descCom - valorDaCompra;
      setValorLiquido(valorLiquido.toFixed(2))
      const valorEmCaixa = valorBruto - valorLiquido;
      setCaixa(valorEmCaixa.toFixed(2));
    } else {
      setDescCom('');
      setValorLiquido('');
      setCaixa('');
    }
  };
  const handleFormaPagamentoChange = (event) => {
    setFormaPagamento(event.target.value);
    // handleParcelaChange();
  };
  const calcularDesconto = (valor, desconto) => {
    const valorFloat = parseFloat(valor);
    const descontoFloat = parseFloat(desconto);
    const valorComDesconto = valorFloat - (valorFloat * (descontoFloat / 100));
    return valorComDesconto.toFixed(2);
  };
  const calcularValorBruto = (valorBase, valorDescontoCartão) => {
    if (!isNaN(valorBase) && !isNaN(valorDescontoCartão)) {
      return (valorBase - valorDescontoCartão).toFixed(2);
    } else {
      return '';
    }
  };
  const handleAniversarioChange = (event) => {
    const rawValue = event.target.value.replace(/\D/g, '');
    const day = rawValue.substring(0, 2);
    const month = rawValue.substring(2, 4);
    const year = rawValue.substring(4, 8);
    const formattedValue = `${day}/${month}/${year}`;
    setAniversario(formattedValue);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const fetchClientNameByCpf = async (cpf) => {
    try {
      const response = await fetch(`http://localhost:3000/medidas/client/${cpf}`);
      if (response.ok) {
        const data = await response.json();
        if (data.client) {
          setCliente(data.client.name);
        }
      } else {
        console.error('Erro ao buscar nome do cliente pelo CPF:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao buscar nome do cliente pelo CPF:', error);
    }
  };
  return (
    <div className='containerForm'>
      {/* <form onSubmit={handleSubmit} > */}
      <form onSubmit={handleSubmit} >
        <div className="menuForm">
          <div className="formImg">
            <img className="imgForm" src={logoForm} alt="" />
          </div>
          <h1 className='form-h1'>Relatório de vendas</h1>
          <label className="sairForm" htmlFor="" onClick={redirectToFormulario}>Sair</label>
        </div>
        <div className="rowsOne">
          <div className='id'>
            <label htmlFor="">
              <span className='formLabel'>Id</span>
              <input
                className='iId'
                type="text"
                name='id'
                value={id}
                readOnly
              />
            </label>
          </div>
          <div className='vendedor'>
            <label htmlFor="vendedor">
              <span className='formLabel'>Vendedor</span>
              <input
                className={`iVend ${errors.vendedor ? 'input-error' : ''}`}
                type="text"
                id="vendedor"
                name='vendedor'
                placeholder="Nome"
                value={vendedor}
                onChange={(e) => setVendedor(e.target.value)}
              />
              <span className="error-message"></span>
            </label>
          </div>
          <div className="data">
            <label htmlFor="dataPedido">
              <span className='formLabel'>Data</span>
              <input
                className="iData"
                mask="99/99/9999"
                type="date"
                id="dataPedido"
                name="data"
                placeholder="DD/MM/AAAA"
                value={formatDate(dataPedido)}
                onChange={(e) => setDataPedido(e.target.value)}
              />
            </label>
          </div>
          <div className='pedido'>
            <label htmlFor="pedido">
              <span className='formLabel'>Pedido</span>
              <input
                className={`iPed ${errors.pedido ? 'input-error' : ''}`}
                type="number"
                id="pedido"
                name='pedido'
                placeholder="Pedido"
                value={pedido}
                onChange={(e) => setPedido(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="rowsTwo">
          <div className="cpf">
            <label htmlFor="cpf">
              <span className='formLabel'>Cpf</span>
              <InputMask
                className={`iCpf errors.CPF ? 'input-error' : ""`}
                mask="999.999.999-99"
                id="cpf"
                type="text"
                name='cpf'
                placeholder="Cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </label>
          </div>
          <div className='client'>
            <label htmlFor="cliente">
              <span className='formLabel'>Cliente</span>
              <input
                className={`iClient ${errors.client ? 'input-error' : ''}`}
                type="text"
                id="cliente"
                name='clinte'
                placeholder="Cliente"
                value={client}
                onChange={(e) => setClient(e.target.value)}
              />
            </label>
          </div>
          <div className='celular'>
            <label htmlFor="celular">
              <span className='formLabel'>Celular</span>
              <InputMask
                className={`iCel ${errors.celular ? 'input-error' : ''}`}
                mask="(99) 99999-9999"
                type="text"
                id="celular"
                name='celular'
                placeholder="Celular"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
              />
            </label>
          </div>
          <div className='telefone'>
            <label htmlFor="telefone">
              <span className='formLabel'>Telefone</span>
              <InputMask
                className='iFone'
                mask="(11) 9999-9999"
                type="text"
                id="telefone"
                name='telefone'
                placeholder="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="rowsThree">
          <div className="aniversario">
            <label htmlFor="aniversario">
              <span className='formLabel'>Aniversário</span>
              <input
                className={`iAniversario ${errors.aniversario ? 'input-error' : ''}`}
                // mask="99/99/9999"
                type="date"
                id="aniversario"
                name="data"
                placeholder="DD/MM/AAAA"
                value={aniversario}
                onChange={(e) => setAniversario(e.target.value)}
              />
            </label>
          </div>
          <div className="email">
            <label htmlFor="email">
              <span className='formLabel'>E-mail</span>
              <input
                className={`iEmail ${errors.email ? 'input-error' : ''}`}
                type="email"
                id="email"
                name="data[email]"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="referencia">
            <label htmlFor="referencia">
              <span className='formLabel'>Origem / Indicação</span>
              <input
                className={`iRef ${errors.referencia ? 'input-error' : ''}`}
                type="text"
                id="referencia"
                name="referencia"
                placeholder="Referência"
                value={referencia}
                onChange={(e) => setReferencia(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="rowsFour">
          <div className="valor">
            <label className="labelForm" htmlFor="compra">
              <span className='formLabel'>Vl./Comp.</span>
              <input
                className='iVal'
                type="number"
                id="valorCompra"
                name="Vl./Comp"
                placeholder="0,00"
                value={compra}
                onChange={handleValorCompraChange}
              />
            </label>
          </div>
          <div className="desconto">
            <label className="labelForm" htmlFor="">
              <span className='formLabel'>Desconto</span>
              <input
                className='iDesconto'
                type="number"
                id="desconto" t
                name="Vl./Comp"
                placeholder="0,00"
                value={desconto}
                onChange={handleDescontoChange}
              />
            </label>
          </div>
          <div className="valor_desconto">
            <label className="labelForm" htmlFor="">
              <span className='formLabel'>Vl./C.Desc</span>
              <input
                className='iValor_desconto'
                type="number"
                id="vldesconto" t
                name="Vl./C.Desc"
                placeholder="0,00"
                value={valorComDesconto}
                readOnly
              />
            </label>
          </div>
          <div className="taxaPercent">
            <label htmlFor="taxaCartao">
              <span className='formLabel'>Tx./Cart.</span>
              <input
                className='iTaxaCartao'
                type="number"
                id="taxaCartao"
                name='taxaCartao'
                placeholder="0,0"
                value={taxaCartao}
                onChange={handleTaxaCartaoChange}
              />
            </label>
          </div>
          <div className="descCartao">
            <label htmlFor="descCart">
              <span className='formLabel'>Des./Cart.</span>
              <input
                className='iDesc'
                type="number"
                name='descCart'
                placeholder="0,00"
                value={descCart}
                readOnly
              />
            </label>
          </div>
          <div className="bruto">
            <label htmlFor="">
              <span className='formLabel'>Vl./Bru.</span>
              <input
                className='iBruto'
                type="text"
                name='Valor Bruto'
                placeholder="0,00"
                value={valorBruto}
              />
            </label>
          </div>
          <div className="comissao">
            <label htmlFor="taxaComissao">
              <span className='formLabel'>Tx/Com.</span>
              <input
                className='iCom'
                type="number"
                id="taxaComissao"
                name='taxaComissao'
                placeholder="0,0"
                value={taxaComissao}
                onChange={handleTaxaComissaoChange}
              />
            </label>
          </div>
          <div className="liquido">
            <label htmlFor="valorLiquido">
              <span className='formLabel'>Pag./Vend</span>
              <input
                className='iLiq'
                type="number"
                id="valorLiquido"
                name='valorLiquido'
                placeholder="0,00"
                value={valorLiquido}
                readOnly
              />
            </label>
          </div>
          <div className="caixa">
            <label htmlFor="caixa">
              <span className='formLabel'>Caixa</span>
              <input
                className='iCaixa'
                id="caixa"
                type="number"
                name='caixa'
                placeholder="0,00"
                value={caixa}
                readOnly
              />
            </label>
          </div>
        </div>
        <div className="rows-Five">
          <div className="fiveAndsix">
            <div className="rowsFive">
              <label htmlFor="" className="lFomrPag">Forma de Pagamento</label>
              <label htmlFor="" className="LSalvarDados">Salvar os dados</label>
            </div>
          </div>
          <div className="rowsSix">
            <div className="iOpton">
              <div className="divOptionForm">
                <label htmlFor="" className="formaPgto">Forma/Pgto.</label>
                <label htmlFor="formaPagamento">
                  <span className='formLabel'></span>
                  <select
                    className="iSection"
                    type="text"
                    id="formaPagamento"
                    name='formaPagamento'
                    value={formaPagamento}
                    onChange={handleFormaPagamentoChange}
                  >
                    <option value="" className="optionForm" >Debito/ Cartão</option>
                    <option value="" className="optionForm" >Debito/ Pix</option>
                    <option value="AV" className="optionForm" >Dinheiro</option>
                    <option value="Parc./ 1 vezes" className="optionForm" >Parc./ 1 vezes</option>
                    <option value="Parc./ 2 vezes" className="optionForm" >Parc./ 2 vezes</option>
                    <option value="Parc./ 3 vezes" className="optionForm" >Parc./ 3 vezes</option>
                  </select>
                </label>
              </div>
              <div className="valorForm">
                <label htmlFor="" className="parcelamento">Saldo</label>
                {(formaPagamento === 'Dinheiro' || formaPagamento === 'Debito/ Pix') ? (
                  <input
                    className="iValor"
                    type="text"
                    name='Form/Pag'
                    value={compra}
                    readOnly
                  />
                ) : formaPagamento === 'Parc./ 1 vezes' ? (
                  <input
                    className="iValor"
                    type="text"
                    name='Form/Pag'
                    value={(valorBruto / 1).toFixed(2)}
                    readOnly
                  />
                ) : formaPagamento === 'Parc./ 2 vezes' ? (
                  <input
                    className="iValor"
                    type="text"
                    name='Form/Pag'
                    value={(valorBruto / 2).toFixed(2)}
                    readOnly
                    required
                  />
                ) : (
                  <input
                    className="iValor"
                    type="text"
                    name='Form/Pag'
                    value={(valorBruto / 3).toFixed(2)}
                    readOnly
                    required
                  />
                )}
              </div>
              <div className="vencimentoForm">
                <label className="iDayMonth" type="text">Tx./Antecip.</label>
                <input className="iDayMonth2" type="text" placeholder="%" value={taxaDesconto} onChange={handleTaxaDescontoChange} />
                <input className="iDayMonth3" type="text" placeholder="$" value={resultadoDesconto} readOnly />
              </div>
            </div>
            <div className="botoes">
              <div className="border">
                <button type='submit' disabled={isLoading} >{isLoading ? 'enviando...' : 'enviar'}</button>
                <button type="button" onClick={handleLimparFormulario}  >Limpar</button>
              </div>
            </div>
          </div>
        </div>
        <p className="copy">Este projeto foi desenvolvido por - Rogério de Almeia - &#169; 2024</p>
      </form >
      <ModalMassage isOpen={isModalOpen} onClose={closeModal} errors={errors} />
    </div >
  );
}
export default Formulario
