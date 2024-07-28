import React from "react";
import '../Tabela/tabela.css';
import Edite from '../AssetsIcons/Edite.png';
import Delete from '../AssetsIcons/delete.png';

const Tabela = ({ resul, onDelete }) => {

  return (
    <tr >
      <td>{resul.id}</td>
      <td className="td_tableLine">{resul.cpf}</td>
      <td className="td_tableLine">{resul.nome}</td>
      <td className="_captalise">{resul.email}</td>
      <td className="td_tableLine">{resul.celular}</td>
      <td className="td_tableLine">{resul.telefone}</td>
      <td className="td_tableLine">{resul.aniversario}</td>
      <td className="td_tableLine">{resul.cep}</td>
      <td className="td_tableLine">{resul.endereco}</td>
      <td className="td_tableLine">{resul.numero}</td>
      <td className="td_tableLine">{resul.complemento}</td>
      <td className="td_tableLine">{resul.cidade}</td>
      <td className="td_tableLine">{resul.uf}</td>
      <td className="td_tableLine">{resul.bairro}</td>
      <td className="td_tableLine">
        <section className="containerImg">
          <img
            className="imgLine"
            src={Edite}
            alt="Edit"
          />
          <img
            className="imgLine"
            src={Delete}
            alt="Delete"
            onClick={() => onDelete(resul.id)}
          />
        </section>
      </td>
    </tr>
  )
}
export default Tabela;
