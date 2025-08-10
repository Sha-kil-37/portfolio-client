import AnimatedGradientText from "./AnimatedGradientText";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchAdminData } from "../redux/api/visitor/fetchAdminData.js";
import { useDispatch, useSelector } from "react-redux";
import GetMomentMsg from "./GetMomentMsg.jsx";
import Loader from "./Loader.jsx";
import CardsStack from "./CardsStack.jsx";
import Button from "./Button.jsx";
//
//
const Banner = () => {
  const dispatch = useDispatch();
  const [adminImages, setAdminImages] = useState([]);
  const { admin, loading, error } = useSelector(
    (state) => state.adminDataReducer
  );
  //
  // set admin images to state
  useEffect(() => {
    setAdminImages((prev) => {
      if (!admin?.images) return [];
      // console.log(admin?.images);
      return admin.images.map((image) => image.url);
    });
  }, [admin?.images]);

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
    <section className="block relative">
      <div className="w-300 mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }} // Start hidden, move from right
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
        >
          <GetMomentMsg />
          <span className="font-primary font-semibold text-8xl dark:text-white transition-colors duration-700 ease-in-out">
            i am
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }} // Start hidden, move from right
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
        >
          <AnimatedGradientText
            text={admin?.name}
            className="inline-block font-bold text-7xl font-primary py-3 w-full text-right mt-10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }} // Start hidden, move from right
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
        >
          <p className="font-bold font-primary text-2xl max-w-[500px]">
            {admin?.subTitle}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }} // Start hidden, move from right
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
        >
          <Button>Download Cv</Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }} // Start hidden, move from right
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
        >
          <CardsStack cards={adminImages} />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
