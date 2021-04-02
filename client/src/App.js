import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import UploaderView from "./views/UploaderView";
import logo from "./logo.svg";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route exact path="/upload">
          <UploaderView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
