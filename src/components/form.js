import React, { useState } from 'react'
import Modal from './modal'
import Currencies from '../currencies.json'

export default function ExchangeForm({defaultCurrencies}) {

  const [currencyFrom, setCurrencyFrom] = useState({
    name: defaultCurrencies.from.name,
    sign: defaultCurrencies.from.sign,
    value: 100
  })
  const [currencyTo, setCurrencyTo] = useState({
    name: defaultCurrencies.to.name,
    sign: defaultCurrencies.to.sign,
    value: 94.42
  })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState()

  function handleChangeCurrencyFrom(event) {
    setCurrencyFrom(prevState => ({
      ...prevState,
      value: event.target.value
    }))
    setCurrencyTo(prevState => ({
      ...prevState,
      value: (event.target.value * 0.95).toFixed(2)
    }))
  }
  function handleChangeCurrencyTo(event) {
    setCurrencyFrom(prevState => ({
      ...prevState,
      value: (event.target.value * 1.06).toFixed(2)
    }))
    setCurrencyTo(prevState => ({
      ...prevState,
      value: event.target.value
    }))
  }

  function openModal(event) {
    if (event.currentTarget.dataset.input === 'from') {
      setSelectedCurrency(currencyFrom)
    } else setSelectedCurrency(currencyTo)
    setIsModalOpen(true)
  }

  function closeModal(currentCurrencyFromModal) {
    console.log('we are from another close modal')
    setIsModalOpen(!isModalOpen)
    console.log('currency from modal is', currentCurrencyFromModal)
    if (currentCurrencyFromModal) {
      let newCurrency = Currencies.filter(el => el.name === currentCurrencyFromModal)
      setCurrencyFrom(newCurrency[0].sign)
    }
  }

  return (
    <>
      <div className="form-control">
        <input type="number" value={currencyFrom.value} name="currencyFrom" onChange={handleChangeCurrencyFrom} />
        <button onClick={openModal} data-input="from" className="form-control__icon">
          <div className="currency-sign">{currencyFrom.sign}</div>
        </button>
      </div>

      <div className="form-control">
        <input type="number" value={currencyTo.value} name="currencyTo" onChange={handleChangeCurrencyTo} />
        <button onClick={openModal} data-input="to" className="form-control__icon">
          <div className="currency-sign currency-sign--symbol">{currencyTo.sign}</div>
        </button>
      </div>
      
      <Modal
        isModalOpen={isModalOpen}
        closeModal={(currentCurrencyFromModal) => closeModal(currentCurrencyFromModal)}
        currencies={Currencies}
        selectedCurrency={selectedCurrency}
      />
    </>
  );
}
