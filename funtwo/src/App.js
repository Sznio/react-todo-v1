import {
      BrowserRouter as Router,
      Switch,
      Route,
      NavLink,
} from "react-router-dom";

import ToDoPage from "./pages/ToDoPage";
import AboutPage from "./pages/AboutPage";

import "./App.css";

function App() {
      return (
            <Router>
                  <div className="wrap">
                        <nav className="navBar">
                              <ul>
                                    <li>
                                          <NavLink to="/" exact>
                                                Home
                                          </NavLink>
                                    </li>
                                    <li>
                                          <NavLink to="/about">About</NavLink>
                                    </li>
                              </ul>
                        </nav>

                        <Switch>
                              <Route path="/" exact>
                                    <ToDoPage />
                              </Route>
                              <Route path="/about">
                                    <AboutPage />
                              </Route>
                        </Switch>
                  </div>
            </Router>
      );
}

export default App;
