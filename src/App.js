import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './components/NoPage'
import Login from './components/login/Login'
import Register from './components/login/Register'
import Dashboard from './components/dashboard/Dashboard'
import SplitPage from './components/splitPage/SplitPage'
import DataProvider from "./DataProvider";


function App() {
  return (
      <DataProvider>
          <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/SplitTesting" element={<SplitPage />} />
                <Route path="*" element={<NoPage />} />
                <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
      </DataProvider>
  );
}

export default App;
