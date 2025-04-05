import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './modules/NoPage'
import Login from './modules/login/Login'


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
