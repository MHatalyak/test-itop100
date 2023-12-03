import React, { useState, useEffect } from "react";
import Header from "./Header";
import CurrencyConverter from "./CurrencyConverter";

const Converter = () => {
  const [currencyRates, setCurrencyRates] = useState([]);

  useEffect(() => {
    fetch("https://api.monobank.ua/bank/currency")
      .then((response) => response.json())
      .then((data) => setCurrencyRates(data));
  }, []);

  return (
    <div>
      <Header currencyRates={currencyRates} />
      <CurrencyConverter currencyRates={currencyRates} />
    </div>
  );
};

export default Converter;
