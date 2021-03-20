import React,{Component} from 'react';
import Layout from './hoc/Layout/Layout';
import {Route,Switch} from 'react-router-dom'
import Gallery from './containers/Gallery/Gallery'
import Accessories from './containers/Accessories/Accessories'
import ProductDetails from './containers/ProductDetails/ProductDetails'
import Admin from './containers/Admin/Admin';

class App extends Component  {

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

export default App;
