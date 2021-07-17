import React from "react";
import "./styles.css";
import extractScores from "../../helpers/extractScores";
import getWinners from "../../helpers/getWinners";

export default function Score({ data, currentRound, ...props }) {
  const scoreArray = extractScores(data, currentRound);
  console.log(data);
  const [firstPlace, secondPlace] = getWinners(data, currentRound);
  console.log("first:", firstPlace);
  console.log("second:", secondPlace);
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
            {index + 1 !== 9 ? (
              <>
                <h4 className="results-title">{`Resultados ${
                  index + 1 === array.length ? `parciais ` : ``
                }da ${index + 1}ª Rodada:`}</h4>
                <ul className="results-list">
                  <li>{`Posições: ${roundScore.individual} pontos`}</li>
                  <li>{`Linhas: ${roundScore.row} pontos`}</li>
                  <li>{`Colunas: ${roundScore.col} pontos`}</li>
                  <li>{`Diagonais: ${roundScore.diagonal} pontos`}</li>
                  <li>{`Total: ${roundScore.total} pontos`}</li>
                </ul>
              </>
            ) : (
              <>
                <h4 className="results-title">{"Valores bônus"}</h4>
                <ul className="results-list">
                  <li>{`Campeã ${
                    firstPlace
                      ? `numa casa de valor ${firstPlace.positionMultiplier}`
                      : `não está no bingo`
                  }: ${
                    firstPlace ? 250 * firstPlace.positionMultiplier : 0
                  } pontos`}</li>

                  <li>{`Vice-campeã ${
                    secondPlace
                      ? `numa casa de valor ${secondPlace.positionMultiplier}`
                      : `não está no bingo`
                  }: ${
                    secondPlace ? 100 * secondPlace.positionMultiplier : 0
                  } pontos`}</li>

                  <li>{`Total: ${
                    (firstPlace ? 250 * firstPlace.positionMultiplier : 0) +
                    (secondPlace ? 100 * secondPlace.positionMultiplier : 0)
                  } pontos`}</li>
                </ul>
              </>
            )}
            <hr class="solid" />
          </div>
        );
      })}
      {/* TIL - array.reduce apparently mutates the array.*/}
      <h2>{`Pontuação final: ${
        finalValue +
        (firstPlace ? 250 * firstPlace.positionMultiplier : 0) +
        (secondPlace ? 100 * secondPlace.positionMultiplier : 0)
      }`}</h2>
      {currentRound !== 9 ? (
        <h2>{`Pontuação esperada: ${
          finalValue + scoreArray[scoreArray.length - 1].total
        }`}</h2>
      ) : (
        <></>
      )}
    </>
  );
}
