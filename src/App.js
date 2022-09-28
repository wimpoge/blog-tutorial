import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./404";
import BlogDetails from "./components/BlogDetails";
import Create from "./components/Create";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
