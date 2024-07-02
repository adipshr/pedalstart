import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App container mx-auto p-4">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/task/:id" component={TaskPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
