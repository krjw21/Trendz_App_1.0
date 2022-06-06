import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native';
import { ImageBackground } from 'react-native-web';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Terms extends Component {
    render() {
        return (
            <View>
                <View style={{ margin: 20 }}>
                    <Text style={{ fontSize: 18, color: 'orange' }}>General Terms</Text>
                    <Text style={{ fontSize: 16, marginTop: 10 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>
                    <Text style={{ fontSize: 18, color: 'orange', marginTop: 20 }}>Privacy Agreement</Text>
                    <Text style={{ fontSize: 16, marginTop: 10 }}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    <Text style={{ fontSize: 18, color: 'orange', marginTop: 20 }}>Personal Data</Text>
                    <Text style={{ fontSize: 16, marginTop: 10 }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Text>
                </View>
            </View>
        )
    }
}

export default Terms;