import React from "react";
import "./styles.css";

export default function List({ data, ...props }) {
  return (
    <div className="list-container">
      {data
        .sort((a, b) => a.personalRank - b.personalRank)
        .map((item, index) => (
          <div
            key={`list-item-${index}`}
            className="item list-item"
            onDragStart={(e) => e.preventDefault()}
          >
            <div className="list-item-rank">{item.personalRank}</div>
            <img
              className="list-image"
              src={item.url}
              alt={item.name}
              onDragStart={(e) => e.preventDefault()}
            />
            <div className="list-item-name">{item.name}</div>
          </div>
        ))}
    </div>
  );
}
