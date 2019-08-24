import React from "react";
import styled from 'styled-components';



//styling
const StyledDiv = styled.div`
width: 50%;
padding: 10px;
`

const StyledIMG = styled.img`
width: 100%;
`

const StyledH2 = styled.h2`
font-size: 1rem;
`
export default function CharacterCard(props) {
  console.log(props.character)
  return (
    <StyledDiv>
      <StyledIMG src={props.character.image} alt={props.character.name} />
      <StyledH2>Name: {props.character.name}</StyledH2>
    </StyledDiv>
  )
}
