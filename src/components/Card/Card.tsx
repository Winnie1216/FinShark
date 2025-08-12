import React from 'react';
import './Card.css';

type Props = {
  companyName:string,
  ticker:string,
  price:number
};

const Card = ({companyName,ticker,price}: Props) => {
  return (
    <div className="card">
      <div className="img">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JUouL0b9o9YXJ2jL2totavkrnRtndw6tXQ&s"
          alt="AAPL"
        />
      </div>
      <div className="des">{companyName}</div>
      <div>{ticker}</div>
      <div className="price">{price}</div>
      <p className="details">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias tenetur
        corrupti obcaecati possimus cum vel maiores quo incidunt, natus
        laboriosam qui! Placeat ducimus tempore quo rerum eaque. Necessitatibus,
        earum dicta!
      </p>
    </div>
  );
};

export default Card;
