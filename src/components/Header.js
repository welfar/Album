import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
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
