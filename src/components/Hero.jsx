import React, { useEffect, useState } from "react";
import Item from "./Item";

const Hero = async () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=87f0865a&s=don&page=1`)
      .then(response => response.json())
      .then(data => {
        if (data.Search) {
          setRecords(data.Search);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="new-collections">
      <div className="collections">
        {records.map((item, i) => (
          <div key={i}>
            <img src={item.Poster} alt={item.Title} />
            <div>{item.Title}</div>
            <div>{item.Year}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
