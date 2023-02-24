import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

export default function ExchangeForm() {
  // const [count, setCount] = useState(0)
  const [currencyFrom, setCurrencyFrom] = useState(100)
  const [currencyTo, setCurrencyTo] = useState(94.42)
  function handleChangeCurrencyFrom(event) {
    setCurrencyFrom(event.target.value)
    setCurrencyTo(event.target.value * 0.95)
  }
  function handleChangeCurrencyTo(event) {
    setCurrencyTo(event.target.value)
    setCurrencyFrom(event.target.value * 1.06)
  }
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>$</Form.Label>
        <Form.Control type="number" value={currencyFrom} name="currencyFrom" onChange={handleChangeCurrencyFrom} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>€</Form.Label>
        <Form.Control type="number" value={currencyTo} name="currencyTo" onChange={handleChangeCurrencyTo} />
      </Form.Group>
    </Form>
  );
}
