import React, { useEffect, useState } from "react";
import './Hero.css'

const Hero = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=87f0865a&s=don&page=1`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setRecords(data.Search);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {records.map((item) => {
        return (
          <>
            <div className="card">
              <img src={item.Poster} alt={item.Title} />
              <div className="card-body">
                <h5 className="card-title">{item.Title}</h5>
                <p className="card-text">
                  {item.Year}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Hero;
