import { useEffect } from "react";

const AnimatedText = () => {
  useEffect(() => {
    const text = document.getElementById("text");
    if (!text) return;

    let newDom = "";
    let animationDelay = 100;

    for (let i = 0; i < text.innerText.length; i++) {
      newDom += `<span class="char">${text.innerText[i] === " " ? "&nbsp;" : text.innerText[i]}</span>`;
    }

    text.innerHTML = newDom;
    const length = text.children.length;

    for (let i = 0; i < length; i++) {
      text.children[i].style.animationDelay = `${animationDelay * i}ms`;
    }
  }, []);

  return (
    <div className="w-full">
      <p id="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt praesentium, rerum voluptatem in reiciendis officia harum repudiandae tempore suscipit ex ea, adipisci ab porro.</p>
   
    </div>
  );
};

export default AnimatedText;
