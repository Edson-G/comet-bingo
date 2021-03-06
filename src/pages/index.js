import "./styles.css";
import Bingo from "../components/Bingo";
import List from "../components/List";
import Score from "../components/Score";
import extractWinners from "../helpers/extractWinners";
import findWaifuRound from "../helpers/findWaifuRound";
import ListScore from "../components/ListScore";
function App({
  person,
  data,
  loading,
  results,
  currentRound,
  demo = false,
  ...props
}) {
  const winners = results ? extractWinners(results) : [];
  const newWaifuData = data.map((waifu) => {
    return {
      ...waifu,
      round: findWaifuRound(waifu.id, winners),
    };
  });
  const midWaifuData = newWaifuData.map((waifu) => {
    return {
      ...waifu,
      status: (waifu.seed && waifu.round >= currentRound) || demo,
    };
  });
  const finalWaifuData = midWaifuData.map((waifu) => {
    return { ...waifu, round: waifu.status ? currentRound : waifu.round };
  });

  return (
    <>
      {!loading ? (
        <div className="content">
          <div className="bingo-div">
            <div className="user-bingo-card">
              <h1>Bingo de {person}</h1>
              <Bingo data={[...finalWaifuData]} />
            </div>
            {!demo && data.length > 0 ? (
              <div className="user-score-card">
                <h1>Pontuação</h1>
                <Score data={[...finalWaifuData]} currentRound={currentRound} />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="user-top-card">
            <h1>Top 25</h1>
            <List data={[...finalWaifuData]} currentRound={currentRound} />
            <ListScore data={[...finalWaifuData]} currentRound={currentRound} />
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
