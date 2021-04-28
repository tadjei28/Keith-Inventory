import {Switch , Route} from 'react-router-dom'
import Dashboard from "./KEITH INVENTORY/Dashboard/dashboard"
import Landingpage from "./KEITH INVENTORY/Loadingpage/landingpage"
import Login from "./KEITH INVENTORY/Loginpage/login"
import Signup from "./KEITH INVENTORY/Signup/signup"


function App() {
  return (
    
      <Switch>
       < Route path ='/' exact component = {Landingpage} />
       < Route path ='/login' exact component = {Login} />
       < Route path ='/signup' exact component = {Signup} />
       < Route path ='/dashboard' exact component = {Dashboard} />
      </Switch>
    
  );
}

export default App;
