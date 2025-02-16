import { Outlet } from "react-router-dom";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
// import Header from "../../components/Header";
import { motion } from "framer-motion";
//
export default function MainLayout({ children }) {
  return (
    <motion.div
      key="HomePage"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* <Header /> */}
      <Navbar />
      {children}
      <Outlet />
      <Footer />
    </motion.div>
  );
}
