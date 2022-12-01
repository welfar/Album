import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo_container">
        <img
          src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png"
          alt="Logo Rick and Morty"
          width={250}
        />
      </div>
      <nav className="nav">
        <ul className="ul">
          <li title="Aquí ves tu álbum">
            <Link to="/">Mi álbum</Link>
          </li>
          <li title="Aquí obtienes un sobre con láminas">
            <Link to="/envelopes">Obtener láminas</Link>
          </li>
          <li title="Aquí ves información sobre la serie">
            <Link to="/series-information">Información de la serie</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
