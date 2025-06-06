import AnimatedGradientText from "./AnimatedGradientText";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { fetchAdminData } from "../redux/api/visitor/fetchAdminData.js";
import { useDispatch, useSelector } from "react-redux";
import GetMomentMsg from "./GetMomentMsg.jsx";
import Loader from "./Loader.jsx";
import { Link } from "react-router-dom";
// import CardsStack from "./CardsStack.jsx";

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
    <section className="py-30 block relative">
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
          className="flex justify-between mt-15"
        >
          <p className="font-bold font-primary text-lg max-w-[500px]">
            {admin?.subTitle}
          </p>
          {/* <CardsStack card={admin?.images} /> */}
        </motion.div>
        <div className="bg-test w-200 h-50 mt-5 overflow-hidden mx-auto">
          <p>
            Lorem ipsum dolatae eveniet, ab deserunt nulla, facilis distinctio
            expedita dam necessitatibus id cupiditate assumenda officiis itaque
            possimus animi nemo, ex et cum adipisci nobis doloremque quis.
            Itaque, quidem iusto repudiandae, vitae totam consequatur libero
            illo rem inventore molestias at maiores voluptas ullam vel nobis
            deleniti. Neque consequuntur debitis hic expedita! Quibusdam nihil
            consequatur perferendis.
          </p>
        </div>

        {/* <svg></svg> */}
        <Link
          to="/about"
          className="font-bold cursor-pointer text-secondary hover:underline my-10 block text-center"
        >
          about me
        </Link>
      </div>
    </section>
  );
};

export default Banner;
