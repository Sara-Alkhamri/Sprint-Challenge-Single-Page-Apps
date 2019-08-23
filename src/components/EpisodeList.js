import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

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
        <div>
            {data.map(obj => {
                return <EpisodeCard key={obj.id} episode={obj} />
            })}
        </div>
    )
}