import React from 'react';
import Card from '../UI/Card/Card';

const accesoriesCard = (props) =>{
    return(
        <div className='column is-3' style={{display:'inline-block'}}>
            <Card name='iphone' 
            description='Telefono Caro  por dios mi riñon'  
            source='https://http2.mlstatic.com/D_NQ_NP_798974-MCO41612275980_052020-O.webp'
            link='ir'
            price='10.000.000'
            />
        </div>    
    )
}
export default accesoriesCard;