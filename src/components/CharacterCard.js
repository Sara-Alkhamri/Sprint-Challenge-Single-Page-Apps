import React from "react";



export default function CharacterCard() {
  return (
    <StyledDiv>
      <img src={props.character.image} alt={props.character.name} />
      <h2>Name: {props.character.name}</h2>
    </StyledDiv>
  )
}
