import React, { useEffect, useState } from "react";
import Item from "./Item";

const Hero = async () => {
  const [record, setRecord] = useState([]);
  let title="movie"
  // const response = await fetch(`https://www.omdbapi.com/?apikey=87f0865a&s=${title}&page=1`);
  
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=87f0865a&s=don&page=1`)
      .then(response => response.json())
      .then(res => setRecord(res))
      .catch(err => console.log(err));
  }, []);
  console.log(record);
  return (
    <div className="new-collections">
      <div className="collections">
       
      {/* {record.Search.map((item,i) => (
              <Item key={i} Poster={item.Poster} Title={item.Title} Year={item.Year}/>
              
            ))} */}
      </div>
    </div>
  );
};





export default Hero;

