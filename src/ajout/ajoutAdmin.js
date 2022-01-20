import { Modal, Button } from "react-bootstrap";
import { useRef } from "react";
function AjoutAdmin(props) {
  const nomRef = useRef();
  const prenomRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const numeroRef = useRef();
  const submit = async () => {
    const adminData = {
      nom: nomRef.current.value,
      prenom: prenomRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      numero: numeroRef.current.value,
    };
    props.onHide();
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "employee/createEmployee",
        {
          method: "POST",
          body: JSON.stringify(adminData),
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
              <h4>Ajouter un Compte d'administrateur</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="row mb-2">
                <div className="col-md-5">
                    
                  <input type="text" id="nom" placeholder="Nom" ref={nomRef} value={props.value1}   />
                </div>
                <div className="col-md-5">
                  <input
                    type="text"
                    id="prenom"
                    placeholder="prenom"
                    ref={prenomRef}
                    value={props.value2}

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
                    value={props.value3}

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
                    value={props.value4}
                  />
                </div>
                <div className="col-md-5">
                  <input
                    type="password"
                    id="Password"
                    placeholder="Password"
                    ref={passwordRef}
                    value={props.value5}
                  />
                </div>
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

export default AjoutAdmin;
