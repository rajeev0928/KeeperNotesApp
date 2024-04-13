import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from 'axios'
import Login from './Login'
import Signup from './Signup'
import Home from "./home";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from "../Hooks/useAuthContext"
function App() {
  const {user} = useAuthContext()

  return ( 
    <div>
      <Header /> 
      
      <Routes>
      <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to= "/"/>} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to= "/"/>} 
            />
          </Routes>
    
      <Footer />
      
    </div>
  );
}

export default App;
