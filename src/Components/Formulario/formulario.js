import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import "../Formulario/formulario.css";
import logoForm from "../../Img/logo branco.png"


function Formulario() {
  const [id, setId] = useState(parseInt(localStorage.getItem('ultimoId')));
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
  const [compraParcelada, setCompraParcelada] = useState('');
  const [dataParcela, setDataParcela] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');
  const [dataVencimento2, setDataVencimento2] = useState('');
  const [dataVencimento3, setDataVencimento3] = useState('');
  const [taxaAntecipacao, setTaxaAntecipacao] = useState('');
  const [taxaDesconto, setTaxaDesconto] = useState('');
  const [resultadoDesconto, setResultadoDesconto] = useState('');
  const [cpf, setCpf] = useState('');

  let ultimoIdSalvo = parseInt(localStorage.getItem('ultimoId')) || 1;

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
    setCpf('')
  };

  const handlePreencherId = () => {
    const ultimoIdSalvo = localStorage.getItem('ultimoId');
    if (ultimoIdSalvo) {
      setId(parseInt(ultimoIdSalvo))
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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
    };

    console.log('Enviando dados:', data);

    try {
      console.log(data)
      const response = await fetch("https://sheetdb.io/api/v1/iacg5pfqkrtq0", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('Dados enviados com sucesso');
        handleLimparFormulario(''); // Limpa o formulário após enviar
        setDataVencimento();
      } else {
        console.error('Erro ao enviar dados', response.statusText);
      }
    } catch (error) {
      console.log('Erro ao enviar dados', error);
    }
    handleLimparFormulario();
    localStorage.setItem('ultimoId', id + 1);
  };

  const calcularDesconto = (valorBruto, taxaDesconto) => {
    const valorBrutoFloat = parseFloat(valorBruto);
    const taxaDescontoFloat = parseFloat(taxaDesconto);
    const resultadoDesconto = valorBrutoFloat * (taxaDescontoFloat / 100);
    return resultadoDesconto.toFixed(2);
  };


  const calcularValorBruto = (valorDaCompra, valorDescontoCartão) => {
    if (!isNaN(valorDaCompra) && !isNaN(valorDescontoCartão)) {
      return (valorDaCompra - valorDescontoCartão).toFixed(2);
    } else {
      return '';
    }
  };

  const handleValorCompraChange = (event) => {
    const valor = event.target.value;
    setCompra(valor)
    const valorDaCompra = parseFloat(valor);
    const valorDescontoCartão = parseFloat(descCart);
    const novoValorBruto = calcularValorBruto(valorDaCompra, valorDescontoCartão);
    setValorBruto(novoValorBruto);
    const valorLiquido = novoValorBruto - parseFloat(descCom);
    setValorLiquido(valorLiquido.toFixed(2));
  }

  const handleTaxaDescontoChange = (event) => {
    const txDesconto = event.target.value;
    setTaxaDesconto(txDesconto);
    const desconto = calcularDesconto(valorBruto, txDesconto); // Passar os parâmetros aqui
    setResultadoDesconto(desconto);
  };


  useEffect(() => {
    setId(ultimoIdSalvo);
  }, []);


  useEffect(() => {
    const valorDaCompra = parseFloat(compra);
    const valorDescontoCartão = parseFloat(descCart);
    if (!isNaN(valorDaCompra) && !isNaN(valorDescontoCartão)) {
      const valorBruto = valorDaCompra - valorDescontoCartão;
      setValorBruto(valorBruto.toFixed(2));
    } else {
      setValorBruto('')
    }
  }, [compra, descCart])

  useEffect(() => {
    const ultimoIdSalvo = localStorage.getItem('ultimoId')
    if (ultimoIdSalvo) {
      setId(parseInt(ultimoIdSalvo));
    }
  }, [])


  const handleTaxaCartaoChange = (event) => {
    const txCartao = event.target.value;
    setTaxaCartao(txCartao);
    const valorDaCompra = parseFloat(compra);
    const taxaDoCartao = parseFloat(txCartao);
    const valorDescontoCartão = (valorDaCompra * taxaDoCartao) / 100;
    setDescCart(valorDescontoCartão.toFixed(2));
    const novoValorBruto = calcularValorBruto(valorDaCompra, valorDescontoCartão);
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
      setCaixa('')
    }
    console.log({ taxaComissao, descCom, valorDaCompra });
  }

  const handleFormaPagamentoChange = (event) => {
    setFormaPagamento(event.target.value);
    handleParcelaChange();
  }

  const handleParcelaChange = () => {
    if (formaPagamento === 'Parc./ 1 vezes') {
      // lógica para 1 parcela
    } else if (formaPagamento === 'Parc./ 2 vezes') {
      // lógica para 2 parcelas
    } else if (formaPagamento === 'Parc./ 3 vezes') {
      // lógica para 3 parcelas
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
          <label className="sairForm" htmlFor="">Sair</label>
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
                className='iVend'
                type="text"
                id="vendedor"
                name='vendedor'
                placeholder="Nome"
                value={vendedor}
                onChange={(e) => setVendedor(e.target.value)}
                required

              />
            </label>
          </div>

          <div className="data">
            <label htmlFor="data">
              <span className='formLabel'>Data</span>
              <InputMask
                className='iData'
                mask="99/99/9999"
                type="text"
                id="data"
                name="data"
                placeholder="DD/MM/AAAA"
                value={dataPedido}
                onChange={(e) => setDataPedido(e.target.value)}
                required
              />

            </label>
          </div>

          <div className='pedido'>
            <label htmlFor="pedido">
              <span className='formLabel'>Pedido</span>
              <input
                className='iPed'
                type="number"
                id="pedido"
                name='pedido'
                placeholder="Pedido"
                value={pedido}
                onChange={(e) => setPedido(e.target.value)}
                required
              />
            </label>
          </div>
        </div>

        <div className="rowsTwo">
          <div className='client'>
            <label htmlFor="cliente">
              <span className='formLabel'>Cliente</span>
              <input
                className='iClint'
                type="text"
                id="cliente"
                name='clinte'
                placeholder="Cliente"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="infoPersona">
            <label htmlFor="">
              <span className='formLabel'>Cpf.</span>
              <input className="iCpf"
                type="text"
                name='cpf'
                placeholder="Cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
            </label>
          </div>

          <div className='celular'>
            <label htmlFor="celular">
              <span className='formLabel'>Celular</span>
              <InputMask
                className='iCel'
                mask="(99) 99999-9999"
                type="text"
                id="celular"
                name='celular'
                placeholder="Celular"
                required
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
                required
              />
            </label>
          </div>

        </div>
        <div className="rowsThree">
          <div className="email">
            <label htmlFor="email">
              <span className='formLabel'>E-mail</span>
              <input
                className='iEmail'
                type="email"
                id="email"
                name="data[email]"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="referencia">
            <label htmlFor="referencia">
              <span className='formLabel'>Origem / Indicação</span>
              <input
                className='iRef'
                type="text"
                id="referencia"
                name="referencia"
                placeholder="Referência"
                value={referencia}
                onChange={(e) => setReferencia(e.target.value)}
                required
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
                id="compra"
                name="Vl./Comp"
                placeholder="0,00"
                value={compra}
                onChange={handleValorCompraChange}
                required
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
                required
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
                onChange={(e) => setDescCart(e.target.value)}
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
                required
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
                type="number"
                name='caixa'
                placeholder="0,00"
                value={caixa}
                readOnly
              />
            </label>
          </div>
        </div>
        <div className="fiveAndsix">
          <div className="rowsFive">
            <label htmlFor="" className="lFomrPag">Forma de Pagamento</label>
            <label htmlFor="" className="LSalvarDados">Salvar os dados</label>
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
                    required
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
                    required
                  />
                ) : formaPagamento === 'Parc./ 1 vezes' ? (
                  <input
                    className="iValor"
                    type="text"
                    name='Form/Pag'
                    value={(valorBruto / 1).toFixed(2)}
                    readOnly
                    required
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
              <button type='submit' >Enviar</button>
              <button type="button" onClick={handleLimparFormulario}  >Limpar</button>
            </div>
          </div>
        </div>
        <p className="copy">Este projeto foi desenvolvido por - Rogério de Almeia - &#169; 2024</p>

      </form >
    </div >
  );
}

export default Formulario
