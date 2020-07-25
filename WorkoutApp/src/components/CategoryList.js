import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Entypo } from '@expo/vector-icons';
import _ from 'lodash';
import CategoryItem from './CategoryItem';
import * as actions from '../actions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 20,
        backgroundColor: '#e5e5e5'
    }
});

class CategoryList extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.categories}
                    renderItem={({item}) => <CategoryItem categories={item} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

// use lodash to sort the exercises by category
const mapStateToProps = (state) => {
    const exercises = state.exercise;

    const categories = 
        _.chain(exercises)
            .groupBy('category')
            .map((value, key) => {
                return {
                    category: key,
                    exercises: value
                };
            })
            .value();

    return {
        
        categories, 
    }
}

export default connect(mapStateToProps, actions)(CategoryList);
