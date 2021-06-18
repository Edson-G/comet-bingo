import "./styles.css";
import Bingo from "../components/Bingo";
import List from "../components/List";
import Score from "../components/Score";
function App({ person, data, ...props }) {
  return (
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
  );
}

export default App;
