import React from "react";
import "./styles.css";
export default function Bingo({ data, ...props }) {
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
          <p
            style={{
              fontSize: 25,
              margin: 0,
              textAlign: "center",
              position: "absolute",

              bottom: 0,
              color: "white",
            }}
          >
            {!item.status
              ? item.id !== 0 && item.seed !== 0
                ? `Top ${2 ** (9 - item.round)}`
                : `Não qualificada`
              : ``}
          </p>
        </div>
      ))}
    </div>
  );
}
