import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Tabela/tabela.css'

const Tabela = () => {
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/formulario')
      .then(response => {
        setVendas(response.data);
      })
      .catch(error => {
        console.error('there was an eeror fatching the data!', error);
      });
  }, []);

  return (
    <>
      <div className="tabela-container">
        <h2>Registro de Vendas</h2>
        <table className="tabela">
          <thead>
            <tr>
              <th>Id</th>
              <th>Vendedor</th>
              <th>Data</th>
              <th>Pedido</th>
              <th>Cpf</th>
              <th>Cliente</th>
              <th>Celular</th>
              <th>Telefone</th>
              <th>Aniversário</th>
              <th>Email</th>
              <th>Referencia</th>
              <th>Compra</th>
              <th>Desconto</th>
              <th>Vl/Desc.</th>
              <th>Tx/Cartão</th>
              <th>Des/Cart</th>
              <th>Vl/Bru</th>
              <th>Tx/Comissão</th>
              <th>Pag</th>
              <th>Caixa</th>
            </tr>
          </thead>
          <tbody>
            {
              vendas.map(venda => (
                <tr key={venda.id}>
                  <td>{venda.vendedor}</td>
                  <td>{venda.Data}</td>
                  <td>{venda.Pedido}</td>
                  <td>{venda.Cpf}</td>
                  <td>{venda.Cliente}</td>
                  <td>{venda.Celelar}</td>
                  <td>{venda.Telefone}</td>
                  <td>{venda.Aniversário}</td>
                  <td>{venda.Email}</td>
                  <td>{venda.Referencia}</td>
                  <td>{venda.Compra}</td>
                  <td>{venda.Desconto}</td>
                  <td>{venda.Vldesc}</td>
                  <td>{venda.TxCartão}</td>
                  <td>{venda.DesCart}</td>
                  <td>{venda.VlBru}</td>
                  <td>{venda.TxComissão}</td>
                  <td>{venda.Pag}</td>
                  <td>{venda.Caixa}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
export default Tabela