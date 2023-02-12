import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';  

let testArr = [
  {
    "bank": "Bank of Georgia",
    "rates": [
      {
        "currency": "USD",
        // "sign": "$",
        "buy": "2.6530",
        "sell": "2.6820"
      },
      {
        "currency": "EUR",
        // "sign": "€",
        "buy": "2.8205",
        "sell": "2.9330"
      },
      {
        "currency": "RUB",
        // "sign": "₽",
        "buy": "0.0308",
        "sell": "0.0410"
      }
    ] 
  },
  {
    "bank": "TBC",
    "rates": [
      {
        "currency": "USD",
        // "sign": "$",
        "buy": "2.6530",
        "sell": "2.6820"
      },
      {
        "currency": "EUR",
        // "sign": "€",
        "buy": "2.8205",
        "sell": "2.9330"
      },
      {
        "currency": "RUB",
        // "sign": "₽",
        "buy": "0.0308",
        "sell": "0.0410"
      }
    ] 
  }
]

function App() {
  // console.log(testArr.map(el => el.bank))
  return (
    <div className="App">
      <Container>
        <h1>Курсы валют</h1>
        <Table>
          <thead>
            <tr>
              <th>Банк</th>
              <th>Покупает $</th>
              <th>Продает $</th>
              <th>Покупает €</th>
              <th>Продает €</th>
              <th>Покупает ₽</th>
              <th>Продает ₽</th>
            </tr>
          </thead>
          <tbody>
            {testArr.map((el, index) =>
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
            )}
            {/* <tr>
              <td>Bank name</td>
              {testArr[0].rates.map((el, index) =>
                <>
                  <td class="text-success">
                    {el.buy}
                  </td>
                  <td class="text-danger">
                    {el.sell}
                  </td>
                </>
              )}
            </tr> */}
          </tbody>
        </Table>
      </Container>

    </div>
  );
}

export default App;
