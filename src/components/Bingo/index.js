import React from "react";
import "./styles.css";
export default function Bingo({ data, ...props }) {
  return (
    <div className="bingo-container">
      {data.map((item, index) => (
        <div
          key={`bingo-item-${index}`}
          className="item bingo-item"
          onDragStart={(e) => e.preventDefault()}
        >
          <img
            className="bingo-image"
            src={item.url}
            alt={item.name}
            rank={item.personalRank}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      ))}
    </div>
  );
}
