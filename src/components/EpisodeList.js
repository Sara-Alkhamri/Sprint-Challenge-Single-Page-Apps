import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
import styled from 'styled-components';

//styling 
const StyledDiv = styled.div`
display: flex;
flex-wrap: wrap;
`

export default function EpisodeList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get(`https://rickandmortyapi.com/api/episode/`)
        .then(response => {
            console.log(response.data.results);
            setData(response.data.results)
        })
        .catch(error => {
            console.log(error)
        });
    }, [])

    return (
        <StyledDiv>
            {data.map(obj => {
                return <EpisodeCard key={obj.id} episode={obj} />
            })}
        </StyledDiv>
    )
}