import React from "react";
import { ExchangeRate, HeaderContainer } from "../styles/App.styled";

const Header = ({ currencyRates }) => {
  const getExchangeRate = (from, to) => {
    if (
      !currencyRates ||
      !Array.isArray(currencyRates) ||
      currencyRates.length === 0
    ) {
      return 1;
    }

    const rate = currencyRates.find(
      (currency) =>
        currency.currencyCodeA === from && currency.currencyCodeB === to
    );

    if (!rate) {
      return 1;
    }

    return rate.rateBuy;
  };

  return (
    <HeaderContainer>
      <ExchangeRate>USD to UAH: {getExchangeRate(840, 980)}</ExchangeRate>
      <ExchangeRate>EUR to UAH: {getExchangeRate(978, 980)}</ExchangeRate>
    </HeaderContainer>
  );
};

export default Header;
