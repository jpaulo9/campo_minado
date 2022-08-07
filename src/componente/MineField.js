
import React from 'react';
import type {Node} from 'react';
import {View, StyleSheet } from 'react-native';
import Field from './Field';
import { create } from 'react-test-renderer'


export default props =>{

    const rows = props.board.map( (row, r)=> {

        const columns = row.map((field, c)=>{
            return <Field {...field} keyd={c}
            onOpen={() =>  props.onOpenField(r,c)}
            onSelect={e => props.onSelectField(r,c)}
            />
        })

        return  <View style={{flexDirection:'row'}} key={r}>{columns}</View>   
            
    })

    return <View style={styles.container}>{rows}</View>
    
}


const styles = StyleSheet.create({

    container:{
  
      // alignItems:'center',
      backgroundColor: '#EEE',
     
   
    },

})