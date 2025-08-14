import React, { SyntheticEvent } from 'react';
import './Card.css';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

type Props = {
  companyName:string,
  ticker:string,
  currency:string,
  exchangeFullName:string,
  exchange:string
  PortfolioCreate:(symbol: string)=>void,
};

const Card = ({companyName,ticker,currency,exchangeFullName,exchange,PortfolioCreate}: Props) => {
  return (
    <div className="card">
      
      <div className="des">{companyName}</div>
      <div>{ticker}</div>
      <div className="price">{currency}</div>
      <div>{exchangeFullName}</div>
      <div>{exchange}</div>
      <AddPortfolio PortfolioCreate={PortfolioCreate} symbol={ticker}/>
    </div>
  );
};

export default Card;
