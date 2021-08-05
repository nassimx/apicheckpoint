import './App.css';
import UserList from "./UserList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserDetail from "./UserDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={UserList} />
          <Route
            path="/:id"
            exact
            render={(props) => <UserDetail {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
