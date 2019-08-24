import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Route } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

//styling 
const StyledDiv = styled.div`
display: flex;
flex-wrap: wrap;
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get (`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    // <section className="character-list grid-view">
    //   <h2>TODO: `array.map()` over your state here!</h2>
    // </section>
    <StyledDiv className="character-list grid-view">
      
      {characters.map(character => 
         
      <CharacterCard key={character.id} character={character}/>
        
      )} 
      
    </StyledDiv>
    
  );
}
