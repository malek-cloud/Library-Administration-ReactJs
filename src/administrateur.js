import React from "react";
import "./global.css";
import ModelInput from "./ajout/ModalInput";
import {  Link } from "react-router-dom";


function Administrateur() {
  return (
          <div >
      <div className="title">Gestion des comptes des administrateurs</div>

            <div className="allCarre">
              <p className="carre">  <ModelInput title={'Ajouter un compte administrateur'}/></p>
              <Link to='/listAdmin'><p className="carre">Liste des comptes des administrateurs</p></Link>
            </div>
          </div>
  );
}
export default Administrateur;