import React from "react";
import { View, Text, Button } from "react-native";
 
 
export default function HomeScreen({navigation}){
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>


            <Button title = "IR PARA REGISTRO" onPress={() => navigation.navigate('Registro')}/>

            <Button title = "IR PARA CONSULTA" onPress={() => navigation.navigate('Consulta')}/>
            


        </View>
    )
}