import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class ProductItem extends Component {
    render() {
        const { id, imageUri, name, priceOne, priceTwo, onPress } = this.props
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={{width: wp('42%'), marginTop: 10, marginHorizontal: 10}}>
                    <View style={{width: wp('42%'), height: wp('50%')}}>
                        <Image source={{uri:imageUri}} style={{flex: 1}}></Image>
                    </View>
                    <View>
                        <Text style={{fontweight: 18, fontWeight: 'bold'}}>{name}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>${priceOne}</Text>
                        <Text style={{fontSize: 12, paddingLeft: 10, textDecoration: 'line-through'}}>{priceTwo}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default ProductItem;