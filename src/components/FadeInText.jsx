import { useEffect } from "react";
import anime from "animejs";
export default function FadeInText({ text }) {
  useEffect(() => {
    let tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 850,
    });

    tl.add({
      targets: "section .item",
      width: "100%",
      backgroundColor: "#F6A9BD",
      delay: anime.stagger(100),
    })
      .add({
        targets: "section .item",
        delay: anime.stagger(70),
        width: "97%",
        backgroundColor: "#F4E0E1",
      })
      .add({
        targets: "section .item",
        backgroundColor: "#FFFFFF",
        delay: anime.stagger(50, { from: "center" }),
      })
      .add(
        {
          targets: ".text",
          top: "49%",
          duration: 4500,
          opacity: 1,
        },
        "-=1000"
      );

    // Text animation
    const textWrapper = document.querySelector(".effect1");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /([^.\s]|\w)/g,
        "<span class='letter'>$&</span>"
      );

      anime.timeline().add(
        {
          targets: ".effect1 .letter",
          scale: [5, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 1350,
          delay: (el, i) => 70 * i,
        },
        1500
      );
    }
  }, []);

  return (
    <section className="mt-50">
      {[1, 2, 3].map((value, i) => {
        return <div key={i} className="item"></div>;
      })}
      <h2 className="text effect1 font-bold text-5xl">{text}</h2>
    </section>
  );
}
