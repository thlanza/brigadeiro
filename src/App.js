import React, { useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Principal from './pages/Principal';
import Footer from './components/Footer';
import Sobre from './pages/Sobre';

function App() {

  return (
      <Router>
      <Header />
      <Navbar />
        <Switch>
          <Route path="/" exact>
            <Principal />
          </Route>
          <Route path="/sobre" exact>
            <Sobre />
          </Route>
          {/* <Route path="/encomenda" exact>
            <Principal />
          </Route>
          <Route path="/contato" exact>
            <Contact />
          </Route>  */}
        </Switch>
        <Footer />
      </Router>


  );
}

export default App;
