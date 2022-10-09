import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

const Pokemon = () => {
  const [data, setData] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  const pokemonButtonHandler = () => {
    setButtonClicked(!buttonClicked);
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <h1>PokeMon API !</h1>
      <button onClick={pokemonButtonHandler}>See All Pokemons</button>
      {buttonClicked &&
        data.map((pokemon, idx) => {
          return (
            <div key={idx}>
              <p>{pokemon.name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Pokemon;
