import React, { Component } from 'react'
import Card from './Card.js'
import StatusBar from './StatusBar.js'
import './Brawl.css'

//props => palyer1: {}, player2: {}, equip1: {}, equip2:{}

export default class Brawl extends Component {
    constructor(props) {
        super(props);    
        this.state = {
            player1: {
                ...props.player1,
                equipment: props.equip1.name,
                hp: (props.player1.stats.vit + props.equip1.stats.vit) * 80 + 500,
                maxHp: (props.player1.stats.vit + props.equip1.stats.vit) * 80 + 500,
                sp: 0,
                stats: {
                    atk: props.player1.stats.atk + props.equip1.stats.atk,
                    def: props.player1.stats.def + props.equip1.stats.def,
                    cha: props.player1.stats.cha + props.equip1.stats.cha,
                    spd: props.player1.stats.spd + props.equip1.stats.spd,
                    acc: props.player1.stats.acc + props.equip1.stats.acc,
                    vit: props.player1.stats.vit + props.equip1.stats.vit
                },
                displayString: ""
            },
            player2: {
                ...props.player2,
                equipment: props.equip2.name,
                hp: (props.player2.stats.vit + props.equip2.stats.vit) * 80 + 500,
                maxHp: (props.player2.stats.vit + props.equip2.stats.vit) * 80 + 500,
                sp: 0,
                stats: {
                    atk: props.player2.stats.atk + props.equip2.stats.atk,
                    def: props.player2.stats.def + props.equip2.stats.def,
                    cha: props.player2.stats.cha + props.equip2.stats.cha,
                    spd: props.player2.stats.spd + props.equip2.stats.spd,
                    acc: props.player2.stats.acc + props.equip2.stats.acc,
                    vit: props.player2.stats.vit + props.equip2.stats.vit
                },
                displayString: ""
            }
        }
        this.handleFight = this.handleFight.bind(this);
    }

    handleFight = () => {
        let player1 = {...this.state.player1};
        let player2 = {...this.state.player2};
        let fight = (attacker, defender) => {
            let displayString = "";
            let damage = 0;
            if(attacker.sp >= 100){
                attacker.sp = 0;
                damage = attacker.spAtk.action(attacker, defender);
                displayString += attacker.name + " uses Special Attack.\n" + attacker.spAtk.description + "\n\n"; 
            }
            let hitScore = 60 + attacker.stats.acc * 2 - defender.stats.spd*1.2;
            damage += (attacker.stats.atk *(100 + 30*Math.random()))/(defender.stats.def);
            console.log(hitScore);
            if(Math.random()*100 < hitScore){
                defender.hp -= damage;
                attacker.sp += attacker.stats.cha + Math.random()*damage/25;
                displayString += "Hits " + defender.name + " in the face!";
            }
            else{
                displayString += "Misses the strike embarissingly...";
            }
            console.log(displayString)
            return displayString;
        }
        
        if(player1.stats.spd > player2.stats.spd && player1.hp > 0 && player2.hp > 0){
            player1.displayString = fight(player1, player2);
            if(player2.hp > 0){
                player2.displayString = fight(player2, player1);
                if(player1.hp < 0){
                    player1.displayString += "\nBut was CRUSHED"
                }
            } else{
                player2.displayString = player2.name + " was CRUSHED";
            }
        }
        else if (player2.hp > 0 && player1.hp > 0){
            player2.displayString = fight(player2, player1);
            if(player1.hp > 0){
                player1.displayString = fight(player1, player2);
                if(player2.hp < 0){
                    player2.displayString += "\nBut was CRUSHED"
                }
            } else {
                player1.displayString = player1.name + " was CRUSHED"
            }

        }

        if(player1.hp < 0){
            player1.hp = 0;        
        }
        if(player2.hp < 0){
            player2.hp = 0;
        }
            

        this.setState({player1: player1, player2: player2});
    }
    
    render() {
        return (
            <div className="brawl-wrapper">
                <div className="card-display">
                    <div className="card-bar-container">
                        <Card {...this.state.player1}/>
                        <StatusBar percentage={this.state.player1.sp} color="blue"/>
                        <StatusBar percentage={this.state.player1.hp/this.state.player1.maxHp*100} color="green"/>
                        <textarea value={this.state.player1.displayString}></textarea>
                    </div>
                    <div className="button-container">    
                        <h1>BRAWL ZONE</h1>
                        <button className="strike-button" onClick={this.handleFight}>STRIKE</button>
                        <button onClick={()=>{this.props.handleChangePage("selector")}}>Back to Selector</button>
                    </div>
                    <div className="card-bar-container">
                        <Card {...this.state.player2}/>
                        <StatusBar percentage={this.state.player2.sp} color="blue"/>
                        <StatusBar percentage={this.state.player2.hp/this.state.player2.maxHp*100} color="green"/>
                        <textarea value={this.state.player2.displayString}></textarea>
                    </div>
                </div>
            </div>
        )
    }
}
