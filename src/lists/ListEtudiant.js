import React from "react";
import "../global.css";
import "./liste.css";
import FormList from './fromList';
import { useState, useEffect } from "react";

function ListEtudiants() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedetudiants, setLoadingetudiants] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    try {
      fetch('https://pacific-island-69721.herokuapp.com/posts')
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data.posts);
          setLoadingetudiants(data.posts.reverse());
          setIsLoading(false);
          console.log(loadedetudiants);
        });
    } catch (err) {} ;
}, []);
if (isLoading) {
  return (
    <div>
      <p><div
                class="spinner-border text-active"
                style={{ align: "center", marginLeft : "40%" , fontSize:"30px" , height : "60px", width:"60px", marginTop : "18%"}}
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div></p>
    </div>
  );
}
  return ( loadedetudiants.length === 0 ? (
    <div>No  etudiants  yet</div>
  ) : 
    <div>
      {" "}
      <div className="title">Liste des étudiants </div>
      <div className="carre2">
        {loadedetudiants.map((etudiant) =>(<FormList nom1={etudiant.title} nom2={etudiant.title} type={'etud'} postId={etudiant.id}/>))}
      </div>
    </div>
  );
}
export default ListEtudiants;
