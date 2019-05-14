import React from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native'

export default class Login extends React.Component {
    render(){
        return(
            <View style={styles.main_container}>
                <Text style={styles.Welcome}>Bienvenue sur MyNetSale</Text>
                <View style={styles.ImageBox}>
                    <Image source={require('../../assets/LoginImage.png')} style={styles.Image}/>
                </View>
                <Text style={styles.Text}>It is a long established fact that a reader will be distracted by the readablli</Text>
                <TextInput/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },

    Welcome: {
        flex:1,
        fontSize: 30,
        textAlign: 'center',
    },

    ImageBox: {
        flex: 3,
        justifyContent: 'center',
    },

    Image: {
        width:250,
        height:200,
    },

    Text: {
        width: 200,
        textAlign: 'center',
    }
})