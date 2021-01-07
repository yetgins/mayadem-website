import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AboutUsPage from "./screens/AboutUsPage";
import ContactPage from "./screens/ContactPage";
import HomePage from "./screens/HomePage";
import LittleOnesPage from "./screens/LittleOnesPage";
import PolicyPage from "./screens/PolicyPage";
import TrtCocukPage from "./screens/TrtCocukPage";
import GameDetailPage from './screens/GameDetailPage';

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
        <Route path='/littleone/:gameId'>
          <GameDetailPage />
        </Route>
        <Route path='/trt/:gameId'>
          <GameDetailPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
