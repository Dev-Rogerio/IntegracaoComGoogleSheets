import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ReactModal from "react-modal";
import InputMask from "react-input-mask";
import logoForm from "../../Img/logo branco.png";
import ModalMassage from "../Modal/modal";
import ModalEnvioForm from "./modalEnvioForm.jsx";
import Tabela from '../Formulario/clientTabela.jsx'

import "../Formulario/formulario.css";

ReactModal.setAppElement('#root');

const Formulario = () => {
  const navigate = useNavigate();

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
  const [desconto, setDesconto] = useState('');
  const [valorComDesconto, setValorComDesconto] = useState('');
  const [formaPagamento, setFormaPagamento] = useState('');
  const [saldo, setSaldo] = useState(0);
  const [taxaCartao, setTaxaCartao] = useState('');
  const [descCart, setDescCart] = useState('');
  const [taxaComissao, setTaxaComissao] = useState('');
  const [descCom, setDescCom] = useState('');
  const [valorBruto, setValorBruto] = useState('');
  const [valorLiquido, setValorLiquido] = useState('');
  const [caixa, setCaixa] = useState('');
  const [taxaDesconto, setTaxaDesconto] = useState('');
  const [resultadoDesconto, setResultadoDesconto] = useState('');
  const [cpf, setCpf] = useState('');
  const [aniversario, setAniversario] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [cpfList, setCpfList] = useState(new Set());
  const [dadosFormulario, setDadosFormulario] = useState([]);
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);



  useEffect(() => {
    // Apenas calcula o desconto com base no valor bruto e a taxa de desconto
    setValorComDesconto((valorBruto * (1 - taxaDesconto)).toFixed(2));
  }, [valorBruto, taxaDesconto]);
  // Recupera o último ID salvo no localStorage
  useEffect(() => {
    const ultimoIdSalvo = parseInt(localStorage.getItem('ultimoId')) || 1;
    setId(ultimoIdSalvo);
  }, []);
  // Recupera a lista de CPFs ao carregar a página
  useEffect(() => {
    const cpfListFromLocalStorage = loadCpfList();
    setCpfList(cpfListFromLocalStorage);
  }, [])
  // Calcular o valor com desconto
  useEffect(() => {
    setValorComDesconto((valorBruto * (1 - taxaDesconto)).toFixed(2));
  }, [valorBruto, taxaDesconto]);
  // Recupera a lista de CPFs ao carregar a página
  useEffect(() => {
    const cpfListFromLocalStorage = loadCpfList();
    setCpfList(cpfListFromLocalStorage);
  }, [])
  // Update the value with discount
  useEffect(() => {
    setValorComDesconto((valorBruto * (1 - taxaDesconto)).toFixed(2));
  }, [valorBruto, taxaDesconto]);
  // Retrieve the last saved ID from localStorage
  useEffect(() => {
    const ultimoIdSalvo = parseInt(localStorage.getItem('ultimoId')) || 1;
    setId(ultimoIdSalvo);
  }, []);
  // Save CPF list whenever it changes
  useEffect(() => {
    savedCpfList(cpfList); // Save the CPF list here
  }, [cpfList]);
  // Load the CPF list when the page loads
  useEffect(() => {
    const cpfListFromLocalStorage = loadCpfList();
    setCpfList(cpfListFromLocalStorage);
  }, [])
  // Load the CPF list when the component mounts
  useEffect(() => {
    const cpfListFromLocalStorage = loadCpfList();
    setCpfList(cpfListFromLocalStorage);
  }, [])
  // Update the value with discount
  useEffect(() => {
    setValorComDesconto((valorBruto * (1 - taxaDesconto)).toFixed(2));
  }, [valorBruto, taxaDesconto]);
  // Load the CPF list when the component mounts
  useEffect(() => {
    const cpfListFromLocalStorage = loadCpfList();
    setCpfList(cpfListFromLocalStorage);
  }, [])
  const handleSair = () => {
    window.location.href = "http://localhost:3000/menu"
  }

  // Função para fechar a primeira modal
  const closeFirstModal = () => {
    setIsFirstModalOpen(false);
  };
  // Função para fechar a modal de erros
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  // Function to load CPF list from localStorage
  const loadCpfList = () => {
    const savedCpfList = localStorage.getItem('cpfList');
    return savedCpfList ? new Set(JSON.parse(savedCpfList)) : new Set();
  };
  // Function to save the CPF list to localStorage
  const savedCpfList = (list) => {
    localStorage.setItem('cpfList', JSON.stringify([...list]));
  };
  // Limpa o formulário após o envio
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
  // Lida com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("O botão Enviar foi clicado");
    // Função para validar o CPF
    function validarCPF(cpf) {
      cpf = cpf.replace(/[^\d]+/g, '');
      if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
      }
      let soma = 0;
      let resto;
      for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
      }
      resto = (soma * 10) % 11;
      if (resto === 10 || resto === 11) resto = 0;
      if (resto !== parseInt(cpf.substring(9, 10))) return false;
      soma = 0;
      for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
      }
      resto = (soma * 10) % 11;
      if (resto === 10 || resto === 11) resto = 0;
      if (resto !== parseInt(cpf.substring(10, 11))) return false;
      return true;
    }
    let errorMessage = {};
    if (!vendedor || vendedor.trim() === '') {
      errorMessage.vendedor = 'O campo Vendedor precisa ser preenchido.';
    }
    if (!dataPedido || dataPedido.trim() === '') {
      errorMessage.dataPedido = 'O campo data do pedido precisa ser preenchido';
    }
    if (!pedido || pedido.trim() === '') {
      errorMessage.pedido = 'O campo pedido precisa ser preenchido.';
    }
    if (cpfList.has(cpf)) {
      errorMessage.cpf = 'Este CPF já está cadastrado.';
    }
    if (!validarCPF(cpf)) {
      errorMessage.cpf = 'CPF inválido.';
    }
    if (!client || client.trim() === '') {
      errorMessage.nome = 'O Campo cliente precisa ser preenchido.';
    }
    if (!email || email.trim() === '') {
      errorMessage.email = 'O campo e-mail precisa ser preenchido.';
    }
    if (!celular || celular.trim() === '') {
      errorMessage.celular = 'O campo celular precisa ser preenchido';
    }
    if (!aniversario || aniversario.trim() === '') {
      errorMessage.aniversario = "O campo aniversário precisa ser preenchido";
    }
    if (!referencia || referencia.trim() === '') {
      errorMessage.referencia = 'O campo referência precisa ser preenchido';
    }
    if (typeof compra !== 'string' || compra.trim() === '') {
      errorMessage.compra = 'O valor da compra precisa ser preenchido';
    }
    if (!taxaCartao || taxaCartao.trim() === '') {
      errorMessage.taxaCartao = 'Preencha a taxa do cartão';
    }
    if (!taxaComissao || taxaComissao.trim() === '') {
      errorMessage.taxaComissao = "Preencha a taxa de comissão "
    }
    if (!formaPagamento || formaPagamento.trim() === '') {
      errorMessage.formaPagamento = "Qual a forma de pagamento";
    }
    if (Object.keys(errorMessage).length > 0) {
      setErrors(errorMessage);
      setIsModalOpen(true);
      return;
    }
    const novoDado = {
      id: Date.now(),
      cpf: cpf,
      cliente: client,
      telefone: telefone,
    };
    setDadosFormulario([...dadosFormulario, novoDado]);
    const updatedCpfList = new Set(cpfList).add(cpf);
    setCpfList(updatedCpfList);
    savedCpfList(updatedCpfList);

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
      Comissao: taxaComissao,
      'Valor_Liq.': valorLiquido,
      Caixa: caixa,
      'Form_Pag.': formaPagamento,
      Aniversario: aniversario,
      Desconto: desconto,
    };
    // Simulação de salvar no localStorage (mesma lógica)
    const dadosSalvos = JSON.parse(localStorage.getItem('formulario')) || [];
    const novoDadoComId = { id: Date.now(), ...data };
    dadosSalvos.push(novoDadoComId);
    localStorage.setItem('formulario', JSON.stringify(dadosSalvos));

    localStorage.setItem('ultimoId', id + 1);
    handleLimparFormulario();
    setIsLoading(true);
    try {
      // Enviar dados para o Google Sheets
      const response = await fetch("https://sheetdb.io/api/v1/iacg5pfqkrtq0", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      setIsLoading(false);
      // Após o sucesso do envio, abrir a modal de sucesso
      setIsFirstModalOpen(true);

    } catch (error) {
      console.error("Ocorreu um erro ao enviar os dados para o Google Sheets", error);
      setIsLoading(false);
      // Mesmo em caso de erro, você pode querer exibir a modal
      setIsFirstModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };
  const handleFormaPagamentoChange = (event) => {
    const forma = event.target.value;
    setFormaPagamento(forma);
    // Se a forma de pagamento for "Debito/ Pix" ou "Dinheiro", mostrar o valor com desconto no campo saldo
    if (forma === "Debito/Pix" || forma === "Dinheiro" || forma === "Debito/Cartao") {
      // Se a forma de pagamento for "Débito/Pix" ou "Dinheiro", o saldo recebe o valor com desconto
      setSaldo(valorComDesconto);
    } else if (forma === "Parc./1vez") {
      setSaldo((compra / 1).toFixed(2));
    } else if (forma === "Parc./2vezes") {
      setSaldo((compra / 2).toFixed(2));
    } else if (forma === "Parc./3vezes") {
      setSaldo((compra / 3).toFixed(2));
    }
    console.log("Forma de pagamento:", forma);
    console.log("Saldo atualizado:", saldo); // Verificar se o saldo está sendo atualizado
  };
  // Verifica se o CPF já está cadastrado
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
  const handleCompraChange = (event) => {
    setCompra(event.target.value); // Isso deve garantir que compra seja uma string
  };
  const validateFields = () => {
    let valid = true;
    let newErrors = {};

    if (!vendedor) {
      newErrors.Vendedor = 'Vendedor é obrigatória';
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
  const validateAniversario = (date) => {
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!regex.test(date)) {
      return "Formato de data inválido. Use DD/MM/AAAA.";
    }
    const [day, month, year] = date.split('/').map(Number);
    const isValidDate = day >= 1 && day <= 31 && month >= 1 && month <= 12 && year > 1900;
    if (!isValidDate) {
      return "Data invalida";
    }
    return null;
  };
  const setInputSelection = (element, start, end) => {
    if (element.type === 'text' || element.type === 'search' || element.type === 'tel' || element.type === 'url' || element.type === 'password') {
      element.selectionStart = start;
      element.selectionEnd = end;
    }
  };
  const formatToDisplay = (date) => {
    if (!date) return '';
    const [year, month, day] = date.split('-');
    return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
  };
  const formatToDatabase = (date) => {
    if (!date) return '';
    const [day, month, year] = date.split('/');
    if (!year || !month || !day) return '';
    return `${year}-${month}-${day}`;
  };
  const handleValorCompraChange = (event) => {
    const valor = parseFloat(event.target.value) || 0;
    setCompra(valor.toString());
    calcularValorComDesconto(valor, desconto);
  };
  const handleDescontoChange = (event) => {
    const descontoValue = parseFloat(event.target.value) || 0;
    setDesconto(descontoValue);
    calcularValorComDesconto(compra, descontoValue)
  };
  // Função para calcular o valor com desconto
  const calcularValorComDesconto = (valorCompra, desconto) => {
    // Aplicando o desconto em porcentagem
    const valorDesc = valorCompra - (valorCompra * (desconto / 100));
    // Armazena o valor com desconto
    setValorComDesconto(valorDesc.toFixed(2));
  }
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
  const handleChange = (e) => {
    const { value } = e.target;
    const formattedValue = value.replace(/[^0-9/]/g, '');
    setDataPedido(formattedValue);
  };
  const handleCpfChange = (event) => {
    const formattedCpf = event.target.value;
    setCpf(formattedCpf);
  };

  return (
    <form onSubmit={handleSubmit} className='containerForm'>
      <div>
        <div className="menuForm">
          <div className="formImg">
            <img className="imgForm" src={logoForm} alt="" />
          </div>
          <h1 className='form-h1'>Relatório de vendas</h1>
          <label className="sairForm" htmlFor="" onClick={handleSair} >Sair</label>
        </div>
      </div>
      <div className="rowsOne">
        <div>
          <label htmlFor="">
            <span className='formLabel'>N.</span>
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
              placeholder="Digite o vendedor"
              value={vendedor}
              onChange={(e) => setVendedor(e.target.value)}
              autoComplete="off"
            />
            <span className="error-message"></span>
          </label>
        </div>
        <div className="data">
          <label htmlFor="dataPedido">
            <span className='formLabel'>Date do Pedido</span>
            <InputMask
              className="iData"
              mask="99/99/9999"
              type="text"
              id="dataPedido"
              name="data"
              placeholder="DD/MM/AAAA"
              value={dataPedido}
              onChange={handleChange}
              autoComplete="off"
            />
          </label>
        </div>
        <div className='pedido'>
          <label htmlFor="pedido">
            <span className='formLabel'>Número do Pedido</span>
            <input
              className={`iPed ${errors.pedido ? 'input-error' : ''}`}
              type="number"
              id="pedido"
              name='pedido'
              placeholder="Pedido"
              value={pedido}
              onChange={(e) => setPedido(e.target.value)}
              autoComplete="off"
            />
          </label>
        </div>
      </div>
      <div className="rowsTwo">
        <div className="cpf">
          <label htmlFor="cpf">
            <span className='formLabel'>Cpf</span>
            <InputMask
              className={`iCpf  ${errors.CPF ? 'input-error' : ""}`}
              mask="999.999.999-99"
              id="cpf"
              type="text"
              name='cpf'
              placeholder="Cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              autoComplete="off"
            >
            </InputMask>
          </label>
        </div>
        <div className='client'>
          <label htmlFor="cliente">
            <span className='formLabel'>Cliente</span>
            <input
              className={`iClient ${errors.client ? 'input-error' : ''}`}
              type="text"
              id="cliente"
              name='cliente'
              placeholder="Cliente"
              value={client}
              onChange={(e) => setClient(e.target.value)}
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
              mask="99/99/9999"
              type="text"
              id="aniversario"
              name="data"
              placeholder="DD/MM/AAAA"
              value={aniversario}
              onChange={handleAniversarioChange}
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
            />
          </label>
        </div>
        <div className="desconto">
          <label className="labelForm" htmlFor="">
            <span className='formLabel'>Desconto</span>
            <input
              className='iDesconto'
              type="number"
              id="desconto"
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
              id="vldesconto"
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
      <div className="rowsFive">
        <div className="rowsFiveColumnLefth">
          <label htmlFor="" className="lFomrPag">Forma de Pagamento</label>
        </div>
        <div className="rowsFiveColumnRight">
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
                <option className="optionForm" >Selecione a forma de pgto.</option>
                <option value="Debito/Cartao" className="optionForm" >Debito/Cartao</option>
                <option value="Debito/Pix" className="optionForm" >Debito/Pix</option>
                <option value="Dinheiro" className="optionForm" >Dinheiro</option>
                <option value="Parc./1vez" className="optionForm" >Parc./1vez</option>
                <option value="Parc./2vezes" className="optionForm" >Parc./2vezes</option>
                <option value="Parc./3vezes" className="optionForm" >Parc./3vezes</option>
              </select>
            </label>
          </div>

          <div className="valorForm">
            <label htmlFor="" className="parcelamento">Saldo</label>
            <input
              className="iValor"
              type="text"
              name='Form/Pag'
              value={saldo} // Aqui o valor será o estado 'saldo'
              readOnly
            />
          </div>
          <div className="vencimentoForm">
            <label className="iDayMonth" type="text">Tx./Antecip.</label>
            <input className="iDayMonth3" type="text" placeholder="$" value={resultadoDesconto} readOnly />
          </div>
        </div>
        <div className="botoes">
          <div className="border">
            <button type="submit" disabled={isLoading} >{isLoading ? 'enviando...' : 'enviar'}</button>
            <button type="button" onClick={handleLimparFormulario}  >Limpar</button>
          </div>
        </div>
      </div>
      <p className="copy">Este projeto foi desenvolvido por - Rogério de Almeia - &#169; 2024</p>
      <ModalMassage isOpen={isModalOpen} onClose={handleCloseModal} errors={errors} />
      <ModalEnvioForm isOpen={isFirstModalOpen} closeModal={closeFirstModal} />
    </form>
  );
}
export default Formulario;



