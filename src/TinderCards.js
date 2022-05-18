import React, { useState } from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";


function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        },
        {
            name: "Jeff Bezos",
            url: "https://www.rwongphoto.com/images/xl/RW8461.jpg",
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setlastDirection(direction);
    };
    const out0fFrame = (name) => {
        console.log(name + " left the screen!");
    };

    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardsContainer'>
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => out0fFrame(person.name)}
                    >
                        <div
                            style = {{backgroundImage: `url(${person.url})`}}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>     
                    </TinderCard>
                    //<h1>{person.name}</h1>
                ))}
        </div>

        </div >
    );
}

export default TinderCards