import React, { useState } from "react";
import Logotipo from "../AssetsIcons/logo.png";
import Lupa from '../AssetsIcons/lupa-black.png';
import '../Formulario/clientTabela.css';

const ClienteTabela = () => {
  const [form, setForm] = useState({
    cpf: '',
    nome: '',
    email: '',
    celular: '',
    telefone: '',
    aniversario: '',
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    cidade: '',
    uf: '',
    bairro: ''
  });

  const limparFormulario = () => {
    setForm({
      cpf: '',
      nome: '',
      email: '',
      celular: '',
      telefone: '',
      aniversario: '',
      cep: '',
      endereco: '',
      numero: '',
      complemento: '',
      cidade: '',
      uf: '',
      bairro: ''
    });
  };

  return (
    <div className="containerBody">
      <header className="topOrange">
        <section className="s_Left">
          <img className="_logoTipo" src={Logotipo} alt="Logotipo" />
          <h1 className="h1_textKamisaria">KAMISARIA ZANUTO</h1>
        </section>
        <section className="s_Kamisaria">
          <h1>Versão 1.0</h1>
        </section>
        <section className="s_Buscar">
          <img src={Lupa} alt="Buscar" className="ImgLupaSearch" />
          <input type="text" className="_iBuscar" placeholder="Buscar" />
          <p className="closeClient">Sair</p>
        </section>
      </header>
      <main className="mainPainel">
        <div className="personalDate">
          <section className="sCpf">
            <label htmlFor="cpf" className="_label">CPF</label>
            <input
              className="_iMain"
              type="text"
              value={form.cpf}
              name="cpf"
              onChange={(e) => setForm({ ...form, cpf: e.target.value })}
            />
          </section>
          <section className="sNome">
            <label htmlFor="nome" className="_label">Nome:</label>
            <input
              className="_iMain"
              type="text"
              value={form.nome}
              name="nome"
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
            />
          </section>
          <section className="sEmail">
            <label htmlFor="email" className="_label">Email:</label>
            <input
              className="_iMail-Email"
              type="text"
              value={form.email}
              name="email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </section>
          {/* Continue simplificando conforme necessário */}
        </div>
        <footer className="f_Button">
          <button className="btn_Salvar" onClick={() => alert('Salvar')}>Salvar</button>
          <button className="btn_Cancelar" onClick={limparFormulario}>Limpar</button>
        </footer>
      </main>
    </div>
  );
};

export default ClienteTabela;
