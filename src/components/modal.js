import React, { useState } from 'react'

export default function Modal({isModalOpen, closeModal, currencies, selectedCurrency, test = 'some'}) {
  const [currentCurrency, setCurrentCurrency] = useState(test)
  console.log(selectedCurrency, 'in modal')
  // console.log('валюты', currencies)
  // const currencyNameList = ['dollar', 'euro', 'ruble', 'dram', 'lari']
  const currencyList = currencies.map(el =>
    <div
      onClick={changeCurrency}
      data-currency={el.name}
      className={`currency-select__item ${test === "some dollar" ? "currency-select__item--active" : ""}`}>{el.rus}
    </div>
  )


  function changeCurrency(e) {
    setCurrentCurrency(e.target.getAttribute('data-currency'))
    console.log('currency in modal is', currentCurrency)
    // console.log(e.target.getAttribute('data-currency'), currentCurrency)
    closeModal(e.target.getAttribute('data-currency'))
  }

  return(
    <>
      <div className={`modal ${isModalOpen ? "modal--open" : ""}`}>
        <div className="modal__container">
          <div className="modal__top">
            <div className="modal__header">Выберите валюту</div>
            <div onClick={() => closeModal()} className="modal__close">
              <img src="./img/cross.svg" alt="" />
            </div>
          </div>
          <div className="currency-select">
            <div
              onClick={changeCurrency}
              data-currency="dollar"
              // className="currency-select__item currency-select__item--active">Доллар
              className={`currency-select__item ${test === "some dollar" ? "currency-select__item--active" : ""}`}>Доллар
            </div>
            {currencyList}
          </div>
        </div>
      </div>
    </>
  )
}