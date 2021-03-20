import React from 'react'
import Card from '../UI/Card/Card'

const phoneCard = (props) =>{
    return(       
        <div className='column is-3' style={{display:'inline-block'}}>
            <Card name='iphone' 
            description='Telefono Caro  por dios mi riñon'  
            source='https://tiendasishop.com/media/catalog/product/cache/6517c62f5899ad6aa0ba23ceb3eeff97/1/_/1_37.jpg'
            link='ir'
            price='10.000.000'
            />
        </div>      
    )    
}

export default phoneCard