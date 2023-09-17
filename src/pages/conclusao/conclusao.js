import React, { useState, useEffect } from 'react';
import './conclusao.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import logo from '../../assets/logo1.png'

export default function Conclusao() {
    

  return (
    <>
    <Header />
     <div className="content servicos">

     
     <div className='Header'>
      <section  className="banner">
      </section>
      <div className="title">
        <img src={logo} alt="Logo" />
        <span>Conclusão</span>
      </div>
     </div>

      <div className='conclusao'>

     <div className="subtitle">
       <h1>Parabéns! Você adquiriu um de nossos serviços!</h1>
       <h3>
         Em breve nosso time irá entrar em contato!
       </h3>

      

     </div>
      </div>


     
   </div>
       <section className='parabens'>
        <h4> Pazer, Somos a Valcann </h4>
        <div className="video-wrapper">
        <iframe
          width="840"
          height="315"
          src="https://www.youtube.com/embed/XGUsOXOMf-4"
          title="Vídeo do YouTube"
          frameborder="0"
          allowfullscreen
        ></iframe>
        </div>

       </section>
   <Footer />
    </>
   

    
  );
}