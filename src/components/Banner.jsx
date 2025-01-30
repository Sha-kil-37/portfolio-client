import { useEffect } from "react";
import anime from "animejs";
// Ensure you have necessary styles

const Banner = () => {
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

      anime.timeline().add({
        targets: ".effect1 .letter",
        scale: [5, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 1350,
        delay: (el, i) => 70 * i,
      }, 1500);
    }
  }, []);

  return (
    <section className="mt-50">
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <h2 className="text effect1 font-bold text-5xl">Hello React Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, natus aspernatur molestiae nobis inventore accusamus quaerat aliquid eum aperiam tempore nisi recusandae corporis veniam numquam iure corrupti ex asperiores quia, rem obcaecati neque accusantium laborum autem. Alias rem dolor dolores laboriosam blanditiis aspernatur voluptas magnam incidunt perspiciatis fugiat porro possimus inventore atque consequuntur eum, ipsum repellendus corporis iure deleniti corrupti repudiandae. Alias, pariatur maiores! Inventore provident saepe quidem quae minus quia tempora quis reprehenderit, assumenda numquam unde? Non possimus, nobis laborum aliquam dignissimos ut at voluptates assumenda recusandae temporibus totam consectetur ea, explicabo inventore tenetur error eaque omnis! Tenetur odio nobis porro culpa vel autem laborum nulla minus doloremque hic, nostrum velit iure ullam? Aliquid, ex saepe quod doloremque possimus ducimus tenetur dolores asperiores provident, odio deleniti, sapiente explicabo aspernatur. Itaque consequuntur recusandae aliquam quisquam sapiente possimus in veniam animi corporis soluta iste delectus, reiciendis tempora repellendus magnam illo minus harum ratione. Assumenda velit atque magni, quos consequatur perferendis voluptatum culpa pariatur, quae rerum, ab eveniet vel nam expedita veritatis exercitationem ducimus! Sunt vel repellat, placeat consequuntur voluptatibus nihil molestias voluptatem obcaecati blanditiis quae quaerat pariatur aliquid culpa. Illo voluptatem nulla quam doloremque iste unde possimus. Ad officia hic corporis mollitia expedita maxime natus, dolore cupiditate rerum reiciendis quo totam enim sapiente ipsam praesentium harum cum incidunt commodi consectetur alias quisquam et culpa? Amet magnam alias distinctio omnis cupiditate porro, hic optio corporis! Eveniet iure fugit dolore repudiandae rerum maxime tenetur blanditiis aut odit perspiciatis dolor fuga dicta laudantium quo, labore obcaecati est, perferendis ab eligendi quidem. Minus inventore facere voluptas quam voluptatum sed beatae dolores animi iure eveniet, nam neque quibusdam. Maxime aperiam blanditiis molestiae ipsam debitis aut, quibusdam libero minima esse voluptate atque non delectus autem minus voluptas illo praesentium expedita animi obcaecati dolore repellendus sunt quia numquam.</h2>
    </section>
  );
};

export default Banner;
