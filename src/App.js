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

        <thead>
          <tr>
            <th>Банк</th>
            <th>Покупает $</th>
            <th>Продает $</th>
          </tr>
        </thead>

        {Rates.map((el, index) => {
          let currency = el.rates.filter(rate => rate.currency === "USD")
          return(
            <React.Fragment key={index}>
              <p>{currency[0].buy}</p>
              <p>{currency[0].sell}</p>
            </React.Fragment>
          )
        })}

      </div>
    </div>
  );
}

export default App;
