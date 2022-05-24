import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import HomeCategory from '../components/HomeCategory';

const HOMECATEGORIES = require('../json/homecategory.json')

class Home extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Shipping")}>
                    <Text>Shipping</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Register")}>
                    <Text>Register</Text>
                </TouchableOpacity>
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