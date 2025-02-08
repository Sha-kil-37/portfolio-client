import AnimatedText from "./AnimatedText";
import CardStacks from "./CardStacks";
import { motion } from "framer-motion";
import AnimatedGradientText from "./AnimatedGradientText";

//
const images = [
  "/src/assets/images/apples-7465439_1280.jpg",
  "/src/assets/images/canyon-9215914_1280.jpg",
  "/src/assets/images/elephants-9175178_1280.jpg",
  "/src/assets/images/flower-9189857_1280.jpg",
  "/src/assets/images/hummingbird-9111853_1280.jpg",
  "/src/assets/images/shakil.png",
];
//
const Banner = () => {
  let text =
    "Lorem ipsum ficiis illo ipsam doloribus veniam, iusto eaque alias quam debitis praesentium natus eos.";

  //
  return (
    <section className="py-50 dark:bg-dark flex justify-between items-center">
      <div>
        <AnimatedGradientText text={text} className="font-bold text-7xl"  />
        <AnimatedText text={text} className="text-[#DA498D] font-primary text-5xl" />
      </div>
      <motion.p
        initial={{ opacity: 0, x: 100 }} // Start hidden, move from right
        animate={{ opacity: 1, x: 0 }} // Animate to visible
        transition={{ duration: 1, delay: 0.5 }} // Delay for smooth effect
        className="px-4"
      >
        <CardStacks images={images} />
      </motion.p>
    </section>
  );
};

export default Banner;
