import React from "react";
import extractScores from "../../helpers/extractScores";

export default function Score({ data, currentRound, ...props }) {
  const scoreArray = extractScores(data, currentRound);
  return (
    <>
      {scoreArray.map((roundScore, index, array) => {
        console.log(array.length);
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
      <h2>
        {`Pontuação final: ${
          scoreArray.reduce((prev, next) => (prev.total += next.total)).total
        }`}
      </h2>
    </>
  );
}
