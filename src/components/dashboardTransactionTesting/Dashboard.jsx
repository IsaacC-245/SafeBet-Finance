import React, { useContext, useState } from 'react';
import { DataContext } from "../../DataProvider"
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import RouletteSpinner from "../spinner/rouletteSpinner";

import dogeUser from '../../assets/imgs/doge-user.jpg';

import { 
  Home, Settings, Search, 
  Bell, Gift, Receipt, TrendingUp, 
  User, Award, ShoppingCart, Phone,
  TrendingDown,
  Heading
} from 'lucide-react';

const Dashboard = () => {
  const { user, updateBalance } = useContext(DataContext)
  const [isModalopen, setModalOpen] = useState(false);
  const [depositAmount, setDepositAmount] = useState(0);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleDeposit = () => {
    if(depositAmount > 0){
      setModalOpen(true)
      updateBalance("Deposit", depositAmount, user);
    }
  };

  return (
    <div className="safeBet-app">
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
        <nav className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="sidebar-toggle" onClick={toggleSidebar}>
            {sidebarCollapsed ? <span>›</span> : <span>‹</span>}
          </div>
          <ul className="nav-links">
            <li className="nav-item active">
              <Link to="/dashboard" className="nav-link">
                <Home size={20} />
                <span className="nav-text">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/transactions" className="nav-link">
                <Receipt size={20} />
                <span className="nav-text">Transactions</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/accounts" className="nav-link">
                <User size={20} />
                <span className="nav-text">Accounts</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/investments" className="nav-link">
                <TrendingDown size={20} />
                <span className="nav-text">"Investments"</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rewards" className="nav-link">
                <Gift size={20} />
                <span className="nav-text">Rewards</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/benefits" className="nav-link">
                <Award size={20} />
                <span className="nav-text">SafeBet Benefits</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/settings" className="nav-link">
                <Settings size={20} />
                <span className="nav-text">Settings</span>
              </Link>
            </li>
          </ul>
        </nav>

        <main className={`main-content ${sidebarCollapsed ? 'expanded' : ''}`}>
          {/* Financial Overview Cards */}
          <div className="financial-overview">
            <div className="finance-card">
              <div className="finance-icon blue">
                <ShoppingCart size={22} />
              </div>
              <div className="finance-details">
                <div className="finance-label">My Balance</div>
                <div className="finance-amount">{user.balance}</div>
              </div>
            </div>

            <div className="finance-card">
              <div className="finance-icon blue">
                <Receipt size={22} />
              </div>
              <div className="finance-details">
                <div className="finance-label">Deposit</div>
                <div className="finance-amount-input">
                  <input
                      type="number"
                      defaultValue={0}
                      className="amount-input"
                      onChange={(e) => setDepositAmount(e.target.value)}
                  />
                  <button className="update-button" onClick={handleDeposit}>Deposit</button>
                </div>

                {isModalopen && (
                    <Modal onClose={() => setModalOpen(false)}>
                      <h2>DOUBLE NOW</h2>
                      <p>Deposit {depositAmount*2} is a click away~</p>
                      <RouletteSpinner />
                    </Modal>
                )}
              </div>
            </div>

            <div className="finance-card">
              <div className="finance-icon light-blue">
                <ShoppingCart size={22} />
              </div>
              <div className="finance-details">
                <div className="finance-label">Total Saving</div>
                <div className="finance-amount">$7,920</div>
              </div>
            </div>
          </div>

          {/* Transactions and Cards Row */}
          <div className="transactions-cards-row">
            {/* Last Transaction */}
            <div className="transactions-section">
              <div className="section-header">
                <h3>Last Transaction</h3>
              </div>
              <div className="transaction-list max-h-[60vh] overflow-y-auto">
                {/* LOADING TRANSACTION DATA */}
                {user.history.map((transaction, index) => (
                    <div className="transaction-item" key={index}>
                      <div className="transaction-left">
                        <div className="transaction-icon">
                          <ShoppingCart size={18} />
                        </div>
                        <div className="transaction-details">
                          <div className="transaction-title">{transaction.name}</div>
                          <div className="transaction-date">25 Jan 2021</div>
                        </div>
                      </div>
                      <div className="transaction-middle">
                        <div className="transaction-type">Shopping</div>
                        <div className="transaction-card">1234 ****</div>
                      </div>
                      <div className="transaction-right">
                        <div className="transaction-status">Pending</div>
                        <div className={`transaction-amount ${transaction.value < 0 ? 'negative' : 'positive'}`}>
                          {transaction.value < 0 ? '-' : '+'}${Math.abs(transaction.value)}
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            {/* My Card */}
            <div className="my-card-section">
              <div className="section-header">
                <h3>My Card</h3>
                <button className="see-all-btn">See All</button>
              </div>
              <div className="credit-card">
                <div className="card-top">
                  <div className="card-balance">
                    <div className="balance-label">Balance</div>
                    <div className="balance-amount">$5,756</div>
                  </div>
                  <div className="card-chip">
                    <div className="chip-icon"></div>
                  </div>
                </div>
                <div className="card-middle">
                  <div className="card-holder">
                    <div className="holder-label">CARD HOLDER</div>
                    <div className="holder-name">Eddy Cusuma</div>
                  </div>
                  <div className="expiry-date">
                    <div className="expiry-label">VALID THRU</div>
                    <div className="expiry-value">12/22</div>
                  </div>
                </div>
                <div className="card-number">
                  3778 **** **** 1234
                </div>
                <div className="card-network">
                  <div className="mastercard-icon">
                    <div className="circle red"></div>
                    <div className="circle yellow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Debit & Credit and Invoices Row */}
          <div className="debit-credit-invoices-row">
            {/* Debit & Credit Overview */}
            <div className="debit-credit-section">
              <div className="section-header">
                <h3>Debit & Credit Overview</h3>
              </div>
              <div className="debit-credit-info">
                <div className="debit-credit-summary">
                  <span className="debit-amount">$7,560</span>
                  <span> Debited & </span>
                  <span className="credit-amount">$5,420</span>
                  <span> Credited in this Week</span>
                </div>
                <div className="chart-legend">
                  <div className="legend-item">
                    <div className="legend-color debit"></div>
                    <span>Debit</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color credit"></div>
                    <span>Credit</span>
                  </div>
                </div>
              </div>
              <div className="chart-container">
                <div className="chart-placeholder">
                  <div className="chart-columns">
                    {['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                      <div className="chart-column" key={i}>
                        <div className="chart-bars">
                          <div className="debit-bar" style={{ height: `${30 + Math.random() * 70}px` }}></div>
                          <div className="credit-bar" style={{ height: `${30 + Math.random() * 70}px` }}></div>
                        </div>
                        <div className="day-label">{day}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Invoices Sent */}
            <div className="invoices-section">
              <div className="section-header">
                <h3>Invoices Sent</h3>
              </div>
              <div className="invoice-list">
                <div className="invoice-item">
                  <div className="invoice-left">
                    <div className="invoice-icon">
                      <ShoppingCart size={18} />
                    </div>
                    <div className="invoice-details">
                      <div className="invoice-title">Apple Store</div>
                      <div className="invoice-date">5h ago</div>
                    </div>
                  </div>
                  <div className="invoice-amount">$450</div>
                </div>

                <div className="invoice-item">
                  <div className="invoice-left">
                    <div className="invoice-icon">
                      <User size={18} />
                    </div>
                    <div className="invoice-details">
                      <div className="invoice-title">Michael</div>
                      <div className="invoice-date">2 days ago</div>
                    </div>
                  </div>
                  <div className="invoice-amount">$160</div>
                </div>

                <div className="invoice-item">
                  <div className="invoice-left">
                    <div className="invoice-icon">
                      <Gift size={18} />
                    </div>
                    <div className="invoice-details">
                      <div className="invoice-title">Playstation</div>
                      <div className="invoice-date">5 days ago</div>
                    </div>
                  </div>
                  <div className="invoice-amount">$1085</div>
                </div>

                <div className="invoice-item">
                  <div className="invoice-left">
                    <div className="invoice-icon">
                      <User size={18} />
                    </div>
                    <div className="invoice-details">
                      <div className="invoice-title">William</div>
                      <div className="invoice-date">10 days ago</div>
                    </div>
                  </div>
                  <div className="invoice-amount">$90</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;