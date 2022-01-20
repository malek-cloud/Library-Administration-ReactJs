import React from "react";
import Global from "./Global";
import Etudiants from "./etudiants";
import ListEtudiants from "./lists/ListEtudiant";
import ListAdmin from "./lists/listAdmin";
import ListLivre from "./lists/listLivre";
import Livre from "./Livre";
import Administrateur from "./administrateur";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path= "/" element={<Global/>}/>
          <Route exact path= "/etudiant" element={<Etudiants/>}/>
          <Route exact path= "/livre" element={<Livre/>}/>
          <Route exact path= "/administrateur" element={<Administrateur/>}/>
          <Route exact path= "/listeEtudiants" element={<ListEtudiants/>}/>
          <Route exact path= "/listLivres" element={<ListLivre/>}/>
          <Route exact path= "/listAdmin" element={<ListAdmin/>}/>
           
        </Routes>
      </Router>
  );
}

export default App;
