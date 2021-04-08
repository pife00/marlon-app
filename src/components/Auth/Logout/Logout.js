import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as actionTypes from '../../../store/actions/index';

const Logout = (props) =>{

    const cleanHandler = () =>{
        if(props){
            props.onCleanUser()
        }
    }

    useEffect(()=>{
        cleanHandler()
    },[])

    
    return(
       <Redirect to='/' />
    )
}

const maptoDispatchToProps = (dispatch) => {
    return{
        onCleanUser:()=>dispatch(actionTypes.cleanUser())
    }
}

export default connect(null,maptoDispatchToProps)(Logout)