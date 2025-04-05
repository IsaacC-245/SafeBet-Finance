import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import { Link } from 'react-router-dom';
import dogeUser from '../../assets/imgs/doge-user.jpg';

// Icons
import { 
  Home, CreditCard, Settings, Search, 
  Bell, Receipt, TrendingUp, User, Award, Gift
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="safe-bet-app">
      <header className="app-header">
        <div className="header-left">
          <div className="logo">
            <div className="logo-circle blue"></div>
            <div className="logo-circle red"></div>
            <span className="logo-text">SafeBet Finance</span>
          </div>
          <h2 className="page-title">Accounts</h2>
        </div>
        <div className="header-right">
          <div className="search-container">
            <Search className="search-icon" size={18} />
            <input type="text" placeholder="Search for something" className="search-input" />
          </div>
          <button className="icon-button">
            <Settings size={20} />
          </button>
          <button className="icon-button notification">
            <Bell size={20} />
            <span className="notification-badge"></span>
          </button>
          <div className="user-avatar">
            <img src={dogeUser} alt="User" />
          </div>
        </div>
      </header>

      <div className="main-container">
        <nav className="sidebar">
          <ul className="nav-links">
            <li className="nav-item active">
              <Link to="/dashboard" className="nav-link">
                <Home size={20} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/transactions" className="nav-link">
                <Receipt size={20} />
                <span>Transactions</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/accounts" className="nav-link">
                <User size={20} />
                <span>Accounts</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/investments" className="nav-link">
                <TrendingUp size={20} />
                <span>Investments</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/credit-cards" className="nav-link">
                <CreditCard size={20} />
                <span>Credit Cards</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rewards" className="nav-link">
                <Gift size={20} />
                <span>Rewards</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/benefits" className="nav-link">
                <Award size={20} />
                <span>SafeBet Benefits</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;