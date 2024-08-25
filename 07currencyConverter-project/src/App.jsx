import { useState, useCallback, useEffect } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import SelectCurrencyBox from "./components/selectCurrencyBox";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(1);
  const [currencyFrom, setCurrencyFrom] = useState("usd");
  const [currencyTo, setCurrencyTo] = useState("pkr");
  const currencyInfo = useCurrencyInfo(currencyFrom);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyOptions = Object.keys(currencyInfo);

  const convert = () => {
    if (currencyFrom === currencyTo) {
      setConvertedAmount(amount);
      return;
    }

    const finalAmount = amount * currencyInfo[currencyTo];
    setConvertedAmount(Number(finalAmount || 0).toFixed(3));
  };

  const currencySwap = () => {
    console.log("Swapping currency");
    const temp = currencyFrom;
    setCurrencyFrom(currencyTo);
    setCurrencyTo(temp);
  };

  const handleConvert = useCallback(convert, [
    amount,
    currencyFrom,
    currencyTo,
    currencyInfo,
  ]);

  useEffect(() => {
    handleConvert();
  }, [handleConvert, currencyFrom, currencyTo]);

  return (
    <div className="w-full h-screen bg-teal-600">
      <header className="bg-teal-700 h-16 flex items-center font-serif">
        <h1 className="ml-4 text-2xl">
          Rate Raider |{" "}
          <span className="text-xs">Raid the best Rates</span>
        </h1>
      </header>
      <div className="w-full h-5/6 flex justify-center items-center">
        <div className="bg-white mx-4 min-h-80 flex justify-center items-center rounded-3xl p-5">
          <form className=" flex items-center flex-col gap-5">
            <div className="">
              <SelectCurrencyBox
                label="Amount"
                amount={amount}
                setAmount={setAmount}
                currencyFrom={currencyFrom}
                setCurrencyFrom={setCurrencyFrom}
                currencyOptions={currencyOptions}
              />
            </div>
            <div>
              <button
                className="p-3"
                onClick={(e) => {
                  e.preventDefault();
                  currencySwap();
                }}
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 14"
                >
                  <path
                    className="text-black"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 10H1m0 0 3-3m-3 3 3 3m1-9h10m0 0-3 3m3-3-3-3"
                  />
                </svg>
              </button>
            </div>
            <div className="">
              <SelectCurrencyBox
                label="Converted To"
                amount={convertedAmount}
                currencyFrom={currencyTo}
                setCurrencyFrom={setCurrencyTo}
                currencyOptions={currencyOptions}
                inputDisable={true}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
