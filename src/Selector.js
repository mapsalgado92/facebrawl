import React, { Component } from 'react'
import './Selector.css'
import Card from './Card.js'

export default class Selector extends Component {    
    render() {
        return (
            <div className="selector-wrapper">
                <div className="sides-container">
                    <div className="side">
                        <h3>Select Player 1</h3>
                        {renderButtons(this.props.players, this.props.handlePlayerSelection, 0)}
                        <h4>Equipment</h4>
                        {renderButtons(this.props.equipments, this.props.handleEquipmentSelection, 0)}
                        <Card {...equipPlayer(this.props.currentPlayers[0], this.props.currentEquipments[0])}/>
                    </div>
                    <button className="brawl-button" onClick={()=>{this.props.handleChangePage("brawl")}}>BRAWL</button>
                    <div className="side">
                        <h3>Select Player 2</h3>
                        {renderButtons(this.props.players, this.props.handlePlayerSelection, 1)}
                        <h4>Equipment</h4>
                        {renderButtons(this.props.equipments, this.props.handleEquipmentSelection, 1)}
                        <Card {...equipPlayer(this.props.currentPlayers[1], this.props.currentEquipments[1])}/>
                    </div> 
                </div>
                              
            </div>
        )
    }
}

const renderButtons = (object, hFunc, index) => {
    let itemsArr = Object.values(object);
    return (
        <div className="buttons-container">
            <div>{itemsArr.map((item)=><button className="selector-button" onClick={()=>{hFunc(index, item)}}>{item.name}</button>)}</div>
        </div>
    )
}

const equipPlayer = (player, equipment) => {
    const equippedPlayer = JSON.parse(JSON.stringify(player));
    equippedPlayer.stats.atk += equipment.stats.atk;
    equippedPlayer.stats.def += equipment.stats.def;
    equippedPlayer.stats.cha += equipment.stats.cha;
    equippedPlayer.stats.acc += equipment.stats.acc;
    equippedPlayer.stats.vit += equipment.stats.vit;
    equippedPlayer.stats.spd += equipment.stats.spd;
    equippedPlayer.equipment = equipment.name;
    return equippedPlayer;
}

/*const renderMacros = (typeStr, macros, hFunc) => {
    return(
      <div id={typeStr} className={"select-type-wrapper"}>
        <h5>{typeStr}</h5>
        <div className={"select-wrapper"}>{macros.map((macro)=> <SelectButton macro={macro} handleSelect={hFunc}/>)}</div>
      </div>
    )
  }*/