import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { store, removeWholeCart } from '../redux_shop';
import { connect } from 'react-redux';

import Icon from '@expo/vector-icons/Ionicons';
import BasketItem from '../components/BasketItem';
import BasketTotal from '../components/BasketTotal';

class Basket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: props.cartItems,
            orderTotal: props.orderTotal
        }
    }

    componentDidUpdate() {
        if (this.state.cartItems && (this.state.cartItems.length != this.props.cartItems.length)) {
            this.setState({
                cartItems: this.props.cartItems,
                orderTotal: this.props.orderTotal
            })
        }
    }

    render() {
        if (this.state.cartItems && this.state.cartItems.length) {
            return (
                <View>
                    <View>
                        {
                            this.state.cartItems.map((item) => {
                                return (
                                    <BasketItem id={item.id} imageUri={item.imageUri} name={item.name} price={item.priceOne} quantity={item.quantity}></BasketItem>
                                )
                            })
                        }
                    </View>
                    <View>
                        <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                            <TouchableOpacity onPress={() => this.props.removeWholeCart()}>
                                <View style={{ backgroundColor: 'black', borderRadius: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 10, paddingBottom: 10, borderRadius: 2 }}>
                                    <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                                        <Icon name="md-cart" color='white' size={22}></Icon>
                                    </View>
                                    <View>
                                        <Text style={{ color: 'white', fontSize: 14 }}>Remove Cart</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 10, marginBottom: 10 }}>
                            <BasketTotal label="Shipping" price="0"></BasketTotal>
                            <BasketTotal label="Your Total" price={this.state.orderTotal}></BasketTotal>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home', { screen: 'Home' })}>
                            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                                <View style={{ backgroundColor: 'black', borderRadius: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>
                                    <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                                        <Icon name="md-cart" color='white' size={22}></Icon>
                                    </View>
                                    <View>
                                        <Text style={{ color: 'white', fontSize: 14 }}>Place Your Order</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        else {
            return(
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>No items in the basket at the moment. Please continue shopping.</Text>
                </View>
            )
        }
    }
}

var mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems,
        orderTotal: state.orderTotal
    }
};
var mapDispatchToProps = {
    removeWholeCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Basket);