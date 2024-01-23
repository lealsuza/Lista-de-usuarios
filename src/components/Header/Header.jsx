import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './Header.module.css'; // Certifique-se de importar o seu arquivo de estilos

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className={`${styles.header} ${showNav ? styles.showNav : ''}`}>

        <img src="logo.svg" />  
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Usuários</a>
          <a href="#">Produtos</a>
          <FaSearch />
        </nav>

      <div className={styles.burgerMenu} onClick={toggleNav}>
        &#9776;
      </div>
    </header>
  );
}


