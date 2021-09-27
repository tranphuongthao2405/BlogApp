import Footer from "components/Footer";
import Header from "components/Header";
import Homepage from "pages/Homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
