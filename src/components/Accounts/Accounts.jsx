import React, { useContext, useState } from 'react';
import { DataContext } from "../../DataProvider"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Accounts.css';
import { Link } from 'react-router-dom';

import dogeUser from '../../assets/imgs/doge-user.jpg';

import {
    Home, Settings, Search,
    Bell, Gift, Receipt, TrendingUp,
    User, Award, ShoppingCart, Phone,
    TrendingDown, LogOut
} from 'lucide-react';

const Accounts = () => {
    const { user, logout } = useContext(DataContext)
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
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
                            <Link to="/login" className="nav-link" onSubmit={(e) => logout(e)}>
                                <LogOut size={20} />
                                <span className="nav-text">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <main className={`main-content ${sidebarCollapsed ? 'expanded' : ''}`}>

                    {/* Last Transaction */}
                    <div className="transactions-section">
                        <div className="section-header">
                            <h3>Account Information</h3>
                        </div>
                        <div className="transaction-item">
                            <div className="transaction-left">
                                <div className="transaction-details">
                                    <div className="transaction-title">Account Name</div>
                                    <div className="transaction-date">{user.username}</div>
                                </div>
                            </div>
                        </div>
                        <div className="transaction-item">
                            <div className="transaction-left">
                                <div className="transaction-details">
                                    <div className="transaction-title">Email</div>
                                    <div className="transaction-date">{user.email}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
};

export default Accounts;