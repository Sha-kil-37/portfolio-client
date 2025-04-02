import CardStacks from "./CardStacks";
import AnimatedGradientText from "./AnimatedGradientText";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { fetchAdminData } from "../redux/api/visitor/fetchAdminData.js";
import { useDispatch, useSelector } from "react-redux";
import GetMomentMsg from "./GetMomentMsg.jsx";
import Loader from "./Loader.jsx";
import { Link } from "react-router-dom";

//
const Banner = () => {
  const dispatch = useDispatch();
  const { admin, loading, error } = useSelector(
    (state) => state.adminDataReducer
  );
  // handle re data fetching
  function handleReFetch() {
    return dispatch(fetchAdminData());
  }
  // call admin API to get the banner data
  useEffect(() => {
    dispatch(fetchAdminData());
  }, [dispatch]);
  //
  if (loading) {
    return <Loader></Loader>;
  }
  if (error) {
    return (
      <div className="text-center">
        <h1 className="font-bold text-2xl font-primary text-primary">Oh Uh</h1>
        <p>{error}</p>
        <button
          className="px-2 py-1 bg-secondary rounded-md text-white font-primary cursor-pointer mt-2"
          onClick={handleReFetch}
        >
          retry
        </button>
      </div>
    );
  }

  //
  return (
    <section className="py-50 block relative">
      <div className="w-300 mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }} // Start hidden, move from right
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
        >
          <GetMomentMsg />
          <span className="font-primary font-semibold text-6xl dark:text-white transition-colors duration-700 ease-in-out">
            i am
          </span>
          <AnimatedGradientText
            text={admin?.name}
            className="inline-block font-bold text-7xl font-primary py-3 w-full text-right mt-10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }} // Start hidden, move from right
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
          className="flex justify-between mt-20"
        >
          <div>
            <h3 className="dark:text-test mt-10 text-2xl font-medium font-primary max-w-180">
              {admin?.subTitle}
            </h3>
          </div>
          <CardStacks images={admin?.images} />
        </motion.div>
        {/*  */}

        {/*  */}
        <h2 className="mt-20 font-primary text-2xl text-center dark:text-test">
          {admin?.about}
        </h2>

        {/* <svg></svg> */}
        <Link to="/about" className="font-bold cursor-pointer text-secondary hover:underline my-10 block text-center">
          about me
        </Link>
      </div>
    </section>
  );
};

export default Banner;
