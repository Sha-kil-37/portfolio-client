import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
//
export default function MainLayout({ children }) {
  return (
    <section className="pt-10 dark:bg-dark">
      <Navbar />
      {children}
      <Outlet />
      <Footer />
    </section>
  );
}
