import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions/index"
import { useLocation } from 'react-router-dom'

const Search = (props) => {

  const location = useLocation();
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [showList, setShowList] = useState(false);

  const searchDataHander = (event) => {

    let doc = [];

    if(location.pathname === '/'){doc = props.phoneDocuments}
    if(location.pathname === '/accessories'){doc = props.accessoriesDocuments}

    let data = event.target.value;
    setSearch(data);
    if (data !== "") {
      setShowList(true);
      let exp = new RegExp(data, "g");
      let array = doc.filter((el) => {
        return el.name.match(exp);
      });
      setResult(array);
      if(location.pathname === '/'){props.onSearchPhone(array,[])}
      if(location.pathname === '/accessories'){props.onSearchPhone([],array)};
    }

    if (data === "") {
      setShowList(false);
      setResult([]);
      props.onSearchPhone([],[]);
    }
  };

  let options = result.map((el) => {
    return <option key={el.id}>{el.name}</option>;
  });

  let displayList =
    !showList === true ? { display: "none", width: "10px" } : {};

  return (
   
      <div className="control">
        <input
          list="list"
          value={search}
          onChange={searchDataHander}
          className="input"
          type="text"
          placeholder="Buscar por nombre"
        />
   
        <datalist 
        style={displayList} id="list">
          {options}
        </datalist>
      </div>
    
  );
};

const mapToStateToProps = (state) => {
  return {
    phoneDocuments: state.gallery.visiblePhones,
    accessoriesDocuments: state.gallery.visibleAccessories,
  };
};

const maptoDispatchToProps = dispatch =>{
    return{
        onSearchPhone:(phone,accessories)=>dispatch(actionTypes.searchPhone(phone,accessories))
    }
}

export default connect(mapToStateToProps, maptoDispatchToProps)(Search);
