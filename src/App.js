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
import ConfirmEnroll from './Components/ConfirmEnroll/ConfirmEnroll';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import Cart from './Components/Cart/Cart';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import AddNewPost from './Components/AddNewCourse/AddNewCourse';
import ManageCourse from './Components/ManageCourse/ManageCourse';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import AdminRoute from './Components/AdminRoute/AdminRoute';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Header></Header>

          <Switch>
            <Route exact path = "/">
              <Home></Home>
            </Route>

            <Route path = "/home">
              <Home></Home>
            </Route>

            <Route path = "/courses">
              <Courses></Courses>
            </Route>

            <Route path = "/courseDetails/:id">
              <CourseDetails></CourseDetails>
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

            <PrivateRoute path ="/confirmEnroll">
              <ConfirmEnroll></ConfirmEnroll>
            </PrivateRoute>

            <AdminRoute path ="/adinPanel">
              <AdminPanel></AdminPanel>
            </AdminRoute>

            <AdminRoute path ="/addNewCourse">
              <AddNewPost></AddNewPost>
            </AdminRoute>

            <AdminRoute path ="/manageCourse">
              <ManageCourse></ManageCourse>
            </AdminRoute>

            <AdminRoute path ="/manageOrders">
              <ManageOrders></ManageOrders>
            </AdminRoute>

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
