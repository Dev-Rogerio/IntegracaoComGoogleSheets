import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import axios from "axios";
import Lupa from '../AssetsIcons/lupa-black.png';
import '../Formulario/clientTabela.css'
import Tabela from "../Tabela/tabela";
import { useNavigate } from 'react-router-dom';
import ModalCadCli from "./ModalClientTable/modal";
import Logotipo from "../AssetsIcons/logo.png";

const ClienteTabela = () => {
  const navigate = useNavigate(); // Hook para navegação
  const redirectToFormulario = () => navigate('/');
  const [resul, setResul] = useState({
    id: 1,
    cpf: '',
    nome: '',
    email: '',
    celular: '',
    telefone: '',
    aniversario: '',
    cep: "",
    endereco: '',
    numero: '',
    complemento: '',
    cidade: '',
    uf: '',
    bairro: '',
  });
  const [resultado, setResultado] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const saveResultados = JSON.parse(localStorage.getItem('clientes')) || [];
    setResultado(saveResultados);
  }, [])

  const validarCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11) return false;
    if (/^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digito1 = resto === 10 || resto === 11 ? 0 : resto;

    if (digito1 !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digito2 = resto === 10 || resto === 11 ? 0 : resto;
    return digito2 === parseInt(cpf.charAt(10));
  };

  const salvar = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (resul.cpf.trim() === '') {
        openModal('CPF não pode ser vazio.');
        limparFormulario();
        setIsLoading(false)
        return;
      }
      if (!validarCPF(resul.cpf)) {
        openModal('CPF inválido.');
        setIsLoading(false);
        return;
      }
      const cpfExistente = resultado.some(cliente => cliente.cpf === resul.cpf);
      if (cpfExistente) {
        openModal('Cliente já existe!');
        setIsLoading(false)
        return;
      }
      const novoResul = { ...resul, id: resultado.length + 1 };
      const newResultado = [...resultado, novoResul];
      setResultado(newResultado);
      localStorage.setItem('clientes', JSON.stringify(newResultado));
      limparFormulario();
      setIsLoading(false);
    }, 3000);
  };
  const limparFormulario = () => {
    setResul({
      id: '',
      cpf: '',
      nome: '',
      email: '',
      celular: '',
      telefone: '',
      aniversario: '',
      cep: "",
      endereco: '',
      numero: '',
      complemento: '',
      cidade: '',
      uf: '',
      bairro: '',
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResul(prevState => ({ ...prevState, [name]: value }));
  };

  const handleDelete = (id) => {
    setResultado(resultado.filter(row => row.id !== id));
  };

  const openModal = (message = '') => {
    setModalMessage(message);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  }

  useEffect(() => {
    const fetchAddress = async () => {
      const cep = resul.cep.replace(/\D/g, '');
      if (cep.length === 8) {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
          const data = response.data;
          if (!data.erro) {
            setResul(prevState => ({
              ...prevState,
              endereco: data.logradouro,
              cidade: data.localidade,
              uf: data.uf,
              bairro: data.bairro,
            }));
          } else {
            console.error("CEP inválido");
            setResul(prevState => ({
              ...prevState,
              endereco: '',
              cidade: '',
              uf: '',
              bairro: '',
            }));
          }
        } catch (error) {
          console.error("Erro ao buscar o endereço:", error);
        }
      }
    };
    fetchAddress();
  }, [resul.cep]);
  return (
    <>
      <div className="containerBody">
        <header className="topOrange">
          <section className="s_Left">
            <section>
              <img className="_logoTipo" src={Logotipo} alt="" />
              <h1 className="h1_textKamisaria">KAMISARIA ZANUTO</h1>
            </section>
          </section>
          <section className="s_Kamisaria">
            <h1>Versão 1.0</h1>
          </section>
          <section className="s_Buscar" onClick={redirectToFormulario}>
            <img src={Lupa} alt="" className="ImgLupaSearch" />
            <input type="text" className="_iBuscar" placeholder="Buscar" />
            <p className="closeClient" >Sair</p>
          </section>
        </header>
        <article className="a_CadastroCliente">
          <h1 className="textArticleCad">Formulário de Cadastro</h1>
          <h1 className="textArticleCli">Clientes Cadastrados</h1>
        </article>
        <main className="mainPainel">
          <div className="personalDate">
            <section className="sCpf">
              <label htmlFor="cpf" className="_label">CPF</label>
              <InputMask
                mask="999.999.999-99"
                className="_iMain "
                type="text"
                value={resul.cpf}
                onChange={handleInputChange}
                name="cpf"
              />
            </section>
            <section className="sNome">
              <label htmlFor="nome" className="_label">Nome:</label>
              <input
                className="_iMain"
                type="text"
                value={resul.nome} onChange={handleInputChange}
                name="nome"
                autocomplete="off"
              />
            </section>
            <section className="sEmail">
              <label htmlFor="email" className="_label">Email:</label>
              <input
                className="_iMail-Email "
                type="text"
                value={resul.email}
                onChange={handleInputChange}
                name="email"
                autocomplete="off"
              />
            </section>
            <section className="sCelular">
              <label htmlFor="celular" className="_label">Celular:</label>
              <InputMask
                mask="(99) 99999-9999"
                className="_iMain"
                type="text"
                value={resul.celular}
                onChange={handleInputChange}
                name="celular"
                autocomplete="off"
              />
            </section>
            <section className="sTelefone">
              <label htmlFor="telefone" className="_label">Telefone:</label>
              <InputMask
                mask="(99) 9999-9999"
                className="_iMain"
                type="text"
                value={resul.telefone}
                onChange={handleInputChange}
                name="telefone"
                autocomplete="off"
              />
            </section>
            <section className="sAniversario">
              <label htmlFor="aniversario" className="_label">Aniversário:</label>
              <input
                className="_iMain _anivesario"
                type="date"
                value={resul.aniversario}
                onChange={handleInputChange}
                name="aniversario"
                autocomplete="off"
                max="2005-12-31"
                min="1900-01-01"
              />
            </section>
          </div>
          <div className="adressDate">
            <section className="sCep">
              <label htmlFor="cep" className="_label">CEP</label>
              <InputMask
                mask="99999-999"
                className="_iMain"
                type="text"
                value={resul.cep}
                onChange={handleInputChange}
                name="cep"
                autocomplete="off"
              />
            </section>
            <section className="sEndereco">
              <label htmlFor="endereco" className="_label">Endereço:</label>
              <input
                className="_iMain"
                type="text"
                value={resul.endereco}
                onChange={handleInputChange}
                name="endereco"
                autocomplete="off"
              />
            </section>
            <section className="sNumero">
              <label htmlFor="nemero" className="_label">Nº.</label>
              <input
                className="_iMain"
                type="text"
                value={resul.numero}
                onChange={handleInputChange}
                name="numero"
                autocomplete="off"
              />
            </section>
            <section className="sComplemento">
              <label htmlFor="complemento" className="_label">Complemento:</label>
              <input
                className="_iMain"
                type="text"
                value={resul.cumprimento}
                onChange={handleInputChange}
                name="complemento"
                autocomplete="off"
              />
            </section>
            <section className="sCidade">
              <label htmlFor="cidade" className="_label">Cidade:</label>
              <input
                className="_iMain"
                type="text"
                value={resul.cidade}
                onChange={handleInputChange}
                name="cidade"
                autocomplete="off"
              />
            </section>
            <section className="sUf">
              <label htmlFor="uf" className="_label">UF:</label>
              <input
                className="_iMain"
                type="text"
                value={resul.uf}
                onChange={handleInputChange}
                name="uf"
                autocomplete="off"
              />
            </section>
            <section className="sBairro">
              <label htmlFor="bairro" className="_label">Bairro:</label>
              <input
                className="_iMain"
                type="text"
                value={resul.bairro}
                onChange={handleInputChange}
                name="bairro"
                autocomplete="off"
              />
            </section>
          </div>
        </main>
        <footer className="f_Button">
          <button className="btn_Salvar" onClick={salvar} >{isLoading ? "Enviando..." : "Salvar"}</button>
          <button className="btn_Cancelar">Limpar</button>
        </footer>
        <div className="list">
          <table className="_table">
            <thead>
              <tr>
                <th className="thead_ClientTable">N.</th>
                <th className="thead_ClientTable">CPF:</th>
                <th className="thead_ClientTable">Nome:</th>
                <th className="thead_ClientTable">Email:</th>
                <th className="thead_ClientTable">Celular:</th>
                <th className="thead_ClientTable">Telefone:</th>
                <th className="thead_ClientTable">Aniversário</th>
                <th className="thead_ClientTable">CEP:</th>
                <th className="thead_ClientTable">Endereço:</th>
                <th className="thead_ClientTable">Nº</th>
                <th className="thead_ClientTable">Compl.:</th>
                <th className="thead_ClientTable">Cidade:</th>
                <th className="thead_ClientTable">UF:</th>
                <th className="thead_ClientTable">Bairro</th>
                <th className="thead_ClientTable">Ações</th>
              </tr>
            </thead>
            <tbody>
              {resultado.map((resul, index) => (<Tabela key={index} resul={resul} onDelete={handleDelete} />))}
            </tbody>
          </table>
        </div>
      </div>
      <tabela dados={resultado} onDelete={handleDelete} />
      <ModalCadCli
        isOpen={showModal}
        onRequestClose={closeModal}
        message={modalMessage} />
    </>
  )
}
export default ClienteTabela;















































