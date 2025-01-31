// Ensure you have necessary styles
import ChangeTextColorByScroll from "./ChangeTextColorByScroll";
import FadeInText from "./FadeInText";
const Banner = () => {
  let text =
    "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus facilis, laudantium voluptate esse magnam, expedita a ut quod totam tempora, aliquid et illum repellat quos. Reprehenderit autem repudiandae a ut nostrum sapiente consectetur totam ipsum vero tenetur officiis illo ipsam doloribus veniam, iusto eaque alias quam debitis praesentium natus eos.";
  return (
    <section>
      <FadeInText text={text} />
      <ChangeTextColorByScroll />
    </section>
  );
};

export default Banner;
