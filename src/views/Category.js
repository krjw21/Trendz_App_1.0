import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import ProductItem from '../components/ProductItem';
import Product from './Product';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentName: '',
            currentIndex: 0
        }
    }

    getSubCategories = (categoryName) => {
        var subCategories = [];
        subCategories = require(`../json/category-${categoryName.toLowerCase()}.json`);
        return subCategories;
    };
    renderSubCategories = (categoryName) => {
        var subCategories = this.getSubCategories(categoryName);
        return (
            subCategories.map((item, i) => {
                return (
                    <Text onPress={() => this.setState({ currentName: item, currentIndex: i })} style={{ paddingLeft: 10, color: this.state.currentIndex == i ? "white" : "black" }}>
                        {item}
                    </Text>
                )
            })
        )
    };

    getProductList = (categoryName, subCategoryName) => {
        var products = [];
        products = require(`../json/product-${categoryName.toLowerCase()}-${subCategoryName.toLowerCase()}.json`);
        return products;
    };
    renderProductsList = (categoryName) => {
        // get all the subcategories related to the main category
        var subCategories = this.getSubCategories(categoryName);
        var subCategoryName = subCategories[0];

        if (this.state.currentName != '') {
            subCategoryName = this.state.currentName;
        }

        var products = this.getProductList(categoryName, subCategoryName);
        return (
            products.map((item, i) => {
                return (
                    <ProductItem id={item.id} imageUri={item.imageUri} name={item.name} priceOne={item.priceOne} priceTwo={item.priceTwo} onPress={() => this.props.navigation.navigate("Product", {id: item.id, name: item.name, imageUri: item.imageUri, priceOne: item.priceOne, priceTwo: item.priceTwo})}></ProductItem>
                )
            })
        )
    };

    render() {
        const { categoryName } = this.props.route.params;
        return (
            <View>
                <Text>This is the category screen! {this.props.route.params.categoryName}</Text>
                <View style={{ backgroundColor: 'grey', color: 'black', paddingTop: 10, paddingBottom: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {
                            this.renderSubCategories(categoryName)
                        }
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    {
                        this.renderProductsList(categoryName)
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    image: {
        width: '100%',
        height: 200,
        margin: 10
    }
});

export default Category;