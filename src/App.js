import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>HOME</h1>
          <Footer />
        </Route>
        <Route path="/iletisim">
          <h1>İLETİŞİM</h1>
          <Footer />
        </Route>
        <Route path="/gizlilik">
          <h1>GİZLİLİK POLİTİKASI</h1>
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
