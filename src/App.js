import React from 'react';
// import Container from 'react-bootstrap/Container';
import ExchangeForm from './components/form'
import Rates from './rates.json'

import './styles/main.sass' 

function App() {
  // console.log(Rates[0].rates.filter(rate => {
  //   let currency = rate.currency === "USD"
  //   return currency
  // }))

  return (
    <div className="App">
      <div className='wrapper'>
        <h4>openexchange.com</h4>
        <ExchangeForm />

        <div className='cell'>
          <div className='cell__left'>
            <div>Банк</div>
          </div>
          <div className='cell__middle'>
            <div>Покупает </div>
          </div>
          <div className='cell__right'>
            <div>Продает</div>
          </div>
        </div>

        {Rates.map((el, index) => {
          let currency = el.rates.filter(rate => rate.currency === "USD")
          return(
            <div className='cell' key={index}>
              <div className='cell__left'>
                <div className="cell__img">
                  <img src={`./img/bank/ge/${el.img}.svg`} alt="" />
                </div>
                <span>{el.bank}</span>
              </div>
              <div className="cell__middle">
                <span className='cell__right-text text-red'>{currency[0].buy}</span>
              </div>
              <div className="cell__right">
                <span className='text-green'>{currency[0].sell}</span>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default App;
