import React from "react";
import Card from "../Card/Card"


type Props = {};

const CardList = (props: Props) => {
  return (
    <div>
      <Card price={120} companyName="AAPL" ticker="AAPL"/>
      <Card price={120} companyName="AAPL" ticker="AAPL" />
      <Card price={120} companyName="AAPL" ticker="AAPL"/>
    </div>
  );
};

export default CardList;
