import React, { Component } from 'react';
import './header.css';
import headerLogo from '../../assets/footer-logo.png';
import scrolledLogo from '../../assets/header-logo.png';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 50) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  render() {
    const { scrolled } = this.state;
    const logoSrc = scrolled ? scrolledLogo : headerLogo; // Alterne a imagem da logo com base no estado rolado
    const headerClass = scrolled ? 'header scrolled' : 'header';

    return (
      <div className={headerClass}>
        <div className='header-content'>
          <div className='logo'>
            <Link to='/' >

            <img src={logoSrc} alt='Logo' />  
            </Link>
            

             
          </div>
          <div className='menu'>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Header;