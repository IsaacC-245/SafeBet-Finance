import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './components/NoPage'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'
import RouletteSpinner from './components/spinner/rouletteSpinner'

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoPage />} />
	    <Route path='/spinner' element={<RouletteSpinner />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;