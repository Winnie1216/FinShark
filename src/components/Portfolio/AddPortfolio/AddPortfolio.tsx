import React, { SyntheticEvent } from 'react'

type Props = {
    PortfolioCreate:(symbol: string)=>void,
    symbol:string
}

const AddPortfolio = ({PortfolioCreate,symbol}: Props) => {
  return (
    <div>
        
        <button onClick={() => PortfolioCreate(symbol)}>Add</button>
    </div>
  )
}

export default AddPortfolio