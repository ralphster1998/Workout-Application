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
                {/* avoids going sideways for ScrollView*/}
                <ScrollView showsVerticalScrollIndicator={false}> 
                    <Image
                        source={require('../images/background.jpg')}
                        style={styles.image}
                        // add stylle if needed
                    />
                    <AntDesign name={'user'} size={80} style={styles.icon} />
                    <AntDesign name={'close'} size={30} style={styles.close} 
                        onPress={() => this.props.noneSelected()}
                    />
                    <Text style={styles.title1}>{this.props.exercise.exerciseName}</Text>
                    <Text style={styles.title2}>{this.props.exercise.category}</Text>
                </ScrollView>
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
