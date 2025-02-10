import React from "react";
//
const DroppingTexts = ({ words }) => {
  //
  return (
    <div className="dropping-texts">
      {words.map((word, index) => (
        <div key={index} className={`text-${index + 1}`}>
          {word}
        </div>
      ))}
    </div>
  );
};

export default DroppingTexts;
