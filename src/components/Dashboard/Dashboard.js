import React from "react";
import { connect } from "react-redux";
import Card from "./Card/Card";

const Dashboard = (props) => {
  

  let numberPhones = props.phoneDocuments.length;
  let numberAccessories = props.accessoriesDocuments.length;
  return (
    <div>
      <h1 className="title mt-1">Resumen</h1>
      <div className="level">
        <Card heading={"Telefonos"} title={numberPhones} />
        <Card heading={"Accesorios"} title={numberAccessories} />
      </div>
      <hr />

     
    </div>
  );
};

const mapToStateToProps = (state) => {
  return {
    phoneDocuments: state.gallery.phones,
    accessoriesDocuments: state.gallery.accessories,
  };
};

export default connect(mapToStateToProps)(Dashboard);
