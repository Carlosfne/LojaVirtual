import React from 'react';

import "./styles.css"

const Header = () => (
  <header id="main-header">
    <nav>
      <div className="nav-wrapper orange darken-4">
        <a href="/" className="brand-logo">Loja Virtual</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">        
          <li><a href="/form">Novo Produto</a></li>
          <li><a href="/edit">Editar Produto</a></li>
        </ul>
      </div>
    </nav>
  </header>
  );
// mesma coisa que ... 
// class Header extends Component {
//   render(){
//     return <h1>Hello</h1>
//   }
// } utilizamos esta quando temos conceito de estado

export default Header;