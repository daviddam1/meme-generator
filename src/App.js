import React from "react";

import '../src/index.css'

import Navbar from "./components/navbar";
import Meme from "./components/meme";

export default function App(){
  return(
    <div className="App">
    <Navbar/>
    <Meme/>

    </div>
  )
}