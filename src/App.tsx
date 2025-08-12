import { useState } from 'react';
import { searchCompanies, SearchResponse } from './api'; // Import SearchResponse from your API file
import { CompanySearch } from "./company"; // Import CompanySearch type
import './App.css';

import CardList from './components/CardList/CardList';
import Search from './components/Search/Search';

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<CompanySearch[]>([]); // Use CompanySearch type here
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

const handleClick = async () => {
  const data = await searchCompanies(query);

  if (typeof data === "string") {
    // 错误信息
    setError(data);
    setResults([]);
  } else {
    // 直接是数组
    setError(null);
    setResults(data);
    console.log("搜索结果:", data);
  }
};



  return (
    <div className="App">
      <Search />
      <input type="text" value={query} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      <CardList  /> {/* Pass results to CardList */}
    </div>
  );
}

export default App;