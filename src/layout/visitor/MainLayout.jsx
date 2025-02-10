import { Outlet } from "react-router-dom";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Fragment } from "react";
import Header from "../../components/Header";

//
export default function MainLayout({ children }) {
  return (
    <Fragment>
      <Header />
      <Navbar />
      {children}
      <Outlet />
      <Footer />
    </Fragment>
  );
}
