import React from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio'

type Props = {
    PortfolioValues:string[];
}

const ListPortfolio = ({PortfolioValues}: Props) => {
  return (
    <div>
        {PortfolioValues.map((PortfolioValue, index) => (
            <CardPortfolio key={index} symbol={PortfolioValue} />
        ))}
    </div>
  )
}

export default ListPortfolio