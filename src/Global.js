import "./global.css";
import { Link } from "react-router-dom";

function Global() {
  return (
    <div >
      <div className="title">
        Administration du Biblio
      </div>
      <div className="allCarre">
      <Link to="/etudiant" ><p className="carre">gestion des étudiants </p></Link>
      <Link to="/livre"><p  className="carre">gestion des livres </p></Link>
      <Link to="/administrateur"><p className="carre">gestion des administrateurs </p></Link>

     
    </div>
    </div>
  );
}
export default Global;
