import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './index.css';

function CharactersScreen() {

    const [index, setIndex] = useState(1)
    const [character, setCharacter] = useState("")

    useEffect(() => {

        axios.get(`https://swapi.dev/api/people/${index}`)
        .then(res => {
            setCharacter(res.data)
        })
        
    }, [index])

    const increaseIndex = ()  => {
        if (index < 84) {
            setIndex(index + 1)
        } else {
            setIndex(1)
        }
    }

    const decreaseIndex = ()  => {
        if (index !== 1) {
            setIndex(index - 1)
        } else {
            setIndex(83)
        }
    }

    var {name, birth_year, height, hair_color, skin_color, eye_color, gender, vehicles, starships} = character

  return (

    <div className="Container">
        <div className="InfoTitle">
            {name}
        </div>
        <div className="InfoItem">
            Born in: {birth_year}
        </div>
        <div className="InfoItem">
            Height: {height}
        </div>
        <div className="InfoItem">
            Hair color: {hair_color}
        </div>
        <div className="InfoItem">
            Skin color: {skin_color}
        </div>
        <div className="InfoItem">
            Eye color: {eye_color}
        </div>
        <div className="InfoItem">
            Gender: {gender}
        </div>
        <div className="InfoItem">
            Number of vehicles: {vehicles ? vehicles.length : 0}
        </div>
        <div className="InfoItem">
            Number of starships: {starships ? starships.length : 0}
        </div>
        <div className="ButtonsContainer">
            <button className="Button" onClick={decreaseIndex}>
                Previous
            </button> 
            <button className="Button" onClick={increaseIndex}>
                Next
            </button>      
        </div>

    </div>
  );
}

export default CharactersScreen
