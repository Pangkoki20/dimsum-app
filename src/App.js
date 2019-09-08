import React, { Component } from "react";
import Main from "./Main";
import Login from "./component/Login/Login";
import Home from "./component/Home/Home";
import Register from "./component/Register/Register";
import { Switch, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';


import "bootstrap/dist/css/bootstrap.min.css";
import Dimsum from "./component/Dimsum/Dimsum";
import Breakfast from "./component/Breakfast/Breakfast";
import Fastfood from "./component/Fastfood/Fastfood";
import Drink from "./component/Drink/Drink";
import Delivery from "./component/Delivery/Delivery";
import Contact from "./component/Contact/Contact";
import Menu from "./component/Menu/Menu";
import Footer from "./component/Footer/Footer";
import Fried from "./component/Fried/Fried";
import Other from "./component/Other/Other";

import "./App.css";

class App extends Component {
  state = {
    user: null
  };

  onUserChanged = user => {
    this.setState({ user });
  };

  render() {
    const { user } = this.state;

    return (
      <div>
        <Home user={user} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route
            exact
            path="/login"
            component={() => <Login onUserChanged={this.onUserChanged} />}
          />
          <Route exact path="/register" component={Register} />
          <Route exact path="/Dimsum" component={Dimsum} />
          <Route exact path="/Breakfast" component={Breakfast} />
          <Route exact path="/Fastfood" component={Fastfood} />
          <Route exact path="/Drink" component={Drink} />
          <Route exact path="/Delivery" component={Delivery} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Menu" component={Menu} />
          <Route exact path="/Fried" component={Fried}/>
          <Route exact path="/Other" component={Other}/>
        </Switch>
<Footer/>
      </div>
    );
  }
}
export default App;
