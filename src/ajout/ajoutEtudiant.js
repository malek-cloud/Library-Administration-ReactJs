import { Modal, Button } from "react-bootstrap";
import { useRef } from "react";
function AjoutEtudiant(props) {
  const nomRef = useRef();
  const prenomRef = useRef();
  const emailRef = useRef();
  const numeroRef = useRef();
  const submit = async () => {
    
    const etudiantData = {
      nom: nomRef.current.value,
      prenom: prenomRef.current.value,
      email: emailRef.current.value,
      numero: numeroRef.current.value,
    };
    props.onHide();
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "employee/createEmployee",
        {
          method: "POST",
          body: JSON.stringify(etudiantData),
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
    return (
      <>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={props.show}
          onHide={props.onHide}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton style={{ textAlign: "center" }}>
            <Modal.Title id="contained-modal-title-vcenter">
              <h4>Ajouter un Etudiant</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>
    <div className="row mb-2">
      <div className="col-md-5">
        <input type="text" id="nom" placeholder="Nom" ref={nomRef} value={props.value11} />
      </div>
      <div className="col-md-5">
        <input
          type="text"
          id="prenom"
          placeholder="prenom"
          ref={prenomRef}
          value={props.value21}
        />
      </div>
    </div>

    <div className="row mb-2">
      <div className="col-md-5">
        <input
          type="number"
          id="phone"
          placeholder="Numéro de Télépone"
          ref={numeroRef}
          value={props.value31}
        />
      </div>
    </div>

    <div className="row mb-4">
      <div className="col-md-5">
        <input
          type="email"
          id="email"
          placeholder="Adresse Email"
          ref={emailRef}
          value={props.value41}
        />
      </div>{" "}
    </div>
  </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Annuler
            </Button>
            <Button
              className="btn grow mx-2"
              style={{ backgroundColor: "rgb(155, 199, 200)", color: "black" }}
              onClick={submit}
            >
              Créer
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default AjoutEtudiant;