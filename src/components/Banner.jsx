import CardStacks from "./CardStacks";
import AnimatedGradientText from "./AnimatedGradientText";
import { motion } from "framer-motion";
import { useRef } from "react";
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
  //
  let text =
    "Hey there! I'm Shakil a full-stack web developer, and I love to build things for the web.";
  //

  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };
  //
  return (
    <section className="flex justify-between items-center h-screen py-10 gap-10 container">
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
    // <section className="block container-fluid">
    //   <div className="px-2 py-2 bg-[#3D8D7A]">
    //   <h1 className="font-primary font-bold text-5xl w-100vh text-center">Shakil</h1>
    //   </div>
    // </section>
  );
};

export default Banner;
