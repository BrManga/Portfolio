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
import Video from "./components/Video/Video";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

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
          <Switch>
            {/*  {this.state.transition ? (
              <Route exact path="/" component={M} />
            ) :  */}
            (
            <>
              <Navbar
                navbarState={this.state.navbarOpen}
                handleNavbar={this.handleNavbar}
              />
              {/* <Redirect to="/home" />  */}

              <Route exact path="/home" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
            </>
            )
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
