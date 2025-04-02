import { Outlet } from "react-router-dom";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Header from "../../components/Header"; //
import DarkBg from "../../components/DarkBg";
import { Fragment } from "react";
export default function MainLayout({ children }) {
  return (
    <DarkBg>
      <Fragment>
        <Header />
        <Navbar />
        {children}
        <Outlet />
        <Footer />
      </Fragment>
    </DarkBg>
  );
}
