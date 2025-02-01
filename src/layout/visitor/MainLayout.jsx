import { Outlet } from "react-router-dom";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Fragment } from "react";

//
export default function MainLayout({ children }) {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Outlet />
      <Footer />
    </Fragment>
  );
}
