// Ensure you have necessary styles

import AnimatedText from "./AnimatedText";
import LightningCanvas from "./LightningCanvas";

//
const Banner = () => {
  let text =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus facilis, laudantium voluptate esse magnam, expedita a ut quod totam tempora, aliquid et illum repellat quos. Reprehenderit autem repudiandae a ut nostrum sapiente consectetur totam ipsum vero tenetur officiis illo ipsam doloribus veniam, iusto eaque alias quam debitis praesentium natus eos.";
  return (
    <section className="mt-20 flex">
      <AnimatedText text={text} />
      <LightningCanvas />
    </section>
  );
};

export default Banner;
