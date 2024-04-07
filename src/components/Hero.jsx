import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("movie");

  const searchMovie = () => {
    fetch(`https://www.omdbapi.com/?apikey=87f0865a&s=${searchTerm}&page=1`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setRecords(data.Search);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=87f0865a&s=${searchTerm}&page=1`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setRecords(data.Search);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <form className="form" role="search">
        <input
        
          className="form-control"
          type="search"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <button className="btn btn-info" type="submit" onClick={searchMovie}>
        Search
      </button>

      <div className="container">
        {records.map((item, i) => {
          return (
            <div key={i} className="card" style={{ width: "17rem" }}>
              <img src={item.Poster} alt={item.Title} />
              <div className="card-body">
                <h5 className="white">{item.Title}</h5>
                <p className="white">{item.Year}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
