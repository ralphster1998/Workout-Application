import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import * as actions from '../actions';

class AddCategory extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Ionicons name={'plus'} size={50} color={tintColor} />
        )
    }
    render() {
        return (
            <View>
                <Text>Add person screen</Text>
            </View>
        )
    }
}

export default connect(null, actions)(AddCategory);
