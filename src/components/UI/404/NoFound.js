import React from 'react';
import {RiSignalWifiOffLine}from "react-icons/ri";

const NoFound = () =>{
    return(
        <div className='columns is-mobile'>
            <div className='column is-half is-offset-one-quarter mt-4'>
            <div className='has-text-centered'>
            <RiSignalWifiOffLine size='25rem' /> 
            <h1 className='title' >Pagina no encontrado</h1>   
            </div>
            </div>
        </div>
    )
}

export default NoFound;