import React, { useState, useEffect } from "react";
import './tabela.css';





const Tabela = ({ onDelete }) => {
  const [clientes, setClientes] = useState([]);


  // useEffect(() => {
  //   // Fazer a requisição ao endpoint clientTable
  //   axios.get('http://localhost:3000/clientTable')
  //     .then(response => {
  //       setClientes(response.data); // Armazenar os dados no estado
  //     })
  //     .catch(error => {
  //       console.error('Erro ao buscar dados:', error);
  //     });
  // }, []);
  // const salvar = async () => {
  //   try {
  //     const dados = await verificarCpfNoBackend(cpf);
  //     setResultado(dados);
  //   } catch (error) {
  //     console.error("Erro ao verificar CPF:", error);
  //   }
  // };


  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const data = await getFunction();
  //       console.log('Dados recebidos:', data);
  //       setClientes(data);
  //     } catch (error) {
  //       console.error("Erro ao buscar dados dos clientes:", error);
  //     }
  //   }
  //   fetchData();
  // }, []);


  return (
    <>
      <div className="container_TableCadCli">
        <table className="_tableCadCli">
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

          <tbody className="tbodyCadCli">
            {clientes && clientes.length > 0 ? (
              clientes.map((cliente, index) => (
                <tr key={cliente.id}>
                  <td className="td_tableLine">{index + 1}</td>
                  <td className="td_tableLine">{cliente.nome}</td>
                  <td className="td_tableLine">{cliente.email}</td>
                  <td className="td_tableLine">{cliente.celular}</td>
                  <td className="td_tableLine">{cliente.telefone}</td>
                  <td className="td_tableLine">{cliente.aniversario}</td>
                  <td className="td_tableLine">{cliente.cep}</td>
                  <td className="td_tableLine">{cliente.endereco}</td>
                  <td className="td_tableLine">{cliente.numero}</td>
                  <td className="td_tableLine">{cliente.complemento}</td>
                  <td className="td_tableLine">{cliente.cidade}</td>
                  <td className="td_tableLine">{cliente.uf}</td>
                  <td className="td_tableLine">{cliente.bairro}</td>
                  <td>
                    <button onClick={() => onDelete(cliente.id)}>Deletar</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="14" className="td_tableLine">Nenhum cliente encontrado</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* {resultado && <div>Resultado: {JSON.stringify(resultado)}</div>} */}
    </>
  )
}
export default Tabela;




