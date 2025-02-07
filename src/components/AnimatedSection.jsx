import { useEffect, useState } from "react";
import anime from "animejs";
import { useNavigate } from "react-router-dom";
//
const AnimatedSection = () => {
  const [fade, setFade] = useState(false);
  // const [version, setVersion] = useState(1); //version number
  const navigate = useNavigate();
  //background animation
  useEffect(() => {
    // Background animation
    let tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 850,
    });

    tl.add({
      targets: ".item",
      width: "100%",
      backgroundColor: "#F6A9BD",
      delay: anime.stagger(100),
    })
      .add({
        targets: ".item",
        width: "97%",
        backgroundColor: "#F4E0E1",
        delay: anime.stagger(70),
      })
      .add({
        targets: ".item",
        backgroundColor: "#FFFFFF",
        delay: anime.stagger(50, { from: "center" }),
      })
      .add(
        {
          targets: ".text",
          top: "60%",
          opacity: 1,
          duration: 4500,
        },
        "-=1000"
      );

    // Text animation
    let textWrapper = document.querySelector(".effect1");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /([^.\s]|\w)/g,
        "<span class='letter'>$&</span>"
      );

      anime.timeline().add({
        targets: ".effect1 .letter",
        scale: [5, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 1350,
        delay: (el, i) => 70 * i,
      });
    }
  }, []);
  // handle the animation
  const handleNavigation = () => {
    setFade(true);
    setTimeout(() => navigate("/home"), 2000);
  };
  //
  return (
    <section
      className={fade ? "fade-out" : "relative h-screen overflow-hidden block"}
    >
      <div>
        <h1 className="effect1 uppercase tracking-wide text-primary font-bold text-5xl font-primary text-center">
          hello there, welcome! to my portfolio version
          {/* condition diya website er version show korte hobe */}
        </h1>
        <button
          type="button"
          onClick={handleNavigation}
          className="text text-center inline-block cursor-pointer px-2 py-1 text-dark bg-primary left-[50%] translate-x-[-50%] font-primary text-lg"
        >
          more about
        </button>
      </div>

      {/* background slider */}
      <div className="grid grid-cols-10">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="item bg-[#F4E0E1] h-screen"></div>
        ))}
      </div>
      {/* background slider  */}
    </section>
  );
};

export default AnimatedSection;
