import React from "react";
import "../global.css";
import "./liste.css";
import FormList from "./fromList";
import { useState, useEffect } from "react";


function ListAdmin() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedadmins, setLoadingadmins] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    try {
      fetch('https://pacific-island-69721.herokuapp.com/posts')
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data.posts);
          setLoadingadmins(data.posts.reverse());
          setIsLoading(false);
          console.log(loadedadmins);
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
  return ( loadedadmins.length === 0 ? (
    <div>No  admins  yet</div>
  ) : 
    <div className="global ">
      {" "}
      <div className="title">Liste des Administrateurs </div>
      <div className="carre2">
        {loadedadmins.map((admin) =>(<FormList nom1={admin.title} nom2={admin.title} type={'admin'}/>))}
      </div>
    </div>
  );
}
export default ListAdmin;
