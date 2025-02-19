import CardStacks from "./CardStacks";
import AnimatedGradientText from "./AnimatedGradientText";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchAdminData } from "../redux/slices/adminDataSlice";
//
const images = [
  "/src/assets/images/two.jpg",
  "/src/assets/images/three.jpg",
  "/src/assets/images/pexels-guruh-budi-430167744-30219924.jpg",
  "/src/assets/images/canyon-9215914_1280.jpg",
  "/src/assets/images/one.jpg",
  "/src/assets/images/xyz.jpeg",
];
//
const Banner = () => {
  const dispatch = useDispatch();
  //
  let text =
    "Hey there! I'm Shakil a full-stack web developer, and I love to build things for the web.";
  //
  // call admin data by useEffect
  useEffect(() => {
    dispatch(fetchAdminData());
  }, [dispatch]);

  //
  return (
    <section className="flex justify-between items-center h-screen py-10 gap-10 container mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -10 }} // Start hidden, move from right
        animate={{ opacity: 1, x: 0 }} // Animate to visible
        transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
      >
        <AnimatedGradientText text={text} className="font-bold text-7xl" />
      </motion.div>
      {/* <DroppingTexts words={["React", "Node", "Express", "MongoDB"]} /> */}
      <motion.div
        initial={{ opacity: 0, x: 10 }} // Start hidden, move from right
        animate={{ opacity: 1, x: 0 }} // Animate to visible
        transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
        className="px-4"
      >
        <CardStacks images={images} />
      </motion.div>
    </section>
  );
};

export default Banner;
