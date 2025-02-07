// Ensure you have necessary styles

import AnimatedText from "./AnimatedText";
import CardStacks from "./CardStacks";
// import CardWithLightning from "./CardWithLightning";
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
    <section className="mt-30 py-20 dark:bg-dark flex justify-between items-center">
      <div >
        <AnimatedText text={text} />
      </div>
      <div >
        <CardStacks images={images} />
      </div>
    </section>
  );
};

export default Banner;
