// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import React from 'react';

//PASSO1: ROTAS LIVRES E PROTEGIDAS

//region ROTAS PROTEGIDAS
const ProtectedRoutes = ({children}) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
};
//endregion

 //region ROTAS LIVRES
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>  
  )
} 

export default App;

//endregion
