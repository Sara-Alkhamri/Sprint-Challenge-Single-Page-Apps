import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setDdata] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get (`https://rickandmortyapi.com/api/character/`)
      .then(reonse => {
        setDdata(response.data.results);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    // <section className="character-list grid-view">
    //   <h2>TODO: `array.map()` over your state here!</h2>
    // </section>
    <div>
      {data.map(obj => {
        return <CharacterCard key ={obj.id} character={obj} />
      })}
    </div>
  );
}
