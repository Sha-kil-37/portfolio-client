import { Outlet } from "react-router-dom";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Header from "../../components/Header"; //
import DarkBg from "../../components/DarkBg";
export default function MainLayout({ children }) {
  //
  return (
    <DarkBg>
      <Header />
      <Navbar />
      {children}
      <Outlet />
      <Footer />
    </DarkBg>
  );
}
