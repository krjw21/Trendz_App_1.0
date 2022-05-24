import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;

class HomeCategory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate("Category", {categoryName: this.props.titleFirst})}>
                    <ImageBackground source={{ uri: this.props.imageUri }}
                        style={{
                            height: 200,
                            width: windowWidth,
                            paddingLeft: wp('10%'),
                            paddingTop: hp('5%')
                        }}>
                        <View style={{ paddingBottom: hp('5%') }}>
                            <Text style={styles.header}>{this.props.titleFirst}</Text>
                            <Text style={styles.header}>{this.props.titleSecond}</Text>
                        </View>
                        <Text style={styles.subheader}>{this.props.subTitle}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    subheader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'orange'
    }
});

export default HomeCategory;