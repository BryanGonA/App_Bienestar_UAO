import *as React from 'react'
import { TouchableOpacity, StyleSheet, View} from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Button from '../components/Button'
import TextInput from '../components/TextInput'


export default function ContactSuport ({id, navigation}){

    const onSendRquest = () =>  {
        /*
        Esta parte se impentara un get el cual tome los datos anteriormente digitados.
        */
        axios.get('http://localhost:3000/api/usuarios/'+id)
            .then(function (response) {
                console.log(response);
            }
            )
            .catch(function (error) {
                console.log(error);

                }
            );

            navigation.reset({
                index: 0,
                routes: [{ name: 'StarScreen' }],
            })
    }

    return(
        /*
        Área de texto donde se describirá el problema y se enviará el equipo de soporte.
        */
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>Contactar a soporte.</Header>
            <View style = {style.textAreaContainer}>
                <TextInput
                    label="DescError"
                    returnKeyType ="next"
                    multiline = {true}
                    numberOfLines={20}
                    placeholder = "Descríbenos tu problema"
                    placeholderTextColor = "black"
                />
                <Button mode="contained" onPress={onSendRquest}>
                    Enviar
                </Button>

            </View>
        </Background>

    )
}