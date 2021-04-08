import React, { useState } from "react";
import CardList from "../UI/CardList/CardList";
import { FiHeadphones } from "react-icons/fi";
import { BsPhone} from "react-icons/bs";
import { connect } from "react-redux";

const List = (props) => {
  const [enterType, setType] = useState('Telefono');

  let phones = null;
  let accessories = null;
  

  if (props.phoneDocuments) {
    phones = props.phoneDocuments.map((el) => (
      <CardList key={el.id} product={el} />
    ));
  }

  if (props.accessoriesDocuments) {
    accessories = props.accessoriesDocuments.map((el) => (
      <CardList key={el.id} product={el} />
    ));
  }

  let show = enterType === 'Telefono' ? phones : accessories ;

  const changeHandler = () => {
     switch(enterType){
         case 'Telefono':
             setType('Accesorio')
             break;

          case 'Accesorio': 
            setType('Telefono')
            break;

          default:
            return 'Accesorio'
     }
  };

  return (
    <div>
      <div>
        <div className="field mt-2 has-text-centered">
          <button
            disabled={enterType !== "Accesorio"}
            onClick={changeHandler}
            className="button is-white mr-1"
          >
            <BsPhone size="3em" color="hsl(204, 86%, 53%)" />
          </button>
          <button
            disabled={enterType !== "Telefono"}
            onClick={changeHandler}
            className="button is-white"
          >
            <FiHeadphones size="3em" color="hsl(204, 86%, 53%)" />
          </button>
        </div>
        <hr style={{ backgroundColor: "hsl(204, 80%, 83%)" }} />
      </div>
      {show}
    </div>
  );
};

const mapToStateToProps = (state) => {
  return {
    phoneDocuments: state.gallery.phones,
    accessoriesDocuments: state.gallery.accessories,
  };
};

export default connect(mapToStateToProps)(List);
