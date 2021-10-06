import React from 'react'
import './Collection.css'
import AltarCard from "../../components/AltarCard/AltarCard";



export default function Collection(props) {
  return (
    <div>
      <h1 className="text-primary mt-44 text-center"> Collection</h1>
      {/* <img src="https://i.imgur.com/zN0kGhO.png" width="500px" alt="placeholder"/> */}
      {props.altars.map((altar) => (
        <AltarCard user={props.user} images={props.images} altar={altar}/>
      ))}
      <h1 className="text-primary mt-2 mb-4">{props.altars.name}</h1>
    </div>
  )
}
