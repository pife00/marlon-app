import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Gallery from "./containers/Gallery/Gallery";
import Accessories from "./containers/Accessories/Accessories";
import ProductDetails from "./containers/ProductDetails/ProductDetails";
import SignIn from "./components/Auth/SignIn";
import Admin from "./containers/Admin/Admin";
import Logout from './components/Auth/Logout/Logout';
import { connect } from "react-redux";
import NoFound from './components/UI/404/NoFound';

class App extends Component {
  componentDidMount() {
  }

  render(h) {

    let routes = (
      <Switch>
            <Route path="/" exact component={Gallery} />
            <Route path="/accessories" exact component={Accessories} />
            <Route path="/productDetails" component={ProductDetails} />
            <Route path="/sing-in" component={SignIn} />
            {this.props.auth ? <Route path="/admin/dashboard" component={Admin} />:null }
            {this.props.auth ? <Route path="/admin/list" component={Admin} />:null }
            {this.props.auth ? <Route path="/admin/upload" component={Admin} />:null } 
            {this.props.auth ? <Route path="/admin/log-out" component={Logout} />:null }   
            <Route component={NoFound} />
          </Switch>
    )
    
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapToStateToProps = (state) => {
  return{
    auth: state.auth.user ? true : false
  }
}

const maptoDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapToStateToProps, maptoDispatchToProps)(App);
