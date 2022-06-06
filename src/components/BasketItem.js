import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { store, removeItem } from '../redux_shop';
import { connect } from 'react-redux';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class BasketItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            imageUri: props.imageUri,
            name: props.name,
            price: props.price,
            quantity: props.quantity,
            color: props.color,
            size: props.size
        }
    }

    render() {
        const item = {
            id: this.props.id,
            name: this.props.name
        }
        return (
            <View style={{ flexDirection: 'row', height: hp('20%'), width: wp('100%'), marginBottom: 10, backgroundColor: 'white' }}>
                <View style={{ width: wp('25%'), height: hp('18%'), paddingTop: 10 }}>
                    <Image source={{ uri: this.state.imageUri }} style={{ flex: 1, resizeMode: 'contain' }}></Image>
                </View>
                <View style={{ width: wp('70%'), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{this.state.name}</Text>
                        <Text style={{ fontSize: 14 }}>Color: {this.state.color}</Text>
                        <Text style={{ fontSize: 14 }}>Size: {this.state.size}</Text>
                        <Text style={{ fontSize: 14 }}>Quantity: {this.state.quantity}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>${this.state.price}</Text>
                        <TouchableOpacity onPress = {() => {this.props.removeItem(item);}}>
                            <View style={{backgroundColor: 'white', marginTop: '0.5em'}}>
                                <Text style={{fontSize: 11, fontWeight: 'bold', color: 'black', textDecorationLine: 'underline'}}>Remove Item</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

// export default BasketItem;

var mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems,
        orderTotal: state.orderTotal
    }
}
var mapDispatchToProps = {
    removeItem
}
export default connect (mapStateToProps, mapDispatchToProps)(BasketItem);