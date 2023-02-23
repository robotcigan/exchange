import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';  
import ExchangeForm from './components/form'
import Rates from './rates.json'

// let testArr = [
// ]

function App() {
  // console.log('rates', Rates[0])
  // console.log(Rates[0].rates.filter(rate => rate.currency === "USD"))
  return (
    <div className="App">
      <Container>
        <h4>openexchange.com</h4>
        <ExchangeForm />

        <Table>
          <thead>
            <tr>
              <th>Банк</th>
              <th>Покупает $</th>
              <th>Продает $</th>
            </tr>
          </thead>
          <tbody>
            {Rates.map((el, index) =>
              // тут нужно еще вытащить buy, sell
              <p key={index}>{el.rates.filter(rate => rate.currency === "USD")}</p>
            )}
            {/* {Rates.map((el, index) =>
              <tr key={index}>
                <td>{el.bank}</td>
                {el.rates.map((rate, index) =>
                  <>
                    <td class="text-success">
                      {rate.buy}
                    </td>
                    <td class="text-danger">
                      {rate.sell}
                    </td>
                  </>
                )}
              </tr>
            )} */}
          </tbody>
        </Table>
      </Container>

    </div>
  );
}

export default App;
