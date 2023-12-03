import React, { useState, useEffect } from "react";
import {
  ConversionRow,
  ConverterContainer,
  Header,
  Input,
  Select,
} from "../styles/App.styled";

const CurrencyConverter = ({ currencyRates }) => {
  const [amount, setAmount] = useState(1);
  const [currencyFrom, setCurrencyFrom] = useState(980);
  const [currencyTo, setCurrencyTo] = useState(840);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    convertCurrency();
  }, [currencyFrom, currencyTo, amount, currencyRates]);

  const convertCurrency = () => {
    const rateFrom = getExchangeRate(currencyFrom, currencyTo);
    const rateTo = getExchangeRate(currencyTo, currencyFrom);

    const converted = (amount * rateFrom) / rateTo;
    setConvertedAmount(converted.toFixed(2));
  };

  const getExchangeRate = (from, to) => {
    const rate = currencyRates.find(
      (currency) =>
        currency.currencyCodeA === from && currency.currencyCodeB === to
    );

    return rate ? rate.rateBuy : 1;
  };

  return (
    <ConverterContainer>
      <Header>Конвертація валют</Header>
      <ConversionRow>
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Select
          value={currencyFrom}
          onChange={(e) => setCurrencyFrom(parseInt(e.target.value))}
        >
          <option value={980}>UAH</option>
          <option value={840}>USD</option>
          <option value={978}>EUR</option>
        </Select>
      </ConversionRow>
      <ConversionRow>
        <Input
          type="text"
          value={convertedAmount === null ? "" : convertedAmount}
          readOnly
        />
        <Select
          value={currencyTo}
          onChange={(e) => setCurrencyTo(parseInt(e.target.value))}
        >
          <option value={980}>UAH</option>
          <option value={840}>USD</option>
          <option value={978}>EUR</option>
        </Select>
      </ConversionRow>
    </ConverterContainer>
  );
};

export default CurrencyConverter;
