
import './App.css';
import Home from './screens/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Auth from './screens/Auth';
function App() {
  return (
    <Router>
  <div>
  
  
  <Switch>
  <Route exact path="/">

    <Home/>
    </Route>
    <Route  path="/auth">
   <Auth/>
    </Route>
   
  </Switch>
</div>
</Router>
  );
}

export default App;
