// Ensure you have necessary styles

import AnimatedText from "./AnimatedText";
import CardStacks from "./CardStacks";
// import CardWithLightning from "./CardWithLightning";
const cards = [
  {
    image: "/src/assets/images/pexels-202387659-30230100.jpg",
    title: "Card 1",
    description: "one",
  },
  {
    image: "/src/assets/images/landscape-9175952_1280.png",
    title: "Card 2",
    description: "two",
  },
  {
    image: "/src/assets/images/shakil.png",
    title: "Card 3",
    description: "three",
  },
  {
    image: "/src/assets/images/one.png",
    title: "Card 4",
    description: "four",
  },
  {
    image: "/src/assets/images/three.png",
    title: "Card 5",
    description: "five",
  },
  {
    image: "/src/assets/images/five.png",
    title: "Card 6",
    description: "six",
  },
];
//
const Banner = () => {
  let text =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus facilis, laudantium voluptate esse magnam, expedita a ut quod totam tempora, aliquid et illum repellat quos. Reprehenderit autem repudiandae a ut nostrum sapiente consectetur totam ipsum vero tenetur officiis illo ipsam doloribus veniam, iusto eaque alias quam debitis praesentium natus eos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus facilis, laudantium voluptate esse magnam, expedita a ut quod totam tempora, aliquid et illum repellat quos. Reprehenderit autem repudiandae a ut nostrum sapiente consectetur totam ipsum vero tenetur officiis illo ipsam doloribus veniam, iusto eaque alias quam debitis praesentium natus eos.";
  return (
    <section className="mt-30 dark:bg-dark block">
      <AnimatedText text={text} />
      <audio src="/src/assets/audio/mymusic3.mp3" controls>
        audio
      </audio>
      {/* <CardWithLightning /> */}
      <CardStacks />
    </section>
  );
};

export default Banner;
