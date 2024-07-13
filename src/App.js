import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  const [nasaphotos, setnasaphotos] = useState([])

  const updatephoto = async () =>{
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=VE9UeKOWxelQq1TyXk4ghx6HBrzfk185Smdc519n')
    try{
    const data = await response.json()
    setnasaphotos([data])
    }
    catch(error){
      console.log(error)
      }
  }

  useEffect(() => {
   updatephoto()
  }, [])
  

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold underline">NASA - APOD</h1>
      <div className="cards flex justify-center items-center">
       {nasaphotos.map((e)=>{
        return(
          <div key={e.title} className="p-5 flex gap-3">
             <div className="image ">
         <img src={e.url} alt={e.title} className=" rounded-xl" />
            </div>
            <div className="details">
            <h1 className="text-2xl">{e.title}</h1>
            <p className="text-slate-500">{e.explanation}</p>
            <p>{e.date}</p>
            <p></p>
            </div>
         </div>
        )
       })}
      </div>
    </div>
  );
}

export default App;
