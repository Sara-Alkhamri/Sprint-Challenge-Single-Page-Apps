import React from 'react';
import styled from 'styled-components';

//styling
const StyledDiv = styled.div`
width: 50%;
padding: 10px;
`

const StyledH2 = styled.h2`
font-size: 1rem;
`
const StyledH3 = styled.h2`
font-size: 1rem;
`

export default function EpisodeCard(props) {
    return (
        <StyledDiv>
            <StyledH2>Name: {props.episode.name}</StyledH2>
            <StyledH3>Episode: {props.episode.episode}</StyledH3>
            <StyledH3>Air Date: {props.episode.air_date}</StyledH3>
        </StyledDiv>
    )
}