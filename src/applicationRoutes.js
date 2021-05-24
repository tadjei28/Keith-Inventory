import { Switch, Route } from "react-router-dom"
import Dashboard from "./auth/Dashboard/dashboard";
import LandingPage from "./auth/Loadingpage/landingpage";
import Login from "./auth/Loginpage/login";
import SignUp from "./auth/Signup/signup";




const ApplicationRoutes = () => {

    return(
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/dashboard" component={Dashboard}/>

        </Switch>

    )
}

export default ApplicationRoutes