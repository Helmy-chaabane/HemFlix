import { Route, Switch } from "react-router";
import Login from "./Pages/Login/Login";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Acceuil from "./Pages/Acceuil/Acceuil";
import Movie from "./Pages/Movie/Movie";
import MyMovies from "./Pages/MyMovies/MyMovies";
import Actors from "./Pages/Actors/Actors";
import "./App.css";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute path="/" exact component={Acceuil} />
        <ProtectedRoute path="/mymovies" exact component={MyMovies} />
        <ProtectedRoute path="/movie/:id" exact component={Movie} />
        <ProtectedRoute path="/actors" exact component={Actors} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
