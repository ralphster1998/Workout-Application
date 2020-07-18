import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons'; 
import * as actions from '../actions';

class AddCategory extends Component {
    // static navigationOptions = {
    //     tabBarIcon: ({tintColor}) => (
    //         <AntDesign name="pluscircleo" size={60} color="black" />
    //     )
    // }
    render() {
        return (
            <View>
                <Text>Add person screen</Text>
            </View>
        )
    }
}

export default connect(null, actions)(AddCategory);
