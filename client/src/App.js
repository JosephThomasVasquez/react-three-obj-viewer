import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import UploaderView from "./views/UploaderView";
import ItemView from "./views/ItemView";
import logo from "./logo.svg";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/upload"component={UploaderView} />
        <Route exact path="/item/:id" component={ItemView} />
      </Switch>
    </Router>
  );
}

export default App;
