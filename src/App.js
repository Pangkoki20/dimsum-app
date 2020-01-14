import React, { Component, Fragment } from "react";
import Main from "./Main";
import Login from "./component/Login/Login";
import Navigator from "./component/Navigator/Navigator";
import Register from "./component/Register/Register";
import { Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dimsum from "./component/Dimsum/Dimsum";
import Breakfast from "./component/Breakfast/Breakfast";
import Fastfood from "./component/Fastfood/Fastfood";
import Drink from "./component/Drink/Drink";
import Delivery from "./component/Delivery/Delivery";
import Contact from "./component/Contact/Contact";
import Collapses from "./component/Collapses/Collapses";
import Menu from "./component/Menu/Menu";
import OrderFood from "./component/OrderFood/OrderFood";
import ShowOrder from "./component/ShowOrder/ShowOrder";
import Basket from "./component/Basket/Basket";
import Order from "./component/OrderConfirm/Order";
import MenuOrder from "./component/MemuOrder/MenuOrder";
import EachMenuOrder from "./component/MemuOrder/EachMenuOrder";
import "./App.css";
import axios from "axios";
import ProtectedRoute from "./component/ProtectedRoute";
class App extends Component {
  state = {
    user: null
  };

  onUserChanged = user => {
    this.setState({ user });
  };

  componentWillMount 

  // componentDidMount = async nextProps => {
  //   let token = localStorage.getItem("token");
  //   if (token) {
  //     // if (token !== null) {
  //     //   this.setState({ check: "login" });
  //     // }
  //     console.log("me");
  //     let res = await axios.post(`http://localhost:3001/api/users/me`, {
  //       token
  //     });
  //     if (!res) {
  //       window.location.href = "/login"
  //       return
  //     }
  //     this.setState({ user: res.data });
  //   }
  // };

  render() {
    const { user } = this.state;
    // console.log({ user });

    return (
      <div>
        <Navigator user={user} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route
            exact
            path="/login"
            component={() => <Login onUserChanged={this.onUserChanged} />}
          />
          {/* {user ? (
            <Fragment>
              <Route exact path="/register" component={Register} />
              <Route exact path="/Dimsum" component={Dimsum} />
              <Route exact path="/Breakfast" component={Breakfast} />
              <Route exact path="/Fastfood" component={Fastfood} />
              <Route exact path="/Drink" component={Drink} />
              <Route exact path="/Delivery" component={Delivery} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="Collapses" component={Collapses} />
              <Route exact path="/Menu" component={Menu} />
              <Route exact path="/ShowOrder" component={ShowOrder} />
              <Route exact path="/Basket" component={Basket} />
              <Route exact path="/Order" component={Order} />
              <Route exact path="/MenuOrder" component={MenuOrder} />
              <Route
                exact
                path="/EachMenuOrder/:id"
                component={EachMenuOrder}
              />
            </Fragment>
          ) : (
            // <Redirect to="/login" />
            <Fragment />
          )} */}

          {/* <ProtectedRoute> */}
            <Route exact path="/register" component={Register} />
            <Route exact path="/Dimsum" component={Dimsum} />
            <Route exact path="/Breakfast" component={Breakfast} />
            <Route exact path="/Fastfood" component={Fastfood} />
            <Route exact path="/Drink" component={Drink} />
            <Route exact path="/Delivery" component={Delivery} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="Collapses" component={Collapses} />
            <Route exact path="/Menu" component={Menu} />
            <Route exact path="/ShowOrder" component={ShowOrder} />
            <Route exact path="/Basket" component={Basket} />
            <Route exact path="/Order" component={Order} />
            <Route exact path="/MenuOrder" component={MenuOrder} />
            <Route exact path="/OrderFood" component={OrderFood}/>
            <Route exact path="/EachMenuOrder/:id" component={EachMenuOrder} />
          {/* </ProtectedRoute> */}
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}
export default App;
