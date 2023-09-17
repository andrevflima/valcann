import React, { Component } from 'react';
import './footer.css';
import footerLogo from '../../assets/footer-logo.png';
import { Link } from 'react-router-dom';

class Footer extends Component {
 
  render() {
    return (
    <>
    <div className='social'>
        
    </div>
      <div className='footer'>
            <div className='row1'> 
            <Link to="/">
            <img src={footerLogo} alt="Logo" />
            </Link>

            </div>
            <div className='row'>
                <h3>Valcann | Cloud Intelligence</h3>
                <a href='www.valcann.com.br'>www.valcann.com.br</a>
                <span>+55(11)3136-2886</span>
                <span>faleconosco@valcann.com.br</span>
                <small><b>Especialistas em Computação em Nuvem.</b><br /> Todos os direitos reservados. Proibida a cópia ou reprodução de qualquer conteúdo deste site, sem a autorização formal de um representante legal da Valcann e suas coligadas. Para maiores informações, entre em contato conosco pelo e-mail faleconosco@valcann.com.br.  </small>
            </div>
            <div className='row'>
                <h4>Onde estamos?</h4>
                <h5>Unidade São Paulo/SP</h5>
                <span> Rua Doutor Virgílio de Carvalho Pinto, 433, Pinheiros, São Paulo/SP, CEP 05415-030 </span>

                <h5>Unidade Belo Horizonte/MG</h5>
                <span> Avenida do Contorno, 6594, 7o Andar, Belo Horizonte/MG, CEP 30110-044 </span>

                <h5>Unidade Recife/PE</h5>
                <span>Rua Cais do Apolo, 455, Bairro do Recife, Recife/PE, CEP 50030-230 </span>

                <h5>Unidade Fortaleza/CE</h5>
                <span>Avenida Dom Luís, 807, 20o Andar, Meireles, Fortaleza/CE, CEP 60160-230</span>

                <h5>Unidade Salvador/BA</h5>
                <span>Avenida Tancredo Neves, 620, 33o Andar Caminho das Árvores, Salvador/BA, CEP 41820-901</span>
            </div>


        </div>
    
    </>
     );
  }
}

export default Footer;