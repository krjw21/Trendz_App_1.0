import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native';
import { ImageBackground } from 'react-native-web';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Login extends Component {
    render() {
        return (
            <View>
                <View style={{ textAlign: 'center', margin: 30 }}>
                    <Text style={{ fontSize: 60, fontWeight: 'bold', color: 'orange' }}>Trendz</Text>
                    <Text style={{ fontSize: 22 }}>Online Store</Text>
                </View>
                <View>
                    <ImageBackground source={{ uri: 'https://i.ibb.co/0jDQ547/category.jpg' }} style={{ width: wp('100%'), height: hp('70%') }}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginTop: hp('50%')}}>
                            <Button title='Register'></Button>
                            <Button title='Login'></Button>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        )
    }
}

export default Login;