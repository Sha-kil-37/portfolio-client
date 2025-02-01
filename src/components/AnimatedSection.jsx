import { useEffect } from "react";
import anime from "animejs";

const AnimatedSection = () => {
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
          top: "49%",
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

  return (
    <div className="relative h-screen overflow-hidden font-['Kanit',sans-serif]">
      <div className="container flex justify-center w-full">
        <h1 className="effect1 absolute top-[40%] text-3xl uppercase tracking-wide text-[#F6A9BD] z-10">
          hello there, welcome!
        </h1>
        <p className="text absolute top-[50%] text-2xl uppercase tracking-wider text-[#F0386B] font-thin opacity-0">
          nice to meet you ☺
        </p>
      </div>

      <section className="grid grid-cols-10">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="item bg-[#F4E0E1] h-screen"></div>
        ))}
      </section>

      <footer className="absolute bottom-0 right-0 flex items-center justify-center w-full h-10 bg-[#F9E3E4] text-xs uppercase font-['Kanit',sans-serif]">
        <p className="text-[#F6A9BD] tracking-wide px-2">
          made by{" "}
          <a
            href="https://codepen.io/juliepark"
            className="text-[#F0386B] transition-all duration-300 hover:bg-[#F6A9BD] hover:text-white"
          >
            julie
          </a>{" "}
          ♡ |{" "}
          <a
            href="https://instagram.com/julieparkim"
            className="text-[#F0386B] transition-all duration-300 hover:bg-[#F6A9BD] hover:text-white"
          >
            instagram
          </a>
        </p>
      </footer>
    </div>
  );
};

export default AnimatedSection;

