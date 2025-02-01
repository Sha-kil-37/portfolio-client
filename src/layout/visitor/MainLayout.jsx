import { Outlet } from "react-router-dom";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

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
