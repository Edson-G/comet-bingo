import Main from "./pages";
import Navbar from "./components/Navbar";
import { hololiveData, edsonData } from "./data.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import bracketService from "./services";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [bracketData, setBracketData] = useState([]);
  useEffect(
    () =>
      Promise.all([
        bracketService.results(),
        bracketService.currentRound(),
      ]).then((res) => {
        setBracketData([res[0], parseInt(res[1])]);
        setLoading(false);
      }),
    []
  );
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Main
            person="exemplo"
            data={hololiveData}
            results={bracketData[0]}
            currentRound={bracketData[1]}
            loading={loading}
          />
        </Route>
        <Route exact path="/edson">
          <Main
            person="Edson"
            data={edsonData}
            results={bracketData[0]}
            currentRound={bracketData[1]}
            loading={loading}
          />
        </Route>
        <Route exact path="/gabriel">
          <Main
            person="Gabriel"
            data={[]}
            results={bracketData[0]}
            currentRound={bracketData[1]}
            loading={loading}
          />
        </Route>
        <Route exact path="/ladson">
          <Main
            person="Ladson"
            data={[]}
            results={bracketData[0]}
            currentRound={bracketData[1]}
            loading={loading}
          />
        </Route>
        <Route exact path="/lailson">
          <Main
            person="Lailson"
            data={[]}
            results={bracketData[0]}
            currentRound={bracketData[1]}
            loading={loading}
          />
        </Route>
        <Route exact path="/joba">
          <Main
            person="Joba"
            data={[]}
            results={bracketData[0]}
            currentRound={bracketData[1]}
            loading={loading}
          />
        </Route>
        <Route exact path="/willian">
          <Main
            person="Willian"
            data={[]}
            results={bracketData[0]}
            currentRound={bracketData[1]}
            loading={loading}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
