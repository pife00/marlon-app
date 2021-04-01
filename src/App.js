import React,{Component} from 'react';
import Layout from './hoc/Layout/Layout';
import {Route,Switch} from 'react-router-dom'
import Gallery from './containers/Gallery/Gallery'
import Accessories from './containers/Accessories/Accessories'
import ProductDetails from './containers/ProductDetails/ProductDetails'
import Admin from './containers/Admin/Admin';
import {connect} from 'react-redux';
import * as actionTypes from './store/actions/index'

class App extends Component  {

  componentDidMount(){
    this.props.onPhoneInit()
  }

  render(h) {
    return (
      <div>
        <Layout >
          <Switch>
            <Route path='/' exact component={Gallery}  />
            <Route path='/accessories' exact component={Accessories}  />
            <Route path='/productDetails' component={ProductDetails}  />
            <Route path='/admin' component={Admin}  />
          </Switch>
        </Layout>
      </div>
    )
    
  }
  
}

const maptoDispatchToProps = dispatch =>{
  return{
    onPhoneInit:()=>dispatch(actionTypes.phoneDocumentsInit()),
  }
}

export default connect(null,maptoDispatchToProps)(App);
