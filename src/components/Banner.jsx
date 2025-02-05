// Ensure you have necessary styles

import AnimatedText from "./AnimatedText";
import CardWithLightning from "./CardWithLightning";

//
const Banner = () => {
  let text =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus facilis, laudantium voluptate esse magnam, expedita a ut quod totam tempora, aliquid et illum repellat quos. Reprehenderit autem repudiandae a ut nostrum sapiente consectetur totam ipsum vero tenetur officiis illo ipsam doloribus veniam, iusto eaque alias quam debitis praesentium natus eos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus facilis, laudantium voluptate esse magnam, expedita a ut quod totam tempora, aliquid et illum repellat quos. Reprehenderit autem repudiandae a ut nostrum sapiente consectetur totam ipsum vero tenetur officiis illo ipsam doloribus veniam, iusto eaque alias quam debitis praesentium natus eos.";
  return (
    // className="mt-20 flex rounded-b-[100px]"
    <section className="mt-30">
      {/* <AnimatedText text={text} /> */}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
        laboriosam.
      </p>
      <audio src="/src/assets/audio/mymusic1.mp3" controls>
        audio
      </audio>

      {/* <CardWithLightning/> */}
    </section>
  );
};

export default Banner;
