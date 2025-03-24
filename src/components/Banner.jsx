import CardStacks from "./CardStacks";
import AnimatedGradientText from "./AnimatedGradientText";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { fetchAdminData } from "../redux/api/visitor/fetchAdminData.js";
import { useDispatch, useSelector } from "react-redux";
import GetMomentMsg from "./GetMomentMsg.jsx";
import audio from "../assets/audio/mymusic2.mp3";
import video from "../assets/video/myvideo.mp4";
import Loader from "./Loader.jsx";
import Test from "./Test.jsx";
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
    <section className=" dark:bg-dark py-20 block relative">
      <div className="w-300 mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }} // Start hidden, move from right
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
        >
          <GetMomentMsg />
          <span className="font-bold font-primary text-7xl">i am</span>
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
            <h3 className="mt-10 text-2xl font-medium font-primary max-w-180">
              {admin?.subTitle}
            </h3>
          </div>
          <CardStacks images={admin?.images} />
        </motion.div>
        {/*  */}
        <Test text="My React App" delay={100} />
        {/*  */}
        <audio controls>
          <source src={audio} type="audio/mp3" />
        </audio>
        <video controls width="600" height="600" className="mx-auto">
          <source src={video} type="video/mp4" />
        </video>
        {/*  */}
        <h2 className="mt-20 font-primary text-2xl text-center text-[#E82561]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nimus itaque
          doloremque et fuga natus. Aperiam quam ea nulla, placeat cum voluptas
          ab consectetur natus, aliquid ullam repellat dolorum eveniet autem
          porro illum quas odit fugit illo nobis architecto, dicta mollitia sed?
          Rerum modi culpa consectetur totam!
        </h2>

        {/* <svg></svg> */}
      </div>
    </section>
  );
};

export default Banner;
