import styled from "styled-components";
import { color } from "./colors";

export const HeaderContainer = styled.header`
  background-color: ${color.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 14px;
  margin: 0 10px;
`;

export const ExchangeRate = styled.p`
  margin: 5px 0;
  font-size: 32px;
  color: ${color.blue};
`;

export const ConverterContainer = styled.div`
  display: block;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid ${color.grey};
  border-radius: 14px;
  width: fit-content;
`;
export const Header = styled.h2`
  font-size: 35px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 35px;
`;
export const ConversionRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
`;

export const Input = styled.input`
  border: 0.5 solid ${color.blue};
  border-radius: 14px;
  background-color: ${color.input_background};
  color: ${color.blue};
  padding: 14px 24px;
  font-size: 20px;

  &::placeholder {
    color: ${color.black};
    font-size: 18px;
  }

  outline: none;
`;

export const Select = styled.select`
  border: 0.5 solid ${color.blue};
  padding: 14px 24px;
  font-size: 20px;

  &::placeholder {
    color: ${color.black};
    font-weight: 600;
    font-size: 20px;
  }

  outline: none;
  border-radius: 14px;
  color: ${color.black};
  background-color: ${color.input_background};

  &:hover,
  &:focus {
    border: 1px solid ${color.black};
  }
`;
