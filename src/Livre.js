import React from "react";
import "./global.css";
import ModelInput from "./ajout/ModalInput";
import {  Link } from "react-router-dom";


function Livre() {
  return (
          <div >
      <div className="title">Gestion des livres</div>

            <div className="allCarre">
              <p className="carre"><ModelInput title={'Ajouter un livre'}/> </p>
              <Link to="/listLivres"><p className="carre">Liste des Livres</p></Link>
            </div>
          </div>
  );
}
export default Livre;
