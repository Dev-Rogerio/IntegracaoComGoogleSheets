import React from "react";
import '../Tabela/tabela.css';
import Edite from '../AssetsIcons/Edite.png';
import Delete from '../AssetsIcons/delete.png';

const Tabela = ({ resul, onDelete }) => {
  return (
    <tr>
      <td>{resul.id}</td>
      <td>{resul.cpf}</td>
      <td>{resul.nome}</td>
      <td>{resul.email}</td>
      <td>{resul.celular}</td>
      <td>{resul.telefone}</td>
      <td>{resul.aniversario}</td>
      <td>{resul.cep}</td>
      <td>{resul.endereco}</td>
      <td>{resul.numero}</td>
      <td>{resul.complemento}</td>
      <td>{resul.cidade}</td>
      <td>{resul.uf}</td>
      <td>{resul.bairro}</td>
      <td>
        <section className="containerImg">
          <img
            className="imgLine"
            src={Edite} alt=""
          />
          <img
            className="imgLine"
            src={Delete}
            alt=""
            onClick={() => onDelete(resul.id)}
          />
        </section>
      </td>
    </tr>

  )
}
export default Tabela;
