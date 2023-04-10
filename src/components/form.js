import React, { useState } from 'react'
import Modal from './modal'
import Currencies from '../currencies.json'

export default function ExchangeForm() {
  // console.log(Currencies[0].sign)

  const [currencyFrom, setCurrencyFrom] = useState('GEL')
  const [currencyTo, setCurrencyTo] = useState('$')
  
  // const [currentCurrency, setCurrentCurrency] = useState({name: 'Dollar', sign: '$', value: 100})

  const [currencyFromValue, setCurrencyFromValue] = useState(100)
  const [currencyToValue, setCurrencyToValue] = useState(94.42)
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleChangeCurrencyFrom(event) {
    setCurrencyFromValue(event.target.value)
    setCurrencyToValue((event.target.value * 0.95).toFixed(2))
  }
  function handleChangeCurrencyTo(event) {
    setCurrencyToValue(event.target.value)
    setCurrencyFromValue((event.target.value * 1.06).toFixed(2))
  }

  function openModal() {
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="form-control">
        <input type="number" value={currencyFromValue} name="currencyFrom" onChange={handleChangeCurrencyFrom} />
        <div onClick={openModal} className="form-control__icon">
          <div className="currency-sign">{currencyFrom}</div>
        </div>
      </div>

      <div className="form-control">
        <input type="number" value={currencyToValue} name="currencyTo" onChange={handleChangeCurrencyTo} />
        <div className="form-control__icon">
          {/* <div className="currency-sign currency-sign--symbol">{currentCurrency.sign}</div> */}
          <div className="currency-sign currency-sign--symbol">{currencyTo}</div>
        </div>
      </div>
      
      <Modal
        isModalOpen={isModalOpen}
        closeModal={(currentCurrencyFromModal) => {
          setIsModalOpen(!isModalOpen)
          console.log('currency from modal is', currentCurrencyFromModal)
          if (currentCurrencyFromModal) {
            let newCurrency = Currencies.filter(el => el.name === currentCurrencyFromModal)
            setCurrencyFrom(newCurrency[0].sign)
          }
        }}
      />
    </>
  );
}
