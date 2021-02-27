import React from "react";

export default function Card({cardIndex, removeCard, randomNumber}) {
    return (
        <div className="card">
            <p>{randomNumber}</p>
            <i onClick={() => removeCard(cardIndex)} className="ion-close-round"></i>
        </div>
    )
}