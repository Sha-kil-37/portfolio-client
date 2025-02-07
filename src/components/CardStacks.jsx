import { useState, useCallback } from "react";
//
const CardStacks = () => {
  const [isTransition, setIsTransition] = useState(false);
  //
  const handleToggle = useCallback(() => {
    setIsTransition((prev) => !prev);
  }, []);

  // 6 unique images shared among 3 stacks
  const cards = [
    { image: "/src/assets/images/apples-7465439_1280.jpg", title: "Card 1" },
    { image: "/src/assets/images/canyon-9215914_1280.jpg", title: "Card 2" },
    { image: "/src/assets/images/elephants-9175178_1280.jpg", title: "Card 3" },
    { image: "/src/assets/images/flower-9189857_1280.jpg", title: "Card 4" },
    { image: "/src/assets/images/one.png", title: "Card 5" },
    { image: "/src/assets/images/shakil.png", title: "Card 6" },
  ];

  // Divide the 6 cards into 3 stacks (2 cards per stack)
  const stacks = [
    cards.slice(0, 2), // First 2 cards
    cards.slice(2, 4), // Next 2 cards
    cards.slice(4, 6), // Last 2 cards
  ];

  return (
    <ul
      className={`card-stacks ${isTransition ? "transition" : ""}`}
      onClick={handleToggle}
    >
      {stacks.map((stack, stackIndex) => (
        <li key={stackIndex} className={`stack stack-${stackIndex + 1}`}>
          <ul className="cards-down">
            {stack.map((card, cardIndex) => (
              <li key={cardIndex} className={`card card-${cardIndex + 1}`}>
                <img src={card.image} alt={card.title} />
                {/* <div className="content">
                  <h1>{card.title}</h1>
                  <p>Stack {stackIndex + 1}</p>
                </div> */}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default CardStacks;
