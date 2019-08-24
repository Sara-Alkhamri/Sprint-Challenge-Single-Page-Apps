import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';


export default function LocationsList() {
    const [data, setData] = useState([]);

    useEffect(() => {
    axios    
        .get(`https://rickandmortyapi.com/api/location/`)
        .then(response => {
            console.log(response.data.results);
            setData(response.data.results);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <div>
            {data.map(obj => {
                return <LocationCard key={obj.id} location={obj} />
            })}
        </div>
    )

}
