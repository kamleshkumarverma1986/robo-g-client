import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

function Main() {
  return (
    <>
      <Router>
          <Header/>
          <div className="route-container container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Redirect to="/" />
            </Switch>
          </div>
          <Footer/>
        </Router>
    </>
  );
}

export default Main;