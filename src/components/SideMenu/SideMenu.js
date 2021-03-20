import React,{useState,useEffect} from 'react';
import Items from './Items/Items'

const SideMenu = (props) =>{

    const [enterMenu,setMenu] = useState()

    useEffect(()=>{
        if(props.menu != null){
            setMenu(props.menu)
        }
    },[])

    

    let items = null;

    if(enterMenu != null){
        items = enterMenu.map(el=>(
            <Items key={el.title} items={el} />            
        ))
    }
    

    return(
    <div className='column' >
        <aside className='menu' >
           {items}
        </aside>
    </div>
    )
}

export default SideMenu