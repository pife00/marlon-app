import React from 'react';
import CardList from '../UI/CardList/CardList';
import {connect} from 'react-redux';

const List = (props) =>{

    let phones = null;
    let accessories = null;

    if(props.phoneDocuments){
        phones = props.phoneDocuments.map(el=>(
            <CardList key={el.id} product={el} />
        ))
    }

    return(
      <div>
          {phones}
      </div>
    )
}

const mapToStateToProps = state =>{
    return{
        phoneDocuments:state.gallery.phones,
        accessoriesDocument:state.gallery.accessories  
    }
}

export default connect(mapToStateToProps)(List)