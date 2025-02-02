import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//
const FadeOutWrapper = ({ children, to }) => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  //
  const handleNavigation = () => {
    setIsExiting(true);
    setTimeout(() => navigate(to), 5000); // Delay navigation
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      onClick={handleNavigation}
      style={{ cursor: "pointer" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeOutWrapper;
