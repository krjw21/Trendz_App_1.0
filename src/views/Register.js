import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native';
import { ImageBackground, TextInput } from 'react-native-web';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Register extends Component {
    render() {
        return (
            <View>
                <TextInput style={{ borderWidth: 2, borderColor: 'grey', marginTop: 20, marginHorizontal: 20, padding: 9 }} placeholder="Your name" placeholderTextColor='grey'></TextInput>
                <TextInput style={{ borderWidth: 2, borderColor: 'grey', marginTop: 20, marginHorizontal: 20, padding: 9 }} placeholder="Email address" placeholderTextColor='grey'></TextInput>
                <TextInput style={{ borderWidth: 2, borderColor: 'grey', marginTop: 20, marginHorizontal: 20, padding: 9 }} placeholder="Password" placeholderTextColor='grey'></TextInput>
                <Text style={{ marginLeft: 20, marginTop: 10 }}>Or easily <Text style={{ color: 'orange' }}>connect with facebook</Text></Text>
                <ImageBackground source={{ uri: 'https://i.ibb.co/0jDQ547/category.jpg' }} style={{ width: wp('100%'), height: hp('70%') }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '25%', marginTop: hp('50%')}}>
                        <Button title='COMPLETE REGISTRATION' onPress={() => this.props.navigation.navigate('Home', { screen: 'Home' })}></Button>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default Register;