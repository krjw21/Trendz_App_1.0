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
        if (categoryName.toLowerCase() == "accessories") {
            subCategories = require('../json/category-accessories.json');
        }
        else if (categoryName.toLowerCase() == "kids") {
            subCategories = require('../json/category-kids.json');
        }
        else if (categoryName.toLowerCase() == "mens") {
            subCategories = require('../json/category-mens.json');
        }
        else if (categoryName.toLowerCase() == "womens") {
            subCategories = require('../json/category-womens.json');
        }
        //subCategories = require(`../json/category-${categoryName.toLowerCase()}.json`);
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
        if (categoryName.toLowerCase() == "accessories") {
            if (subCategoryName.toLowerCase() == "rings") {
                products = require('../json/product-accessories-rings.json');
            }
            else if (subCategoryName.toLowerCase() == "watches") {
                products = require('../json/product-accessories-watches.json');
            }
        }
        else if (categoryName.toLowerCase() == "kids") {
            if (subCategoryName.toLowerCase() == "bottoms") {
                products = require('../json/product-kids-bottoms.json');
            }
            else if (subCategoryName.toLowerCase() == "tops") {
                products = require('../json/product-kids-tops.json');
            }
        }
        else if (categoryName.toLowerCase() == "mens") {
            if (subCategoryName.toLowerCase() == "bottoms") {
                products = require('../json/product-mens-bottoms.json');
            }
            else if (subCategoryName.toLowerCase() == "tops") {
                products = require('../json/product-mens-tops.json');
            }
        }
        else if (categoryName.toLowerCase() == "womens") {
            if (subCategoryName.toLowerCase() == "dresses") {
                products = require('../json/product-womens-dresses.json');
            }
            else if (subCategoryName.toLowerCase() == "shoes") {
                products = require('../json/product-womens-shoes.json');
            }
        }
        //products = require(`../json/product-${categoryName.toLowerCase()}-${subCategoryName.toLowerCase()}.json`);
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