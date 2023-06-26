import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";

import Checkout from "./pages/Checkout";
import TradingOverview from "./components/dashboard/TradingOverview";
import Withdraw from "./components/dashboard/Withdraw";
import TopUpReset from "./components/dashboard/TopUpReset";
import NewsCalendar from "./components/dashboard/NewsCalendar";
import Help from "./components/dashboard/Help";
import Profile from "./components/dashboard/Profile";
import DashContact from "./components/dashboard/DashContact";

import "./App.css";

import Billing from "./components/dashboard/Billing";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="registration" element={<Registration />} />
          {/* dashboard */}
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="Profile" element={<Profile />} />
            <Route path="billing" element={<Billing />} />
            <Route path="trading-overview" element={<TradingOverview />} />
            <Route path="withdraw" element={<Withdraw />} />
            <Route path="news-calendar" element={<NewsCalendar />} />
            <Route path="top-up-reset" element={<TopUpReset />} />
            <Route path="help" element={<Help />} />
            <Route path="dashboard-contact" element={<DashContact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
