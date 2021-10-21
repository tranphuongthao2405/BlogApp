import Footer from "components/Footer";
import Header from "components/Header";
import Homepage from "pages/Homepage";
import Login from "pages/Login";
import Register from "pages/Register";
import BlogPost from "pages/BlogPost";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/post/:id" component={BlogPost} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
