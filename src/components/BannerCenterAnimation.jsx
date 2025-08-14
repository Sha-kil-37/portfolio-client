import {
  useMotionTemplate,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
//
const BannerCenterAnimation = (props) => {
  const { scrollY } = useScroll();
  const SECTION_HEIGHT = "auto";
  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full z-0"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        // backgroundImage: `url(${props.image})`,
        background: "linear-gradient(to bottom, #ecdbba, #ffffff)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default BannerCenterAnimation;
