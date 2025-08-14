import React from 'react'

type Props = {
    symbol:string,
    
}

const CardPortfolio = ({symbol}: Props) => {
  return (
    <div>
        <h4>{symbol}</h4>
        <button>X</button>
    </div>
  )
}

export default CardPortfolio