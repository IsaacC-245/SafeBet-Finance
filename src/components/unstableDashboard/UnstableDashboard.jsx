import React, {useContext, useStat, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./unstableDashboard.css";
import { Link } from "react-router-dom";
import RouletteSpinner from "../spinner/rouletteSpinner";
import Stocks from "../Stocks";
import SlotCounter from "react-slot-counter";

import dogeUser from "../../assets/imgs/doge-user.jpg";

import {
  Home,
  Settings,
  Search,
  Bell,
  Gift,
  Receipt,
  User,
  Award,
  TrendingDown,
  LogOut,
  Landmark,
  Club,
  Bitcoin,
  WalletMinimal,
  Vault,
  Crown,
} from "lucide-react";
import {DataContext} from "../../DataProvider";
import Modal from "../Modal";
import CoinFlipGame from "../coinflip/CoinFlipGame";

const PotentialEarningsCounter = () => {
  const [earnings, setEarnings] = useState(4816);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random earning value between 3000 and 8000 for demonstration
      const newEarnings = Math.floor(Math.random() * 25000) + 15000;
      setEarnings(newEarnings);
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="finance-amount">
      <SlotCounter value={earnings} />
    </div>
  );
};

const UnstableDashboard = () => {
  return(<h1>test</h1>);
};

export default UnstableDashboard;
