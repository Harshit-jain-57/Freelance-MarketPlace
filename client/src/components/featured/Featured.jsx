import React, { useState } from "react";
import "./Featured.scss";

function Featured() {
  const [query,setQuery]=useState("")
  const handleSearch =()=>{

  }
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="/img/search.png" alt="" />
              <input type="text" placeholder='Try "building mobil app"' value={query} onChange={(e)=>setQuery(e.target.value)}/>
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button onClick={(e)=>setQuery('Web Design')}>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="/img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
