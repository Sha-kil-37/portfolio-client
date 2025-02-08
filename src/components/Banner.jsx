import CardStacks from "./CardStacks";
import { motion } from "framer-motion";
import AnimatedGradientText from "./AnimatedGradientText";

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
  let text = "Lorem ipsum fici laudantium dolorem culpa eligendi modi. Expedi";

  //
  return (
    <section className="py-50 dark:bg-dark flex justify-between items-center">
    <div>
      <AnimatedGradientText text={text} className="font-bold text-7xl" />
    </div>
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
