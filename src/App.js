import React from 'react'
import './App.css';
import Brawl from './Brawl.js'
import Selector from './Selector.js'
import * as equipments from './Equipments.js'
import * as players from './Players.js'


//APP
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "selector",
      equipments: [equipments.eSpoon, equipments.eFork],
      players: [players.pMario, players.pAilin],
    }
  }
  
  handlePlayerSelection = (index, player) => {
    let newPlayers = [...this.state.players];
    newPlayers[index] = player;
    this.setState({players: newPlayers})
  }

  handleEquipmentSelection = (index, equipment) => {
    let newEquipments = [...this.state.equipments];
    newEquipments[index] = equipment;
    this.setState({equipments: newEquipments})
  }

  handleChangePage = (pageStr) => {
    this.setState({page: pageStr});
  }

  render (){
    switch(this.state.page) {
      case "selector" : return (
        <div className="App">
          <Selector players={players} equipments={equipments} handleChangePage={this.handleChangePage} handlePlayerSelection={this.handlePlayerSelection} handleEquipmentSelection={this.handleEquipmentSelection} currentPlayers={this.state.players} currentEquipments={this.state.equipments}/>
        </div>
      );
      case "brawl" : return (
        <div className="App">
          <Brawl player1={this.state.players[0]} player2={this.state.players[1]} equip1={this.state.equipments[0]} equip2={this.state.equipments[1]} handleChangePage={this.handleChangePage}/>
        </div>  
      );
      default: return (<h1>ERROR</h1>);
    }
  }
}

export default App;
