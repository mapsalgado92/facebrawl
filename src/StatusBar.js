import React from 'react'
import './StatusBar.css'

export default function StatusBar(props) {
    let style = {
        width: `${props.percentage}%`,
        backgroundColor: props.color
    }
    return (
        <div className="bar-wrapper">
            <div className="bar-fill" style={style}></div>
        </div>
    )
}
