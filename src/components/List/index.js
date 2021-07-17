import React from "react";
import extractListScores from "../../helpers/extractListScores";
import "./styles.css";

export default function List({ data, currentRound, ...props }) {
  // const scoreArray = extractListScores(data, currentRound);
  // const waifuScores = scoreArray
  //   .map((round, index) => {
  //     return {
  //       ...round.reduce((prevWaifu, currentWaifu) => {
  //         if (currentWaifu.name === "Emilia")
  //           console.log("Emilia", index, currentWaifu);
  //         return {
  //           ...prevWaifu,
  //           [currentWaifu.name]: {
  //             ...(prevWaifu[currentWaifu.name] || {}),
  //             [`round${index + 1}`]: currentWaifu.score,
  //           },
  //         };
  //       }, {}),
  //     };
  //   }, {})
  //   .reduce((prev, next, round) => {
  //     console.log(next);
  //     const waifus = Object.keys(next);
  //     console.log(waifus);
  //     return {
  //       ...prev,
  //       ...waifus.reduce((a, b) => {
  //         return { [b]: { ...(a[b] || {}) } };
  //       }, {}),
  //     };
  //   }, {});
  // console.log(waifuScores);
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
            <div className="list-item-content">
              <h3 className="list-item-name">{item.name}</h3>
              <p className="list-item-score"></p>
            </div>
          </div>
        ))}
    </div>
  );
}
