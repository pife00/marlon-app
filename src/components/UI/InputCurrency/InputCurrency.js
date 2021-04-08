import React, { useState,useEffect } from "react";

const InputCurrency = (props) => {

  useEffect(()=>{
    if(props.value){
      let el = new Intl.NumberFormat().format(props.value)
      setFake(el);
    }
  },[])

  const [fake, setFake] = useState("");

  const noDot = (data) =>{
    var numero = data.replace(/[.,]/g, '');
    numero = parseInt(numero);
    if (Number.isNaN(numero)) {
      return 0;
    } else {
      return numero;
    }
  }

  const convertHandler = (event) => {
    const value = event.target.value;
    const valueReal = noDot(value);
    props.price(valueReal);
    setFake(new Intl.NumberFormat().format(valueReal));
  };

  return (
    <input
      style={props.style}
      type="text"
      className="input"
      onChange={convertHandler}
      value={fake}
    />
  );
};

export default InputCurrency;
