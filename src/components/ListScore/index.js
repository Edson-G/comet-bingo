import React from "react";
import "./styles.css";
import extractListScores from "../../helpers/extractListScores";

export default function ListScore({ data, currentRound, ...props }) {
  // const scoreArray = extractListScores(data, currentRound);
  // const finalValue =
  //   scoreArray.reduce(
  //     (prev, next) => {
  //       return { total: (prev.total += next.total) };
  //     },
  //     { total: 0 }
  //   ).total - scoreArray[scoreArray.length - 1].total;

  return (
    <></>
    // <>
    //   {scoreArray.map((roundScore, index, array) => {
    //     return (
    //       <div key={`round-score-${index}`}>
    //         <h4 className="results-title">{`${
    //           index + 1 === array.length ? `Resultado parcial da ` : ``
    //         }${index + 1}ª Rodada: ${roundScore.total}`}</h4>
    //         <hr class="solid" />
    //       </div>
    //     );
    //   })}
    //   {/* TIL - array.reduce apparently mutates the array.*/}
    //   <h2>{`Pontuação final: ${finalValue}`}</h2>
    //   <h2>{`Pontuação esperada: ${
    //     finalValue + scoreArray[scoreArray.length - 1].total
    //   }`}</h2>
    // </>
  );
}
