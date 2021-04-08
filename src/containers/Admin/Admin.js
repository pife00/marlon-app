import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/index';
import Pictures from "../../components/Pictures/Pictures";
import SideMenu from "../../components/SideMenu/SideMenu";
import Dashboard from "../../components/Dashboard/Dashboard";
import Logout from '../../components/Auth/Logout/Logout';
import List from "../../components/List/List";
import Aux from "../../hoc/Auxiliary";
import {Route, Switch} from 'react-router-dom';

class Admin extends Component {

  componentDidMount(){
    this.props.documentsInit()
  }

  
  render(h) {
    const adminMenu = [
      {
          title:'Resumen',
          items:['Resumen'],
          links:['/admin/dashboard']
      },
      {
          title:'Telefono',
          items:['Lista','Subir'],
          links:['/admin/list','/admin/upload']
      },
      {
        title:'Usuario',
        items:['Cerrar Sesion'],
        links:['/admin/log-out']
      }
   ]
    return (
      <Aux>
        <div className="columns">
          <div className="column is-2">
            <SideMenu menu={adminMenu} />
          </div>
          <div className="column is-10">
          <Switch>
          <Route path='/admin/dashboard' component={Dashboard} />
          <Route path='/admin/list' component={List} />
          <Route path='/admin/upload' component={Pictures} />
          <Route path='/admin/log-out' component={Logout} />
         </Switch>
          </div>
        </div>
      </Aux>
    );
  }
}

const maptoDispatchToProps = (dispatch) => {
  return{
    documentsInit:()=> dispatch(actionTypes.documentsInit())
  }
}

export default connect(null,maptoDispatchToProps)(Admin);
