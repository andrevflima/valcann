import React, { Component } from 'react';
import Modal from 'react-modal';
import './list-service.css';
import InputMask from 'react-input-mask';

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  content: {
    width: '80%',
    maxWidth: '80vh',
    minHeight:'fit-content',
    maxHeight: '90%',
    margin: 'auto',
    padding: '3vh',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
};

class ListServicos extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      showForm: false, 
      selectedProduct: null,
    };
  }

  handleContratar = (e) => {
    e.preventDefault(); 
  
    if (this.form.checkValidity()) {
      window.location.href = "/conclusao";
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  };

  openModal = (product) => {
    this.setState({ showModal: true, selectedProduct: product });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedProduct: null });
  };

  openForm = (product) => {
    this.setState({ showForm: true, selectedProduct: product });
  };

  closeForm = () => {
    this.setState({ showForm: false, selectedProduct: null });
  };

  render() {
    const { selectedProduct, showForm } = this.state;
    const { products } = this.props;

    return (
      <div className='list-services'>
        {products.map((product, index) => (
          <div className='product' key={index}>
            <img src={product.image}  />
            <h3 className='product-title'>{product.category}</h3>
            <h4 className='product-title'>{product.name}</h4>
            <span>{product.description}</span>
            <a className='contrate' href='#' onClick={() => this.openForm(product)}>
              Contrate Já
            </a>
            <a className='saiba' href='#' onClick={() => this.openModal(product)}>
              Saiba mais
            </a>
          </div>
        ))}

        <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} style={modalStyle}>
          {selectedProduct && (
            <div className='modal'>
              <button className='close' onClick={this.closeModal}>
                X
              </button>
              <div className='modal-title'>
              <img src={selectedProduct.image}  />
              <h3 className='product-title'>{selectedProduct.name}</h3>
              </div>
            
              <span>{selectedProduct.modalDescription}</span>
            </div>
          )}
        </Modal>

        <Modal isOpen={showForm} onRequestClose={this.closeForm} style={modalStyle}>
          {showForm && (
            <div className='modal'>
              <button className='close' onClick={this.closeForm}>
                X
              </button>
              <h3>Formulário de Contratação</h3>
              <form ref={form => this.form = form} onSubmit={this.handleContratar}>
              <div className='selected'>
              <div className='servicoEscolhido'>
              <label htmlFor="servicoEscolhido">Serviço Escolhido :</label>
              <input
                type="text"
                id="servicoEscolhido"
                name="servicoEscolhido"
                value={selectedProduct.category + ': ' + selectedProduct.name}
                disabled
              />
              </div>
             

              </div>

              <label htmlFor="name">Nome Completo :</label>
              <input
                type="text"
                id="name"
                name="name"
                required
              />

               <label htmlFor="email">Email :</label>
              <input
                type="email"
                id="email"
                name="email"
                required
              />

              <label htmlFor="contact">Contato :</label>
              <InputMask
                mask="(99)99999-9999"
                id="contact"
                name="contact"
                maskChar="_"
                required
              />

              <label htmlFor="name">Nome da sua empresa :</label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                required
              />


              {selectedProduct.form}


              <button type='submit'> Contratar </button>
              
            </form>
            </div>
          )}
        </Modal>
      </div>
      
    );
  }
}

export default ListServicos;