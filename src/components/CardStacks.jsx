import { useState } from "react";
//
const CardStack = ({ images }) => {
  const [cards, setCards] = useState(images);
  //
  const handleClick = () => {
    setCards((prevCards) => [...prevCards.slice(1), prevCards[0]]);
  };
  //
  return (
    <div className="card-stack">
      {cards.map((image, index) => (
        <div
          key={index}
          className="card"
          style={{
            backgroundImage: `url(${image})`,
            // kaj ace
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            zIndex: cards.length - index,
          }}
          onClick={index === 0 ? handleClick : null}
        ></div>
      ))}
    </div>
  );
};

export default CardStack;
