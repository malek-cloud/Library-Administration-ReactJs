import AjoutLivre from "./ajoutLivre";
import AjoutAdmin from "./ajoutAdmin";
import AjoutEtudiant from "./ajoutEtudiant";
import { useState } from "react";

function ModalInput(props) {
  const [modalShow, setModalShow] = useState(false);

  if (props.title === "Ajouter un livre" || props.title === "modifier livre") {
    return (
      <>
        <div
          variant="primary"
          onClick={() => {
            setModalShow(true);
          }}
        >
          {props.title}
        </div>

        <AjoutLivre 
        
        value12={props.value12}
        value22={props.value22}
        show={modalShow}
         onHide={() => setModalShow(false)} />
      </>
    );
  } else if (
    props.title === "Ajouter un etudiant" ||
    props.title === "modifier étudiant"
  ) {
    return (
      <>
        <div
          variant="primary"
          onClick={() => {
            setModalShow(true);
          }}
        >
          {props.title}
        </div>

        <AjoutEtudiant
          value11={props.value11}
          value41={props.value41}
          value31={props.value31}
          value21={props.value21}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  } else if (
    props.title === "Ajouter un compte administrateur" ||
    props.title === "modifier admin"
  ) {
    return (
      <>
        <div
          variant="primary"
          onClick={() => {
            setModalShow(true);
          }}
        >
          {props.title}
        </div>

        <AjoutAdmin
          value1={props.value1}
          value4={props.value4}
          value3={props.value3}
          value2={props.value2}
          value5={props.value5}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
}
export default ModalInput;
