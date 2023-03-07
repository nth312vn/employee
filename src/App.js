import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/mainLayout/MainLayout";

import Login from "./pages/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<MainLayout />} />
    </Routes>
  );
}

export default App;
