import "./styles.css";
import Bingo from "../components/Bingo";
import List from "../components/List";
import Score from "../components/Score";
function App({ person, data, loading, results, currentRound, ...props }) {
  console.log(results);
  console.log(currentRound);
  console.log(loading);
  return (
    <>
      {!loading ? (
        <div className="content">
          <div className="bingo-div">
            <div>
              <h1>Bingo de {person}</h1>
              <Bingo data={[...data]} />
            </div>
            <div>
              <h1>Pontuação</h1>
              <Score />
            </div>
          </div>
          <div>
            <h1>Top 25</h1>
            <List data={[...data]} />
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
