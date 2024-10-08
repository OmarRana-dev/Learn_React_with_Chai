import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((ref) => ref.json())
      .then((ref) => setData(ref[currency]));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
