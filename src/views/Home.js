import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import HomeCategory from '../components/HomeCategory';

const HOMECATEGORIES = require('../json/homecategory.json')

class Home extends Component {
    render() {
        return (
            <View>
                {
                    HOMECATEGORIES.map((item, index) => {
                        return (
                            <HomeCategory titleFirst={item.titleFirst} titleSecond={item.titleSecond} subTitle={item.subTitle} imageUri={item.imageUri} {...this.props}>
                                
                            </HomeCategory>
                        )
                    })
                }
            </View>
        )
    }
}

export default Home;