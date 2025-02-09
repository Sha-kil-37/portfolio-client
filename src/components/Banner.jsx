import CardStacks from "./CardStacks";
import AnimatedGradientText from "./AnimatedGradientText";
import { motion } from "framer-motion";
import SmoothScroll from "./SmoothScroll";
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
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsam quod nam nihil sequi maiores, quisquam libero cum, repellat minima quos aliquid delectus omnis rem! Doloremque quae, autem minus, nostrum illo quo similique ratione facere veritatis velit commodi voluptate";
  //

  return (
    <SmoothScroll>
      <section className="flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -10 }} // Start hidden, move from right
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
        >
          <AnimatedGradientText text={text} className="font-bold text-7xl" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }} // Start hidden, move from right
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
          className="px-4"
        >
          <CardStacks images={images} />
        </motion.div>
      </section>
    </SmoothScroll>
  );
};

export default Banner;
