import Main from "./pages";
import Navbar from "./components/Navbar";
import data from "./data";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import bracketService from "./services";
import { useState, useEffect } from "react";

function App() {
  //TODO - REMOVE HARD CODED FINAL RESULTS
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
            data={data.hololive}
            results={bracketData[0]}
            currentRound={bracketData[1]}
            loading={loading}
            demo={true}
          />
        </Route>
        <Route exact path="/edson">
          <Main
            person="Edson"
            data={data.edson}
            results={bracketData[0]}
            currentRound={bracketData[1]}
            loading={loading}
          />
        </Route>
        <Route exact path="/gabriel">
          <Main
            person="Gabriel"
            data={data.gabriel}
            results={bracketData[0]}
            currentRound={bracketData[1]}
            loading={loading}
          />
        </Route>
        <Route exact path="/ladson">
          <Main
            person="Ladson"
            data={data.ladson}
            results={bracketData[0]}
            currentRound={bracketData[1]}
            loading={loading}
          />
        </Route>
        <Route exact path="/lailson">
          <Main
            person="Lailson"
            data={data.lailson}
            results={bracketData[0]}
            currentRound={bracketData[1]}
            loading={loading}
          />
        </Route>
        <Route exact path="/joba">
          <Main
            person="Joba"
            data={data.joba}
            results={bracketData[0]}
            currentRound={bracketData[1]}
            loading={loading}
          />
        </Route>
        <Route exact path="/willian">
          <Main
            person="Willian"
            data={data.willian}
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
