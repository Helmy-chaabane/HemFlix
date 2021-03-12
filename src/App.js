import { Route, Switch } from "react-router";
import Login from "./Pages/Login/Login";
import Main from "./Components/MainContent/Main";
import Acceuil from "./Pages/Acceuil/Acceuil";
import ConsultBook from "./Pages/Book/ConsultBook";
import "./App.css";
import SignUp from "./Pages/SignUp/SignUp";
import Order from "./Pages/Order/Order";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/book"
          exact
          render={(props) => {
            return <Main component={ConsultBook} {...props} />;
          }}
        />
        <Route
          path="/"
          exact
          render={(props) => {
            return <Main component={Acceuil} {...props} />;
          }}
        />
        <Route
          path="/myOrders"
          exact
          render={(props) => {
            return <Main component={Order} {...props} />;
          }}
        />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
