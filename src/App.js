import { Route, Switch } from "react-router";
import Login from "./Pages/Login/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
