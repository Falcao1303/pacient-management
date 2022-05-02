import React, { useState } from "react";
import HeaderRegister from "./Components/Header";
import { GlobalStyle } from "./Components/GlobalStyle";
import PacientForm from "./Components/Form";

function App() {
  return (
    <div>
            <GlobalStyle />
            <HeaderRegister />
            <PacientForm />
    </div>
         
  );
}

export default App;
