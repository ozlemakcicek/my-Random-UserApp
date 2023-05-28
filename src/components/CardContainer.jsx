import React from "react";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

import email from "../assets/email.jpeg";
import call from "../assets/phone.jpeg";
import loc from "../assets/location.jpeg";

const CardContainer = () => {


  const [contacts, setContacts] = useState([]);
  const[pageNumber,setPageNumber]=useState(1);


  useEffect(() => {
    const getVeri = async () => {
      const res = await axios.get("https://randomuser.me/api/");
      // console.log(res.data.results);
      setContacts(res.data.results);
    };
    getVeri();
  }, [pageNumber]);

  console.log(contacts);

  const handleNextPage=()=>{
    setPageNumber(pageNumber + 1)
  }
   

  return (
    <>
    <div className="App ">
      {contacts.map((eleman) => {
        return (
          <div className="container mt-5">
            <div className="ust d-flex ">
              <img className="pic" src={eleman.picture.large} alt="" />

              <div className="d-flex isim ">
                <h3>{eleman.name.title}</h3>
                <h3>{eleman.name.first}</h3>
                <h3>{eleman.name.last}</h3>
              </div>
            </div>

            <div className="email d-flex">
              <img className="msg-img" src={email} alt="" />
              <h4>{eleman.email}</h4>
            </div>

            <div className="cell d-flex">
              <img className="call-img" src={call} alt="" />
              <h4>{eleman.cell}</h4>
            </div>

            <div className="loc d-flex">
              <img className="loc-img" src={loc} alt="" />

              <div className="stadt d-flex">
                <h4>{eleman.location.city}</h4>
                <p className="bold">-</p>
                <h4>{eleman.location.country}</h4>
              </div>
            </div>

            <div className="son mt-3">
              <h4 className="age mb-4">Age : {eleman.dob.age}</h4>
              <h4>Registered Date :{eleman.registered.date}</h4>
            </div>
          </div>
        );
      }
  
      )} 
        <button className="buton" 
onClick={handleNextPage}
   >Random User</button>
 </div>
     
   </>
  );
};

export default CardContainer;
