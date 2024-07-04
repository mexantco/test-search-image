import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export const SearchBar:React.FC = ({onSubmit, clearSearch, q})=>{
    return(
        <View style={styles.container}>
            <TextInput value={q} onSubmitEditing={(text)=>{onSubmit(text.nativeEvent.text)}} style={styles.input} placeholder="поиск картинок"/>
            <TouchableOpacity 
            onPress={()=>{clearSearch()}}
            style={styles.clear}
            >
                <Text style={styles.clearText}>&#10006;</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    backgroundColor: '#fff',
  },
  input: {
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#505050',
    borderRadius: 15,
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: '#e3e3e3',
  },
  clear: {
    height: 70,
    width: 70,

    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },
    clearText: { 
        fontSize: 18, 
        alignSelf: 'center', 
        textAlignVertical: 'center' 
    }
});