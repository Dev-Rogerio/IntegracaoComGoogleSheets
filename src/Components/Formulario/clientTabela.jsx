import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import axios from "axios";
import Logo from '../AssetsIcons/cadastro.png';
import Lupa from '../AssetsIcons/lupa-black.png';
import '../Formulario/clientTabela.css'
import Tabela from "../Tabela/tabela";
import { useNavigate } from 'react-router-dom';

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
  const [atualId, setAtualId] = useState(1);

  const salvar = () => {
    setResul(prevResul => ({
      ...prevResul,
      id: atualId,
    }));

    setResultado(prevResultado => [
      ...prevResultado,
      { ...resul, id: atualId }
    ]);

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
    setAtualId(atualId + 1);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResul(prevState => ({ ...prevState, [name]: value }));
  };

  const handleDelete = (id) => {
    setResultado(resultado.filter(row => row.id !== id));
  };
  return (
    <>
      <div className="containerBody">
        <header className="topOrange">
          <section className="s_Left"></section>
          <section className="s_Kamisaria">
            <h1>Kamisaria 1.0</h1>
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
              <p>CPF:</p>
              <InputMask
                mask="999.999.999-99"
                className="_iMain "
                type="text"
                value={resul.cpf} onChange={handleInputChange}
                name="cpf"
              />
            </section>
            <section className="sNome">
              <p>Nome:</p>
              <input
                className="_iMain"
                type="text"
                value={resul.nome} onChange={(e) => setResul({
                  ...resul, nome: e.target.value
                })} />
            </section>
            <section className="sEmail">
              <p>Email:</p>
              <input
                className="_iMail-Email "
                type="text"
                value={resul.email}
                onChange={(e) => setResul({
                  ...resul, email: e.target.value
                })}
              />
            </section>
            <section className="sCelular">
              <p>Celular:</p>
              <InputMask
                mask="(99) 99999-9999"
                className="_iMain"
                type="text"
                value={resul.celular}
                onChange={(e) => setResul({
                  ...resul, celular: e.target.value
                })}
              />
            </section>
            <section className="sTelefone">
              <p>Telefone:</p>
              <InputMask
                mask="(99) 9999-9999"
                className="_iMain"
                type="text"
                value={resul.telefone}
                onChange={(e) => setResul({
                  ...resul, telefone: e.target.value
                })}
              />
            </section>
            <section className="sAniversario">
              <p>Aniversário:</p>
              <input
                className="_iMain _anivesario"
                type="date"
                value={resul.aniversario}
                onChange={(e) => setResul({
                  ...resul, aniversario: e.target.value
                })}
              />
            </section>
          </div>
          <div className="adressDate">
            <section className="sCep">
              <p>CEP:</p>
              <InputMask
                mask="99999-999"
                className="_iMain"
                type="text"
                value={resul.cep}
                onChange={handleInputChange}
                name="cep"
              />
            </section>
            <section className="sEndereco">
              <p>Endereço:</p>
              <input
                className="_iMain"
                type="text"
                value={resul.endereco}
                onChange={(e) => setResul({
                  ...resul, endereco: e.target.value
                })}
              />
            </section>
            <section className="sNumero">
              <p>Nº.</p>
              <input
                className="_iMain"
                type="text"
                value={resul.numero}
                onChange={(e) => setResul({
                  ...resul, numero: e.target.value
                })}
              />
            </section>
            <section className="sComplemento">
              <p>Complemento:</p>
              <input
                className="_iMain"
                type="text"
                value={resul.cumprimento}
                onChange={(e) => setResul({
                  ...resul, complemento: e.target.value
                })}
              />
            </section>
            <section className="sCidade">
              <p>Cidade:</p>
              <input
                className="_iMain"
                type="text"
                value={resul.cidade}
                onChange={(e) => setResul({
                  ...resul, cidade: e.target.value
                })}
              />
            </section>
            <section className="sUf">
              <p>UF:</p>
              <input
                className="_iMain"
                type="text"
                value={resul.uf}
                onChange={(e) => setResul({
                  ...resul, uf: e.target.value
                })}
              />
            </section>
            <section className="sBairro">
              <p>Bairro:</p>
              <input
                className="_iMain"
                type="text"
                value={resul.bairro}
                onChange={(e) => setResul({
                  ...resul, bairro: e.target.value
                })}
              />
            </section>
          </div>
        </main>
        <footer className="f_Button">
          <button className="btn_Salvar" onClick={salvar} >Salvar</button>
          <button className="btn_Cancelar">Cancelar</button>
        </footer>
        <div className="list">
          <table className="_table">
            <thead>
              <tr>
                <th>ID</th>
                <th>CPF:</th>
                <th>Nome:</th>
                <th>Email:</th>
                <th>Celular:</th>
                <th>Telefone:</th>
                <th>Aniversário</th>
                <th>CEP:</th>
                <th>Endereço:</th>
                <th>Nº</th>
                <th>Compl.:</th>
                <th>Cidade:</th>
                <th>UF:</th>
                <th>Bairro</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {resultado.map((resul, index) => (<Tabela key={index} resul={resul} onDelete={handleDelete} />))}
            </tbody>
          </table>
        </div>
      </div>
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
