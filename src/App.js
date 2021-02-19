import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

//Components
import Main from "./components/Main"
import Linebar from "./components/Linebar"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App container">
      <Nav />
      {/* Links */}
      <div className="lineContainer">
        <Linebar />
      </div>

      <div id="content">
        <Router>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App;
