import React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons'; 
import { Card } from 'react-native-material-ui';
import * as actions from '../actions';

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
        paddingLeft: 20,
        width: 1000
    },
    title: {
        fontFamily: 'Apple Color Emoji',
        paddingBottom: 10,
        top: 10,
        left: 15,
        fontSize: 40
    },
    image: {
        height: 100,
    },
    action: {
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: 'black',
        color: 'white',
        justifyContent: 'center'
        
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)',
    },
});

const ExerciseItem = (props) => {
    return (
        <TouchableWithoutFeedback
        // pass the exercise item to the detail view...
        onPress={() => props.selectExercise(props.exercise)}>
            <View style={styles.card}>
                <Card>
                    <Text style={ styles.title }>{props.exercise.exerciseName}</Text>
                    <Text style={ styles.action }>Current Reps: {props.exercise.currentReps}</Text>
                    <Text style={ styles.action }>Goal Reps: {props.exercise.goalReps}</Text>
                </Card>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

export default connect(null, actions)(ExerciseItem);
