import "./styles.css";
import Bingo from "../components/Bingo";
import List from "../components/List";
import Score from "../components/Score";
import extractWinners from "../helpers/extractWinners";
import findWaifuRound from "../helpers/findWaifuRound";
function App({ person, data, loading, results, currentRound, ...props }) {
  const winners = results ? extractWinners(results) : [];

  const newWaifuData = data.map((waifu) => {
    return {
      ...waifu,
      round: findWaifuRound(waifu.id, winners),
    };
  });

  const finalWaifuData = newWaifuData.map((waifu) => {
    return {
      ...waifu,
      status:
        waifu.round >= currentRound || (currentRound === 1 && waifu.id !== 0),
    };
  });

  return (
    <>
      {!loading ? (
        <div className="content">
          <div className="bingo-div">
            <div>
              <h1>Bingo de {person}</h1>
              <Bingo data={[...finalWaifuData]} />
            </div>
            <div>
              <h1>Pontuação</h1>
              <Score />
            </div>
          </div>
          <div>
            <h1>Top 25</h1>
            <List data={[...finalWaifuData]} />
          </div>
        </div>
      ) : (
        <div className="loading">
          <img
            className="spin-gif"
            src="https://media0.giphy.com/media/a6pzK009rlCak/200.gif"
            alt="Gif de carregamento"
          />
          <p>Carregando dados da API do animebracket</p>
          <p>Isso pode demorar um pouco</p>
        </div>
      )}
    </>
  );
}

export default App;
