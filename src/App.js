import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AboutUsPage from "./screens/AboutUsPage";
import ContactPage from "./screens/ContactPage";
import GamesPage from "./screens/GamesPage";
import HomePage from "./screens/HomePage";
import LittleOnesPage from "./screens/LittleOnesPage";
import PolicyPage from "./screens/PolicyPage";
import TrtCocukPage from "./screens/TrtCocukPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/littleones">
          <LittleOnesPage />
        </Route>
        <Route path="/trtcocuk">
          <TrtCocukPage />
        </Route>
        <Route path="/iletisim">
          <ContactPage />
        </Route>
        <Route path="/gizlilik">
          <PolicyPage />
        </Route>
        <Route path="/hakkimizda">
          <AboutUsPage />
        </Route>
        <Route path="/oyunlar">
          <GamesPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
