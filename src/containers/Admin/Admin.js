import React, { Component } from "react";

import Pictures from "../../components/Pictures/Pictures";
import SideMenu from "../../components/SideMenu/SideMenu";
import List from "../../components/List/List";
import Aux from "../../hoc/Auxiliary";
import {Route, Switch} from 'react-router-dom';

class Admin extends Component {

  
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
          <Route path='/admin/list' component={List} />
          <Route path='/admin/upload' component={Pictures} />
         </Switch>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Admin;
