import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  Redirect
} from "react-router-dom";
import Home from "./KEITH INVENTORY/Loadingpage/landingpage";
import Login from "./KEITH INVENTORY/Loginpage/login";
import Register from "./KEITH INVENTORY/Signup/signup";
import Company from "./COMPONENTS/pages/Company";
import Modals from "./COMPONENTS/modals/Modals"
import Spinner from "./COMPONENTS/layout/svgs/Spinner";
import PrivateRoute from "./routing/PrivateRoute";
import Dashboard from "./KEITH INVENTORY/Dashboard/dashboard";
import Suppliers from "./COMPONENTS/suppliers/Suppliers";
import Customers from "./COMPONENTS/customers/customers";
import Products from "./COMPONENTS/products/Products";
import Sales from "./COMPONENTS/sales/Sales";
import Purchases from "./COMPONENTS/purchases/Purchases";
import Settings from "./COMPONENTS/settings/Settings";
import setAuthToken from "./utils/setAuthToken";
import NotFound from './COMPONENTS/pages/NotFound'

if (localStorage.inventoryAppToken) {
  setAuthToken(localStorage.inventoryAppToken);
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/company" component={Company} />
          <Route exact path="/company" component={Company} />
          <Route exact component={Dashboard} path="/dashboard" />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/sales" component={Sales} />
          <Route exact path="/purchases" component={Purchases} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/suppliers" component={Suppliers} />
          <Route exact path="/customers" component={Customers} />

          <Route component={NotFound}/>
        </Switch>
        <Modals />
      </Router>
    </Provider>
  );
}

export default App;