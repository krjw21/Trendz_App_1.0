import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class BasketItem extends Component {
    constructor(props) {
        super(props); {
            this.state = {
                id: this.props.id,
                imageUri: this.props.imageUri,
                name: this.props.name,
                price: this.props.price,
                quantity: this.props.quantity,
                color: this.props.color,
                size: this.props.size
            }
        }
    }

    render() {
        return (
            <View style={{flexDirection: 'row', height: hp('20%'), width: wp('100%'), marginBottom: 10, backgroundColor: 'white'}}>
                <View style={{width: wp('25%'), height: hp('18%'), paddingTop: 10}}>
                    <Image source={{uri: this.state.imageUri}} style={{flex: 1, resizeMode: 'contain'}}></Image>
                </View>
                <View style={{width: wp('70%'), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{this.state.name}</Text>
                        <Text style={{fontSize: 14}}>Color: {this.state.color}</Text>
                        <Text style={{fontSize: 14}}>Size: {this.state.size}</Text>
                        <Text style={{fontSize: 14}}>Quantity: {this.state.quantity}</Text>
                    </View>
                    <View>
                        <Text style={{fontSize: 22, fontWeight: 'bold'}}>${this.state.price}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default BasketItem;