import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './components/NoPage'
import Login from './components/login/Login'
import DataProvider from "./DataProvider";


function App() {
  return (
      <DataProvider>
          <BrowserRouter>
              <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="*" element={<NoPage />} />
              </Routes>
          </BrowserRouter>
      </DataProvider>
  );
}

export default App;
