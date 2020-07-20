import React, { Component } from 'react';
import { TextInput, Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons'; 
import * as actions from '../actions';

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between'
    },
    fieldStyles: {
        backgroundColor: 'teal',
        height: 40,
        color: 'orange',
    },
    addButton: {
        marginTop: 20,
    }
})

class AddExercise extends Component {
    // static navigationOptions = {
    //     tabBarIcon: ({tintColor}) => (
    //         <AntDesign name="pluscircleo" size={60} color="black" />
    //     )
    // }

    onAddPress() {
        const { exerciseName, category, currentReps, goalReps, url } = this.props;

        this.props.createNewExercise({ exerciseName, category, currentReps, goalReps, url });

        // have access to certain props; navigates to another screen
        this.props.navigation.navigate('ExerciseList');


    }
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Text>Add A New Exercise</Text> 
                    <TextInput 
                        style={styles.fieldStyles}
                        placeholder={'Exercise Name'}
                        value={this.props.exerciseName}
                        // this does the typing of changes
                        onChangeText={value => this.props.formUpdate({ prop: 'exerciseName', value })}
                    />
                    <TextInput 
                        style={styles.fieldStyles}
                        placeholder={'Current Reps'}
                        value={this.props.currentReps}
                        // this does the typing of changes
                        onChangeText={value => this.props.formUpdate({ prop: 'currentReps', value })}
                    />
                    <TextInput 
                        style={styles.fieldStyles}
                        placeholder={'Goal Reps'}
                        value={this.props.goalReps}
                        // this does the typing of changes
                        onChangeText={value => this.props.formUpdate({ prop: 'goalReps', value })}
                    />
                    <TextInput 
                        style={styles.fieldStyles}
                        placeholder={'URL Tutorial'}
                        value={this.props.url}
                        // this does the typing of changes
                        onChangeText={value => this.props.formUpdate({ prop: 'url', value })}
                    />
                </View>
                <View style={styles.addButton}>
                    <Button title="Add" />
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    const { exerciseName, category, currentReps, goalReps, url } = state;

    return { exerciseName, category, currentReps, goalReps, url };
}

export default connect(mapStateToProps, actions)(AddExercise);
