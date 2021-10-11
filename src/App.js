import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Courses from './Components/Courses/Courses';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path = "/home">
            <Home></Home>
          </Route>
          <Route path = "/courses">
            <Courses></Courses>
          </Route>
          <Route path ="/about">
            <About></About>
          </Route>
          <Route path = "/contact">
            <Contact></Contact>
          </Route>
          <Route path ="/login">
            <Login></Login>
          </Route>
          <Route exact path = "/">
            <Home></Home>
          </Route>
          <Route path = "*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
