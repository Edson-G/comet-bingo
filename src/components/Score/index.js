import React from "react";
import extractScores from "../../helpers/extractScores";

export default function Score({ data, currentRound, ...props }) {
  const scoreArray = extractScores(data, currentRound);
  console.log(scoreArray);
  const finalValue =
    scoreArray.reduce(
      (prev, next) => {
        return { total: (prev.total += next.total) };
      },
      { total: 0 }
    ).total - scoreArray[scoreArray.length - 1].total;

  return (
    <>
      {scoreArray.map((roundScore, index, array) => {
        return (
          <div key={`round-score-${index}`}>
            <h4>{`Resultados ${
              index + 1 === array.length ? `parciais ` : ``
            }da ${index + 1}ª Rodada:`}</h4>
            <ul>
              <li>{`Posições: ${roundScore.individual} pontos`}</li>
              <li>{`Linhas: ${roundScore.row} pontos`}</li>
              <li>{`Colunas: ${roundScore.col} pontos`}</li>
              <li>{`Diagonais: ${roundScore.diagonal} pontos`}</li>
              <li>{`Total: ${roundScore.total} pontos`}</li>
            </ul>
          </div>
        );
      })}
      {/* TIL - array.reduce apparently mutates the array.*/}
      <h2>{`Pontuação final: ${finalValue}`}</h2>
      <h2>{`Pontuação esperada: ${
        finalValue + scoreArray[scoreArray.length - 1].total
      }`}</h2>
    </>
  );
}
