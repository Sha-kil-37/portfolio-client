import { useEffect, useState } from "react";
//
const CardStack = ({ images }) => {
  const [cards, setCards] = useState(images);
  // Update state if the prop changes
  useEffect(() => {
    setCards(images);
  }, [images]);

  //
  const handleClick = () => {
    setCards((prevCards) => [...prevCards.slice(1), prevCards[0]]);
  };

  //
  return (
    <div className="relative w-60 h-60">
      {cards?.map((card, index) => {
        //
        return (
          <div
            key={index}
            className={`bg-cover bg-center h-full w-full absolute cursor-pointer rounded-xl overflow-hidden even:rotate-[-5deg] odd:rotate-[5deg] drop-shadow-md`}
            style={{
              backgroundImage: `url(${card?.url})`,
              zIndex: `${cards?.length - index}`,
            }}
            onClick={handleClick}
          ></div>
        );
      })}
    </div>
  );
};

export default CardStack;
