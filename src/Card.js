/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import './Card.css'

export default function Card(props) {
    return (
        <div className="card-wrapper">
            <div className="image-wrapper" style={{backgroundImage: "url(" + props.photoURL + ")"}}></div>
            <div className="name">{props.name}</div>
            <div className="sp-attack"><span>Sp. Attack:</span><span>{props.spAtk.name}</span></div>
            <div className="equipment"><span>Equiped:</span><span>{props.equipment}</span></div>
            <div className="stats-wrapper">
                <div className="stat">ATK <span>{props.stats.atk.toFixed(1)}</span></div>
                <div className="stat">DEF <span>{props.stats.def.toFixed(1)}</span></div>
                <div className="stat">CHA <span>{props.stats.cha.toFixed(1)}</span></div>
                <div className="stat">SPD <span>{props.stats.spd.toFixed(1)}</span></div>
                <div className="stat">ACC <span>{props.stats.acc.toFixed(1)}</span></div>
                <div className="stat">VIT <span>{props.stats.vit.toFixed(1)}</span></div>
            </div>
        </div>
    )
}
