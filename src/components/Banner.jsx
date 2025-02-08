import AnimatedText from "./AnimatedText";
import CardStacks from "./CardStacks";
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

  //
  return (
    <section className="mt-30 py-20 dark:bg-dark flex justify-between items-center">
      <div>
        <AnimatedText text={text} className="text-primary font-primary" />
      </div>
      <div className="px-10 py-10">
        <CardStacks images={images} />
      </div>
    </section>
  );
};

export default Banner;
