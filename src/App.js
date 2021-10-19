import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Resister/Register';
import Services from './components/Services/Services';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
       <AuthProvider>
       <Router>
         <Header></Header>
         <Switch>
           <Route exact path="/">
             <Home></Home>
           </Route>
           <Route exact path="/home">
             <Home></Home>
           </Route>
           <Route exact path="/services">
             <Services></Services>
           </Route>
           <Route exact path="/about">
             <About></About>
           </Route>
           <Route exact path="/contact">
            <Contact></Contact>
           </Route>
           <Route exact path="/login">
             <Login></Login>
           </Route>
           <Route exact path="/register">
             <Register></Register>
           </Route>
           <Route exact path="/detail/:id">
             <Details></Details>
           </Route>
           <Route exact path="*">
             <NotFound></NotFound>
           </Route>
         </Switch>
       </Router>
       </AuthProvider>
    </div>
  );
}

export default App;
