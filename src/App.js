
import { BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from './Component/Home/Home';
import ExtraDetails from "./Component/ExtraDetails/ExtraDetails";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <h1 style={{backgroundColor:"red",color:"white",textAlign:"center"}}>SUPERHERO API</h1>
   
       <Router>
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/extraDetails/:id" component={ExtraDetails}/>
          
           </Switch>
       </Router>
      
    </div>
  );
}

export default App;