// import React, { useState, useEffect } from 'react';
// import '../Formulario/clientTabela.css';

// const ClientTabela = () => {
//   const [dados, setDados] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/formulario')
//       .then(response => response.json())
//       .then(data => setDados(data))
//       .catch(error => console.error('Erro ao buscar dados:', error));
//   }, []);

//   return (
//     <div className="containerTabelaClient">
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Vendedor</th>
//             <th>Data</th>
//             <th>Pedido</th>
//             <th>Cliente</th>
//             <th>Cpf</th>
//             <th>Celular</th>
//             <th>Telefone</th>
//             <th>E-mail</th>
//             <th>Referencia</th>
//             <th>Compra</th>
//             <th>TaxaCartão</th>
//             <th>Desc Cartão</th>
//             <th>Valor Bruto</th>
//             <th>Comissão</th>
//             <th>Vl liqui.</th>
//             <th>caixa</th>
//             <th>F pagto</th>
//             <th>Aniversário</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dados.map((dado) => (
//             <tr key={dado.id}>
//               <td>{dado.id}</td>
//               <td>{dado.Vendedor}</td>
//               <td>{dado.Data_Pedido}</td>
//               <td>{dado.Pedido}</td>
//               <td>{dado.Cliente}</td>
//               <td>{dado.cpf}</td>
//               <td>{dado.Celular}</td>
//               <td>{dado.Telefone}</td>
//               <td>{dado.email}</td>
//               <td>{dado.Referencia}</td>
//               <td>{dado['Vl_Comp']}</td>
//               <td>{dado.Taxa}</td>
//               <td>{dado['Desc_Cartao']}</td>
//               <td>{dado['Valor_Bruto']}</td>
//               <td>{dado.Comissão}</td>
//               <td>{dado['Valor_Liq.']}</td>
//               <td>{dado.Caixa}</td>
//               <td>{dado['Form_Pag.']}</td>
//               <td>{dado.Aniversario}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ClientTabela;
