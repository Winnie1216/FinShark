import { SyntheticEvent, useState } from 'react';
import { searchCompanies, SearchResponse } from './api'; // Import SearchResponse from your API file
import { CompanySearch } from "./company"; // Import CompanySearch type
import './App.css';

import CardList from './components/CardList/CardList';
import Search from './components/Search/Search';
import { log } from 'console';
import ListPortfolio from './components/ListPortfolio/ListPortfolio';

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<CompanySearch[]>([]); // Use CompanySearch type here
  const [error, setError] = useState<string | null>(null);
  const [portfolio, setPortfolio] = useState<string[]>([]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

const handleClick = async () => {
   
  const data = await searchCompanies(query);

  if (typeof data === "string") {
   
    setError(data);
    setResults([]);
  } else {
    
    setError(null);
    setResults(data);
    console.log("搜索结果:", data);
    
  }
};

const PortfolioCreate = (symbol: string) => {
    // 避免重复添加
    if (!portfolio.includes(symbol)) {
      setPortfolio(prev => [...prev, symbol]);
    }
  };


  return (
    <div className="App">
      {/* <Search /> */}
      <input type="text" value={query} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      <CardList searchResults={results} PortfolioCreate={PortfolioCreate}/>
      <ListPortfolio PortfolioValues={portfolio}/>
    </div>
  );
}

export default App;