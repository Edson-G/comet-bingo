import React from "react";
import "./styles.css";
export default function Bingo({ data, ...props }) {
  const finalsText = {
    16: "Oitavas de final",
    8: "Quartas de final",
    4: "Semifinalista",
    2: "Segundo lugar",
  };
  return (
    <div className="bingo-container">
      {data.map((item, index) => (
        <div
          key={`bingo-item-${index}`}
          className={`item bingo-item }`}
          onDragStart={(e) => e.preventDefault()}
        >
          <img
            className={`bingo-image ${!item.status ? `bingo-item-dead` : ``}`}
            src={item.url}
            alt={item.name}
            rank={item.personalRank}
            onDragStart={(e) => e.preventDefault()}
          />
          <p className="bingo-status">
            {!item.status
              ? item.id !== 0 && item.seed !== 0
                ? finalsText[2 ** (9 - item.round)] ||
                  `Top ${2 ** (9 - item.round)}`
                : `Não qualificada`
              : ``}
          </p>
        </div>
      ))}
    </div>
  );
}
