import React, { useState } from "react";


const Test = () => {


  const [value, setValue] = useState('');
  const [discount, setDiscount] = useState('');

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleDiscountChange = (e) => {
    setDiscount(e.target.value);
  }

  const discountedValue = () => {
    const parsedValue = parseFloat(value);
    const parsedDiscount = parseFloat(discount);

    if (!isNaN(parsedValue) && !isNaN(parsedDiscount)) {
      const discounted = parsedValue - (parsedValue * parsedDiscount) / 100;
      return discounted.toFixed(2);

    } else {
      return "Invalid Input"
    }
  };

  return (
    <>
      <h1>Valor</h1>
      <input type="text" value={value} onChange={handleValueChange} />
      <h1>Desconto</h1>
      <input type="text" value={discount} onChange={handleDiscountChange} />
      <h1>Vl./Comp.</h1>
      <input type="text" value={discountedValue()} readOnly />
    </>
  )
};
export default Test;
