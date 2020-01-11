import React, { useEffect, useState } from 'react'
import { Route, Redirect } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ component: Component, ...rest }) => {

    const [user, setUser] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        // componentDidmount

        const getUser = async () => {
            let token = localStorage.getItem("token");
            if (token) {
              // if (token !== null) {
              //   this.setState({ check: "login" });
              // }
              console.log("me");
              let res = await axios.post(`http://localhost:3001/api/users/me`, {
                token
              });
            //   if (!res) {
            //     window.location.href = "/login";
            //     return;
            //   }
            //   this.setState({ user: res.data });
            if (res.data) {
                setUser(res.data);
                setIsAuthenticated(true);
                console.log(res.data)
            }
            }
        }
        getUser()
    }, [])

    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    );
}

export default ProtectedRoute
