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

        <div className='cell-header'>
          <div>Банк</div>
          <div>Покупает $</div>
          <div>Продает $</div>
        </div>

        {Rates.map((el, index) => {
          let currency = el.rates.filter(rate => rate.currency === "USD")
          return(
            <div className='cell' key={index}>
              <div className='cell_left'>
                <span>{el.bank}</span>
              </div>
              <div className="cell_right">
                <span className='cell_right-text text-red'>{currency[0].buy}</span>
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
