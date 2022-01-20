import { Modal, Button } from "react-bootstrap";
import { useRef } from "react";
function AjoutLivre(props) {
  const nomRef = useRef();
  const prenomRef = useRef();
  const submit = async () => {
    const livreData = {
      nom: nomRef.current.value,
      autheur: prenomRef.current.value,
    };
    props.onHide();
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "employee/createEmployee",
        {
          method: "POST",
          body: JSON.stringify(livreData),
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
              <h4>Ajouter un Livre</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="row mb-2">
              <div className="col-md-5">
                <input
                  type="text"
                  id="nom"
                  placeholder="Nom du livre"
                    value={props.value12}
                    ref={nomRef}
                />
              </div>
              <div className="col-md-5">
                <input
                  type="text"
                  id="prenom"
                  placeholder="Autheur"
                    value={props.value22}
                    ref={prenomRef}
                />
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

export default AjoutLivre;