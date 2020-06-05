import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Hero from './components/layout/Hero';
import Navbar3 from './components/layout/Navbar3';
import Home from './components/pages/Home';
import Portal from './components/pages/Portal';
import Staff from './components/pages/Staff';
import Login from './components/auth/Login';

import Layout from './components/layout/Layout';

import Footer from './components/pages/Footer';
import Contact from './components/pages/Contact';
import Policy from './components/pages/Policy';
import Search from './components/pages/Search';
import Saved from './components/pages/Saved';
import DonateForm from './components/pages/DonateForm';
import Donate from './components/pages/Donate';

import "./App.css";


function onAuthRequired({ history }) {
  history.push("/login");
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-240113.okta.com/oauth2/default"
          client_id="0oaad7oto4uSwXPVM4x6"
          redirect_uri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <Hero />
            <Navbar3 />
            <Layout>
              <div>
                <Route path="/" exact={true} component={Home} />
                <Route path="/donateform" exact={true} component={DonateForm} />
                <Route path="/donate" exact={true} component={Donate} />
                <Route path="/policy" exact={true} component={Policy} />
                <Route path="/Search" exact={true} component={Search} />
                <Route path="/saved" exact={true} component={Saved} />
                <Route path="/contact" exact={true} component={Contact} />
                <Route path="/portal" exact={true} component={Portal} />
                <SecureRoute path="/staff" exact={true} component={Staff} />

                <Route
                  path="/login"
                  render={() => <Login baseUrl="https://dev-240113.okta.com" />}
                />
                <Route path="/implicit/callback" component={ImplicitCallback} />
              </div>
            </Layout>
            <Footer />
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;

