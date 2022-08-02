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
import {createMineBoard} from './src/funcoes';


import {

  StyleSheet,
  Text,
  View,
} from 'react-native';


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

          }
  }


render(){

return (

      
<View style={styles.container}>

<Text style={styles.welcome}>Mines the war</Text>

<Text style={styles.welcome}> 
  Welcome Mines War:
  {params.getRowsAmount()}x{params.getColumnsAmount()}
</Text>

<View style={styles.board}>
<MineField board={this.state.board}/>
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
 
