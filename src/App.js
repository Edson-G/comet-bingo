import Main from "./pages";
import Navbar from "./components/Navbar";
import { hololiveData, edsonData } from "./data.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Main person="exemplo" data={hololiveData} />
        </Route>
        <Route exact path="/edson">
          <Main person="Edson" data={edsonData} />
        </Route>
        <Route exact path="/gabriel">
          <Main person="Gabriel" data={[]} />
        </Route>
        <Route exact path="/ladson">
          <Main person="Ladson" data={[]} />
        </Route>
        <Route exact path="/lailson">
          <Main person="Lailson" data={[]} />
        </Route>
        <Route exact path="/joba">
          <Main person="Joba" data={[]} />
        </Route>
        <Route exact path="/willian">
          <Main person="Willian" data={[]} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
