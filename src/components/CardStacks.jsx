import { useEffect, useState } from "react";
//
const CardStack = ({ images }) => {
  const [cards, setCards] = useState(images);
  // Update state if the prop changes
  useEffect(() => {
    setCards(images);
  }, [images]);
  // auto change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => [...prevCards.slice(1), prevCards[0]]);
    }, 8000);
    return () => clearInterval(interval);
  }, [images]);
  //
  const moveToFirst = (index) => {
    // return setCards((prevCards) => [...prevCards.slice(1), prevCards[0]]);
    const newCards = [...cards]; // Create a copy of the images array
    const clickedCard = newCards.splice(index, 1)[0]; // Remove clicked image
    newCards.unshift(clickedCard); // Place at the start
    setCards(newCards); // Update state
  };

  //
  return (
    <figure className="relative h-60 w-60">
      {cards?.map((card, index) => {
        return (
          <div
            key={index}
            className={`absolute bg-cover bg-center h-full w-full cursor-pointer rounded-xl overflow-hidden`}
            style={{
              backgroundImage: `url(${card?.url})`,
              zIndex: `${cards?.length - index}`,
              rotate: `${(index % 2 === 0 ? 1 : -1) * (Math.random() * 15)}deg`,
            }}
            onClick={() => moveToFirst(index)}
          >
           <div className="bg-dark/30 absolute top-0 left-0 h-full w-full hover:bg-transparent transition-colors duration-500 ease-in-out"></div>
          </div>
        );
      })}
    </figure>
  );
};

export default CardStack;
