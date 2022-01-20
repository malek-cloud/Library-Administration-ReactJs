import React from "react";
import "./global.css";
import ModelInput from "./ajout/ModalInput";
import { Link } from "react-router-dom";

function Etudiants() {
  return (
    <div>
      <div className="title">Gestion des étudiants</div>
      <div className="allCarre">
        <p className="carre">
          {" "}
          <ModelInput title={"Ajouter un etudiant"} />{" "}
        </p>
        <Link to="/listeEtudiants"><p className="carre">Liste des etudiants</p></Link>
      </div>
    </div>
  );
}
export default Etudiants;
