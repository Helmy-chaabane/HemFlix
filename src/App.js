import { Route, Switch } from "react-router";
import Login from "./Pages/Login/Login";
import Main from "./Components/MainContent/Main";
import Acceuil from "./Pages/Acceuil/Acceuil";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route
          path="/"
          exact
          render={(props) => {
            return <Main component={Acceuil} {...props} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
