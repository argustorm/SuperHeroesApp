import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DashboardRoutes from "./DashboardRoutes";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/login' component={LoginPage} />
                <Route path='/' component={DashboardRoutes} />
            </Switch>
        </Router>
    );
}

export default AppRouter;