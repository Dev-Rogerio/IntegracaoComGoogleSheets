import React from "react";
import '../Modal/modal.css'
import ReactModal from "react-modal";

const ModalMassage = ({ isOpen, onClose, errors = {} }) => {
  let errorMessage = null;
  // Verificar os erros na sequência desejada
  if (errors.vendedor) {
    errorMessage = errors.vendedor;
  }
  else if (errors.dataPedido) {
    errorMessage = errors.dataPedido;
  }
  else if (errors.pedido) {
    errorMessage = errors.pedido;
  }
  else if (errors.cpf) {
    errorMessage = errors.cpf;
  }
  else if (errors.nome) {
    errorMessage = errors.nome;
  }
  else if (errors.celular) {
    errorMessage = errors.celular;
  }
  else if (errors.aniversario) {
    errorMessage = errors.aniversario;
  }
  else if (errors.email) {
    errorMessage = errors.email;
  }
  else if (errors.referencia) {
    errorMessage = errors.referencia;
  }
  else if (errors.compra) {
    errorMessage = errors.compra;
  }
  else if (errors.taxaCartao) {
    errorMessage = errors.taxaCartao;
  }
  else if (errors.taxaComissao) {
    errorMessage = errors.taxaComissao;
  }
  else if (errors.formaPagamento) {
    errorMessage = errors.formaPagamento;
  }
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        className='modal'
        overlayClassName='overlay'
      >
        <div className="backgroundTransparent" onClick={onClose}>
          <div className="modalOpen modal-content">
            <header className="headerModal">
              <span className="spanModal close-icon">FECHAR</span>
              <button className="btm-close close-button" onClick={onClose}>X</button>
            </header>
            <article>
              {errorMessage ? (
                <p className="modal-text">{errorMessage}</p>
              ) : (
                <p className="modal-text">Erro desconhecido.</p>
              )}
            </article>
          </div>
        </div>
      </ReactModal>
    </>
  )
}
export default ModalMassage