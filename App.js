/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import type {Node} from 'react';
import params from './src/params';
// import Field from './src/componente/Field';
import MineField from './src/componente/MineField';
import Header from './src/componente/Header';
import LevelSelections from './src/screens/LevelSelections';

import {
  createMineBoard, cloneBoard, 
  openField, hadExplosion, 
  wonGame, showMines, 
  invertFlagg, flagsUsed} from './src/funcoes';

import {

  Alert,
  StyleSheet,
  Text,
  View,
 
} from 'react-native';

import { create } from 'react-test-renderer'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state =  this.createState()
  }
  minesAmount = () =>{

        const cols = params.getColumnsAmount()
        const rows = params.getRowsAmount()
        return Math.ceil(cols*rows * params.difficultLevel)
  }

  createState = () =>{

          const cols = params.getColumnsAmount()
          const rows = params.getRowsAmount()
          return{
            board: createMineBoard(rows, cols, this.minesAmount()),
            won: false,
            lost: false,
            showSelection: false,

          }
  }

  onOpenField = (row, column)=>{

    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if(lost){
      showMines(board)
      Alert.alert('Estourouuu', 'já foi!')

    }
    if(won){

      Alert.alert('Winner!', 'Você têm sorte!')

    }

    this.setState({board, lost, won})

  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlagg(board, row, column)
    const won = wonGame(board)

    if(won){
      Alert.alert('Winner', 'tava na hora já')
    }

    this.setState({board, won})

  }

  onLevelSelected = level =>{
        params.difficultLevel = level
        this.setState(this.createState())
  }

render(){

return (

<View style={styles.container}>
  <LevelSelections isVisible={this.state.showSelection}
      onLevelSelected={this.onLevelSelected}
      onCancel={() => this.setState({showSelection:false})}/>

<Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
        onNewGame={() => this.setState(this.createState())}
        onFlagPress={() =>this.setState({showSelection:true})}
        />

<View style={styles.board}>
<MineField board={this.state.board}
onOpenField={ this.onOpenField}
onSelectField={this.onSelectField}/>
</View>

</View>

    );

  }

}


const styles = StyleSheet.create({

  container:{

    // alignItems:'center',
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#F5FCFF',
 
  },
  board:{
    alignItems: 'center',
    backgroundColor:'#AAA',

  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,

  },


});
 
