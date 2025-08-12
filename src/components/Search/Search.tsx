import React, { useState } from 'react'

type Props = {}

const Search = (props: Props) => {
const [search,setSearch]=useState("")
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e)
  };


  return (
    <div>
        <input type="text" value={search} onChange={(e)=>{handleChange(e)}} />
    </div>
  )
}

export default Search