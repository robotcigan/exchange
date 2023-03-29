import React, { useState } from 'react'
import Modal from './modal'
// import Form from 'react-bootstrap/Form'

export default function ExchangeForm() {
  const [currencyFrom, setCurrencyFrom] = useState(100)
  const [currencyTo, setCurrencyTo] = useState(94.42)
  const [isModalOpen, setIsModalOpen] = useState(true)

  function handleChangeCurrencyFrom(event) {
    setCurrencyFrom(event.target.value)
    setCurrencyTo((event.target.value * 0.95).toFixed(2))
  }
  function handleChangeCurrencyTo(event) {
    setCurrencyTo(event.target.value)
    setCurrencyFrom((event.target.value * 1.06).toFixed(2))
  }

  function openModal() {
    // this.setIsModalOpen(!isModalOpen)
    // setIsModalOpen(true)
    console.log(isModalOpen)
  }

  return (
    <>
      <div className="form-control">
        <input type="number" value={currencyFrom} name="currencyFrom" onChange={handleChangeCurrencyFrom} />
        <div onClick={openModal} className="form-control__icon">
          <div className="currency-sign">GEL</div>
        </div>
      </div>

      <div className="form-control">
        <input type="number" value={currencyTo} name="currencyTo" onChange={handleChangeCurrencyTo} />
        <div className="form-control__icon">
          <div className="currency-sign currency-sign--symbol">$</div>
        </div>
      </div>
      
      <Modal isModalOpen={isModalOpen} />
    </>
  );
}
