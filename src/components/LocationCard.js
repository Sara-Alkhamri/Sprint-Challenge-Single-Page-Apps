import React from "react";


export default function LocationCard(props) {
  // return <span>todo: location</span>;
  return (
    <div className="locationCard">
    <h2>Name: {removeProperties.location.name}</h2>
    <p>Type: {props.location.type}</p>
    <p>Dimension: {props.location.dimension}</p>
    <p>Residents:{props.location.residents.length}</p>
    </div>
  )
}
