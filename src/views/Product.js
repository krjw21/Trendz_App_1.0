import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Icon from '@expo/vector-icons/Ionicons';

import {store, addToCart} from '../redux_shop';
import { connect } from 'react-redux';

const { width } = Dimensions.get("window");

class Product extends Component {
    render() {
        const { id, name, imageUri, priceOne, priceTwo } = this.props.route.params
        const item = {
            id: id,
            name: name,
            imageUri: imageUri,
            priceOne: priceOne,
            priceTwo: priceTwo,
            quantity: 1
        }
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <Text style={{ fontSize: 26, fontWeight: 'bold', paddingLeft: 10 }}>{name}</Text>
                </View>
                <View>
                    <Image source={{ uri: imageUri }} style={{ flex: 1, resizeMode: 'stretch', width: width, height: hp('65%') }}></Image>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, marginBottom: 15, paddingLeft: 10, paddingRight: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>${priceOne}</Text>
                        <Text style={{ fontSize: 18, color: 'grey', marginLeft: 10, textDecoration: 'line-through' }}>{priceTwo}</Text>
                    </View>
                    <TouchableOpacity onPress={
                        () => {
                            this.props.addToCart(item)
                            this.props.navigation.navigate("Basket");
                        }
                    }>
                        <View style={{ width: wp('45%'), backgroundColor: 'black', borderRadius: 2, flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>
                            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                                <Icon name="md-cart" color='white' size={22}></Icon>
                            </View>
                            <View>
                                <Text style={{ color: 'white', fontSize: 16 }}>Add to Cart</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Description:</Text>
                    <Text style={{ fontSize: 16 }}>This is a placeholder description. This is a placeholder description. This is a placeholder description. This is a placeholder description. This is a placeholder description.</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 10, paddingLeft: 10, paddingRight: 10 }}>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Available Colors</Text>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <View style={{ backgroundColor: 'black', width: wp('5%'), height: wp('5%'), marginRight: 5 }}></View>
                            <View style={{ backgroundColor: 'red', width: wp('5%'), height: wp('5%'), marginRight: 5 }}></View>
                            <View style={{ backgroundColor: 'yellow', width: wp('5%'), height: wp('5%'), marginRight: 5 }}></View>
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Available Sizes</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>S, M, L, XL, XXL</Text>
                    </View>
                </View>
            </View>
        )
    }
}

var mapStateToProps = null;
var mapDispatchToProps = {
    addToCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);