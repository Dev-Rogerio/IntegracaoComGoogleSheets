import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import "../Formulario/formulario.css";
import logoForm from "../../Img/logo branco.png"

// https://www.youtube.com/watch?v=w7SUjrKCdwE
// https://chat.openai.com/c/5b406498-8b73-4cb3-86ac-68312bfd9e7c
{/* <form onSubmit={handleSubmit} action="https://api.sheetmonkey.io/form/eTzUtbRMsdFfDLSZMJXfo6" method='post'   > */ }

function Formulario() {

  const [id, setId] = useState(1);
  const [vendedor, setVendedor] = useState('');
  const [data, setData] = useState('');
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

  let ultimoIdSalvo = parseInt(localStorage.getItem('ultimoId')) || 1;

  const handleLimparFormulario = () => {
    setVendedor('');
    setData('');
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
  };

  const handlePreencherId = () => {
    const ultimoIdSalvo = localStorage.getItem('ultimoId');
    if (ultimoIdSalvo) {
      setId(parseInt(ultimoIdSalvo))
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setId(id + 1);
    console.log('Dados do formulário');
    handleLimparFormulario(); // Limpa o formulário após enviar
    setDataVencimento('')
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
      <form action="https://api.sheetmonkey.io/form/eTzUtbRMsdFfDLSZMJXfo6" method='post'  >
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
            <label htmlFor="">
              <span className='formLabel'>Vendedor</span>
              <input
                className='iVend'
                type="text"
                name='Vendedor'
                placeholder="Nome"
                required
                value={vendedor}
                onChange={(event) => setVendedor(event.target.value)}

              />
            </label>
          </div>

          <div className="data">
            <label htmlFor="">
              <span className='formLabel'>Data</span>
              <InputMask
                className='iData'
                mask="99/99/9999"
                type="data"
                name="Data do pedido"
                placeholder="DD/MM/AAAA"
                required
                value={data}
                onChange={(event) => setData(event.target.value)}
              />

            </label>
          </div>

          <div className='pedido'>
            <label htmlFor="">
              <span className='formLabel'>Pedido</span>
              <input
                className='iPed'
                type="text"
                name='Pedido'
                placeholder="Pedido"
                required
                value={pedido}
                onChange={(event) => setPedido(event.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="rowsTwo">
          <div className='client'>
            <label htmlFor="">
              <span className='formLabel'>Cliente</span>
              <input
                className='iClint'
                type="text"
                name='Clinte'
                placeholder="Cliente"
                required
                value={client}
                onChange={(event) => setClient(event.target.value)}
              />
            </label>
          </div>

          <div className='celular'>
            <label htmlFor="">
              <span className='formLabel'>Celular</span>
              <InputMask
                className='iCel'
                mask="(99) 99999-9999"
                type="text"
                name='Celular'
                placeholder="Celular"
                required
                value={celular}
                onChange={(event) => setCelular(event.target.value)}
              />
            </label>
          </div>


          <div className='telefone'>
            <label htmlFor="">
              <span className='formLabel'>Telefone</span>
              <InputMask
                className='iFone'
                mask="(11) 9999-9999"
                type="text"
                name='Telefone'
                placeholder="Telefone"
                value={telefone}
                onChange={(event) => setTelefone(event.target.value)}
              />
            </label>
          </div>

        </div>
        <div className="rowsThree">
          <div className="email">
            <label htmlFor="">
              <span className='formLabel'>E-mail</span>
              <input
                className='iEmail'
                type="email"
                name="email"
                placeholder="E-mail"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          </div>
          <div className="referencia">
            <label htmlFor="">
              <span className='formLabel'>Origem/indicação</span>
              <input
                className='iRef'
                type="text"
                name="Referencia"
                placeholder="Referência"
                required
                value={referencia}
                onChange={(event) => setReferencia(event.target.value)}
              />
            </label>
          </div>
        </div>


        <div className="rowsFour">
          <div className="valor">
            <label className="labelForm" htmlFor="">
              <span className='formLabel'>Vl./Comp.</span>
              <input
                className='iVal'
                type="text"
                name="Vl./Comp"
                placeholder="0,00"
                required
                value={compra}
                onChange={handleValorCompraChange}
              />
            </label>
          </div>

          <div className="taxaPercent">
            <label htmlFor="">
              <span className='formLabel'>Tx./Cart.</span>
              <input
                className='iTaxaCartao'
                type="text"
                name='Taxa'
                placeholder="0,0"
                required
                value={taxaCartao}
                onChange={handleTaxaCartaoChange}
              />
            </label>
          </div>

          <div className="descCartao">
            <label htmlFor="">
              <span className='formLabel'>Des./Cart.</span>
              <input
                className='iDesc'
                type="text"
                name='Desc./Cart.'
                placeholder="0,00"
                value={descCart}
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
            <label htmlFor="">
              <span className='formLabel'>Tx/Com.</span>
              <input
                className='iCom'
                type="text"
                name='Comissão'
                placeholder="0,0"
                required
                value={taxaComissao}
                onChange={handleTaxaComissaoChange}
              />
            </label>
          </div>

          <div className="liquido">
            <label htmlFor="">
              <span className='formLabel'>Pag./Vend</span>
              <input
                className='iLiq'
                type="text"
                name='Valor Liquido'
                placeholder="0,00"
                value={valorLiquido}
              />
            </label>
          </div>

          <div className="caixa">
            <label htmlFor="">
              <span className='formLabel'>Caixa</span>
              <input
                className='iCaixa'
                type="text"
                name='Caixa'
                placeholder="0,00"
                value={caixa}
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
                <label className="formaPgto">Forma/Pgto.</label>
                <label htmlFor="">
                  <span className='formLabel'></span>
                  <select
                    className="iSection"
                    type="text"
                    name='Form/Pag'
                    onChange={handleFormaPagamentoChange}
                    required
                  >
                    <option className="optionForm" >Debito/ Cartão</option>
                    <option className="optionForm" >Debito/ Pix</option>
                    <option className="optionForm" >Dinheiro</option>
                    <option className="optionForm" >Parc./ 1 vezes</option>
                    <option className="optionForm" >Parc./ 2 vezes</option>
                    <option className="optionForm" >Parc./ 3 vezes</option>
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
              <button type="submit"  >Limpar</button>
            </div>
          </div>
        </div>
        <p className="copy">Este projeto foi desenvolvido por - Rogério de Almeia - &#169; 2024</p>

      </form >
    </div >
  );
}
export default Formulario
