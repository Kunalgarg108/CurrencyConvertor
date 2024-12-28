import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyinfo from './hooks/Currencyinfo'
import './App.css'

function App() {
  const [amount, setamount] = useState(0);
  const [convertamt, setconvertamt] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const currinfo = useCurrencyinfo(from);
  const options = Object.keys(currinfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setamount(convertamt);
    setconvertamt(amount);
  };
  const convert = () => {
    setconvertamt(amount * currinfo[to]);
  };
  return (
    <>
      <div
        className="w-full h-screen flex flex-col items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://th.bing.com/th/id/OIP.MhuiKemeYNZy-jvUjbazXgHaEK?rs=1&pid=ImgDetMain')`,
        }}
      >
        <h1 className="text-6xl text-#000 font-bold mt-4">Currency Convertor</h1>
        <div className="w-full mt-8">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-lg bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setamount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertamt}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
