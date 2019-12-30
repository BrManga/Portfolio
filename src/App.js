import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import M from "./components/M/M";
import GlobalStyle from "./styles/Global";
import Home from "./components/Home/Home";

class App extends Component {
  state = {
    navbarOpen: false,
    transition: true
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };
  componentWillMount() {
    setTimeout(() => {
      this.setState({ transition: false });
    }, 2000);
  }
  render() {
    return (
      <>
        <Router>
          <GlobalStyle />

          <Switch>
            {this.state.transition ? (
              <Route exact path="/" component={M} />
            ) : (
              <>
                <Navbar
                  navbarState={this.state.navbarOpen}
                  handleNavbar={this.handleNavbar}
                />
                {/* <Redirect to="/home" />
                 */}{" "}
                <Route exact path="/" component={Home} />
              </>
            )}
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
