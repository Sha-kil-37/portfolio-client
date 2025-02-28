import CardStacks from "./CardStacks";
import AnimatedGradientText from "./AnimatedGradientText";
import { motion } from "framer-motion";
import { Fragment, useEffect } from "react";
import { fetchAdminData } from "../redux/api/visitor/fetchAdminData.js";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader.jsx";
//
const Banner = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.adminDataReducer
  );
  // handle re data fetching 
  function handleRetry() {
    return dispatch(fetchAdminData());
  }

  // call admin API to get the banner data
  useEffect(() => {
    dispatch(fetchAdminData());
  }, [dispatch]);
  //
  console.log(data?.about);
  if (loading) {
    return <Loader></Loader>;
  }
  if (error) {
    return (
      <div className="text-center">
        <h1>Oh Uh</h1>
        <p>{error}</p>
        <button
          className="px-2 py-1 bg-blue-400 rounded-md text-white font-primary cursor-pointer mt-2"
          onClick={handleRetry}
        >
          Re Tray
        </button>
      </div>
    );
  }
  //
  return (
    <section className="flex justify-between items-center h-screen py-10 gap-10 container mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -10 }} // Start hidden, move from right
        animate={{ opacity: 1, x: 0 }} // Animate to visible
        transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
      >
        <AnimatedGradientText
          text={data?.about}
          className="font-bold text-7xl"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 10 }} // Start hidden, move from right
        animate={{ opacity: 1, x: 0 }} // Animate to visible
        transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
        className=""
      >
        <CardStacks images={data?.images} />
      </motion.div>
    </section>
  );
};

export default Banner;
