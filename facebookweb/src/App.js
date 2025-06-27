import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PageLogin from "./PageLogin/PageLogin";
import Areahead from "./Areahead/Areahead";
import AreaProf from "./Areaprof/AreaProf";
import AreaMess from "./AreaMessage/AreaMess"; 
import ChatWindow from "./AreaMessage/ChatWindow";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLogin />} />
      <Route path="/PageLogin" element={<Navigate to="/" />} />
      <Route path="/Areahead" element={<Areahead />} />
      <Route path="/profile" element={<AreaProf />} />
      <Route path="/messenger" element={<AreaMess />} />
       <Route path="/messenger/:name" element={<ChatWindow />} /> 
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
