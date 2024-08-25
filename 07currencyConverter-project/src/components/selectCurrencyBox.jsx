/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useId } from "react";

function SelectCurrencyBox({
  label,
  amount,
  setAmount = {},
  currencyFrom,
  setCurrencyFrom,
  currencyOptions = [],
  inputDisable = false,
}) {
  const id = useId();
  return (
    <div className="flex flex-col md:px-5">
      <label
        id={id}
        className="block font-mono mb-2 text-sm font-medium text-gray-600"
      >
        {label}
      </label>
      <div className="flex flex-row bg-white rounded-xl p-4 border-2 border-slate-600 hover:border-slate-900">
        <input
          className=" bg-white w-2/3 text-gray-900 cursor-default font-mono outline-none text-xl font-semibold"
          type="number"
          value={amount}
          disabled={inputDisable}
          autoComplete="off"
          onChange={(e) => setAmount(e.target.value)}
          id="amount"
        />
        <select
          className=" bg-white text-black w-2/6 font-mono outline-none font-semibold "
          id={id}
          value={currencyFrom}
          onChange={(e) => setCurrencyFrom(e.target.value)}
        >
          {currencyOptions.map((option) => {
            return (
              <option key={option} value={option}>
                {option.toUpperCase()}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default SelectCurrencyBox;
