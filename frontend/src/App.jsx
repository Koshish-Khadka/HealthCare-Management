import "./App.css";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/public/Home";
import { Navigate, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* default */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      
    </Routes>
  );
}

export default App;
