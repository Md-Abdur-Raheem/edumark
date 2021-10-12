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
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import Cart from './Components/Cart/Cart';



function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path="/cart">
              <Cart></Cart>
            </Route>
            <Route path ="/register">
              <Register></Register>
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
      </AuthProvider>
    </div>
  );
}

export default App;
