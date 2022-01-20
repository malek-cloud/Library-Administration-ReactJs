import React from "react";
import "../global.css";
import "./liste.css";
import FormList from "./fromList";
import { useState, useEffect } from "react";


function ListLivre() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedlivres, setLoadinglivres] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    try {
      fetch('https://pacific-island-69721.herokuapp.com/posts')
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data.posts);
          setLoadinglivres(data.posts.reverse());
          setIsLoading(false);
          console.log(loadedlivres);
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
  return ( loadedlivres.length === 0 ? (
    <div>No  livres  yet</div>
  ) : 
    <div className="global ">
      {" "}
      <div className="title">Liste des livres </div>
      <div className="carre2">
        {loadedlivres.map((livre) =>(<FormList nom1={livre.title} nom2={livre.title} type={'livre'} />))}
      </div>
    </div>
  );
}
export default ListLivre;
