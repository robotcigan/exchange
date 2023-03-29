import React, { useState } from 'react'

export default function Modal({isModalOpen}) {
  // console.log(isModalOpen)
  const [currentCurrency, setCurrentCurrency] = useState('dollar')
  function changeCurrency(e) {
    setCurrentCurrency(e.target.getAttribute('data-currency'))
    console.log(e.target.getAttribute('data-currency'), currentCurrency)
  }

  return(
    <>
      <div className={`modal ${isModalOpen ? "modal--open" : ""}`}>
        <div className="modal__container">
          <div className="modal__top">
            <div className="modal__header">Выберите валюту</div>
            <div className="modal__close">
              <img src="./img/cross.svg" alt="" />
            </div>
          </div>
          <ul className="currency-select">
            <li onClick={changeCurrency} data-currency="dollar" className="currency-select__item currency-select__item--active">Доллар</li>
            <li onClick={changeCurrency} data-currency="euro" className="currency-select__item">Евро</li>
            <li onClick={changeCurrency} data-currency="ruble" className="currency-select__item">Рубль</li>
            <li onClick={changeCurrency} data-currency="lari"  className="currency-select__item">Лари</li>
            <li onClick={changeCurrency} data-currency="dram"  className="currency-select__item">Драм</li>
          </ul>
        </div>
      </div>
    </>
  )
}