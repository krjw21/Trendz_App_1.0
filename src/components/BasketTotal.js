import React, { Component } from 'react';
import { Text, View } from 'react-native';

class BasketTotal extends Component {
    render() {
        const {label,price} = this.props;

        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderTopColor: 'gray', borderTopWidth: 1}}>
                <Text style={{fontWeight: 'bold', fontSize: 14}}>
                    {label}
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 14}}>
                    ${price}
                </Text>
            </View>
        )
    }
}

export default BasketTotal;