import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

export default function ExchangeForm() {
  // const [count, setCount] = useState(0)
  const [currencyFrom, setCurrencyFrom] = useState(100)
  const [currencyTo, setCurrencyTo] = useState(94.42)
  function handleChangeCurrencyFrom(event) {
    setCurrencyFrom(event.target.value)
    setCurrencyTo((event.target.value * 0.95).toFixed(2))
  }
  function handleChangeCurrencyTo(event) {
    setCurrencyTo(event.target.value)
    setCurrencyFrom((event.target.value * 1.06).toFixed(2))
  }
  return (
    <>
      <div className="form-control">
        <input type="number" value={currencyFrom} name="currencyFrom" onChange={handleChangeCurrencyFrom} />
      </div>

      <div className="form-control">
        <input type="number" value={currencyTo} name="currencyTo" onChange={handleChangeCurrencyTo} />
      </div>
    </>
  );
}
