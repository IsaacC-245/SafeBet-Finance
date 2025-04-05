import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NoPage from "./components/NoPage";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import SplitPage from "./components/splitPage/SplitPage";
import DataProvider from "./DataProvider";
import Dashboard2 from "./components/dashboardTransactionTesting/Dashboard";
import ModalDemo from "./components/ModalDemo/ModalDemo";
import SpinnerModal from "./components/spinner/spinnerModal";
import Transactions from "./components/Transactions/transactions";
import UnstableDashboard from "./components/unstableDashboard/UnstableDashboard";
import Accounts from "./components/Accounts/Accounts";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          {/* Production Routes*/}
          <Route path="*" element={<NoPage />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<UnstableDashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/accounts" element={<Accounts />} />

          {/* Testing Routes*/}
          <Route path="/SplitTesting" element={<SplitPage />} />
          <Route path="/Demo" element={<ModalDemo />} />
          <Route path="/dashboard2" element={<Dashboard2 />} />
          <Route path="/spinnerModal" element={<SpinnerModal />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
