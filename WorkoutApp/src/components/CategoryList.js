import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Entypo } from '@expo/vector-icons';
import * as actions from '../actions';

class CategoryList extends Component {
    // static navigationOptions = {
    //     tabBarIcon: ({tintColor}) => (
    //         <Entypo name="archive" size={50} color="black" />
    //     )
    // }
    render() {
        return (
            <View>
                <Text>CategoryList screen</Text>
            </View>
        )
    }
}

export default connect(null, actions)(CategoryList);
