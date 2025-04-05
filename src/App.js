import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './components/NoPage'
import Login from './components/login/Login'
import Register from './components/login/Register'
import Dashboard from './components/dashboard/Dashboard'
import SplitPage from './components/splitPage/SplitPage'
import DataProvider from "./DataProvider";
import Dashboard2 from "./components/dashboardTransactionTesting/Dashboard"
import ModalDemo from "./components/ModalDemo/ModalDemo";
import Transactions from "./components/Transactions/transactions";


function App() {
  return (
      <DataProvider>
          <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/dashboard2" element={<Dashboard2 />} />
                <Route path="/SplitTesting" element={<SplitPage />} />
                <Route path="/Demo" element={<ModalDemo/>}/>
                <Route path="*" element={<NoPage />} />
                <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
      </DataProvider>
  );
}

export default App;
