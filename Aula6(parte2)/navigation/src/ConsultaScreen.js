import { View, Text, Button } from "react-native";


export default function ConsultaScreen({route}) {
    return(
        <View style = {{flex: 1, alignItems: 'center', marginBottom: 10}}>
            <Text style = {{fontSize: 20}}>Consulta de Usuário</Text>
            <Button title="CONSULTAR"/>
        </View>
    )
}