import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './components/NoPage'
import Login from './components/login/Login'
import Register from './components/login/Register'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
