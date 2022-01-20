import React from "react";
import "../global.css";
import ModelInput from "../ajout/ModalInput";
import "./liste.css";
function FormList(props) {
  const submit = async () => {
   
    props.onHide();
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "post/" + props.postId,
        {
          method: "DELETE",
          body: JSON.stringify(props.postId),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log("erreur mateb3athch el coach raw");
    }
  };
  if (props.type === "admin") {
    return (
      <div>
        <div className="ligneAll">
          <div className="ligne">
            {props.nom1} {props.nom2}
          </div>
          <div className="ligneAll">
            <div className="lignesmall">
              {" "}
              <ModelInput title={"modifier admin"}  value1 ={props.nom1}  value2={props.nom2} value3={'25887884'} value4={'exmple@gmail.com'} value5={'qdfijsvhnqp'}/>
            </div>
            <div className="lignesmall" onClick={submit}>supprimer</div>
          </div>
        </div>
      </div>
    );
  } else if (props.type === "etud") {
    return (
      <div>
        <div className="ligneAll">
          <div className="ligne">
            {props.nom1} {props.nom2}
          </div>
          <div className="ligneAll">
            <div className="lignesmall">
              {" "}
              <ModelInput title={"modifier étudiant"} value11 ={props.nom1}  value21={props.nom2} value31={'25887884'} value41={'exmple@gmail.com'}  />
            </div>
            <div className="lignesmall">supprimer</div>
          </div>
        </div>
      </div>
    );
  } else if (props.type === "livre") {
    return (
      <div>
        <div className="ligneAll">
          <div className="ligne">
            {props.nom1} {props.nom2}
          </div>
          <div className="ligneAll">
            <div className="lignesmall">
              {" "}
              <ModelInput title={"modifier livre"} value12 ={props.nom1}  value22={props.nom2} />
            </div>
            <div className="lignesmall">supprimer</div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormList;
