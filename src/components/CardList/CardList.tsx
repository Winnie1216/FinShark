import React, { SyntheticEvent } from "react";
import Card from "../Card/Card"
import { CompanySearch } from "../../company";

interface Props{
  searchResults: CompanySearch[];
  PortfolioCreate:(symbol: string)=>void,
}

const CardList = ({searchResults,PortfolioCreate}: Props) => {
  console.log(searchResults);
  return (
    <div>
      {/* <Card price={120} companyName="AAPL" ticker="AAPL"/>
      <Card price={120} companyName="AAPL" ticker="AAPL" />
      <Card price={120} companyName="AAPL" ticker="AAPL"/> */}
      {searchResults.length >0 ? (
        searchResults.map((result)=>{
          return <div><Card companyName={result.symbol} ticker={result.name}  currency={result.currency}
  exchangeFullName={result.exchangeFullName}
  exchange={result.exchange}
  PortfolioCreate={PortfolioCreate}/></div>
        })
      ):(
        <h1>no results</h1>
      )}
    </div>
  );
};

export default CardList;
