import { useEffect, useState, useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link, useLocation, Outlet } from "react-router-dom";

import DashNav from "../components/dashboard/dashNav";
import SiderNav from "../components/dashboard/SiderNav";
import DashboardHome from "../components/dashboard/DashboardHome";
import MobileSideNav from "../components/dashboard/MobileSideNav";

import "../dashboard.css";

export default function Dashboard() {
  const [paraHeight, setparaHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [sideOpen, setSideOpen] = useState(true);
  const [sideOpenMbl, setSideOpenMbl] = useState(true);

  const [disWith, setDisWith] = useState({
    top: 30,
    right: 30,
    left: -20,
    bottom: -5,
  });

  // Bg scrolling
  useEffect(() => {
    if (sideOpenMbl) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [sideOpenMbl]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (screen.width > 560) {
      setDisWith({
        top: 30,
        right: 30,
        left: 15,
        bottom: 10,
      });
    }
  }, []);

  return (
    <>
      <DashNav props={[setSideOpenMbl, sideOpenMbl]} />
      <SiderNav sideOpen={sideOpen} />
      <MobileSideNav props={[setSideOpenMbl, sideOpenMbl]} />
      <div className="wrapper">
        {pathname === "/dashboard" ? <DashboardHome /> : <Outlet />}
      </div>

      {/* <Footer /> */}
    </>
  );
}
