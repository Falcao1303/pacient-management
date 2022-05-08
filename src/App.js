import React, { useState } from "react";
import { GlobalStyle } from "./Components/GlobalStyle";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import HeaderRegister from "./Components/Header";
import PacientForm from './view/register'
import PacientManagement from './view/management'
import Pagina404 from './Components/Page404'


function App() {
  return (
    <BrowserRouter>
            <GlobalStyle />
            <HeaderRegister />
           <Routes>
                <Route  path="/" element={<PacientForm />}/>
                <Route path="/management" element={<PacientManagement />}/>
                <Route  path="*" element={<Pagina404 />}/>
           </Routes> 
    </BrowserRouter>
         
  );
}

export default App;
