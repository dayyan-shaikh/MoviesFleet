import React, { useEffect, useState } from "react";
import './Hero.css'

const Hero = () => {
  const [records, setRecords] = useState([]);
  

  const searchMovies = async (title) => {

    const response = await fetch(`${`https://www.omdbapi.com/?apikey=87f0865a&s=don&page=1`}&s=${title}`);
    const data = await response.json();

    useEffect(() => {
      searchMovies("Movies");
    })
  };

  
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

    <div className="container">

    {records.map((item,i) => {
        return (
        
            <div key={i} className="card"  style={{width: "18.7rem"}}>
              <img src={item.Poster} alt={item.Title} />
              <div className="card-body">
                <h5 className="card-title">{item.Title}</h5>
                <p className="card-text">
                  {item.Year}
                </p>
              </div>
            </div>
          
        );
      })}
      
    </div>
      
    </>
  );
};

export default Hero;
