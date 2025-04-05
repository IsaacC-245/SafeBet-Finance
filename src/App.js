import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './modules/NoPage'
import Login from './modules/login/Login'
import Register from './modules/login/Register'


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
