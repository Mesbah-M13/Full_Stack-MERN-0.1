import React, { useEffect, useState } from "react";

const Basic = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Side Effect Logic
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((result) => setData(result.results));
  }, []);

  return (
    <div>
      <h1>Fetched Data</h1>
      {data.length > 0 ? (
        <ul>
          {data.map((char) => (
            <li key={char.id}>
              <div className="h-200px w-72 my-2 border-2 border-amber-600">
                <p>{char?.location.name}</p>
                <p>{char?.name}</p>
                <img
                src={char?.image}/>
                <p>{char?.status}</p>
              </div>{" "}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Basic;
