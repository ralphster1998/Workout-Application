import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons'; 
import * as actions from '../actions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 353,
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 20,
    }
});

class ExerciseDetail extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView></ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { 
        exercise: state.exercise,
        exerciseSelected: state.exerciseSelected
    }
}

export default connect(mapStateToProps)(ExerciseDetail);
