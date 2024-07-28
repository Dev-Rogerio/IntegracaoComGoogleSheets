import { useEffect, useState } from "react";
import '../ModalEdite/modalEdite.css';

const ModalEdite = ({ isOpen, onRequestClose, data, onSave }) => {
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    setFormData(data)
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }))
  };

  const handleSave = () => {
    onSave(formData);
  };
  return (
    <>
      <div className={`modal ${isOpen ? 'is-open' : ''}`}>
        <div className="modal-content">
          <h2>Editar Cliente</h2>
          <form action="">
            <label htmlFor="">
              Nome:
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </label>
          </form>
        </div>
      </div>
    </>
  );
};
export default ModalEdite;

