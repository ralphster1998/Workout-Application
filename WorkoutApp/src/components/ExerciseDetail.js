import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
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
                    <AntDesign name={'close'} size={30} style={styles.closeIcon} 
                        onPress={() => this.props.noneSelected()}
                    />
                    <Text style={styles.title1}>{this.props.exercise.exerciseName}</Text>
                    <Text style={styles.title2}>{this.props.exercise.category}</Text>

                    <View style={styles.textArea}>
                        <MaterialIcons name="confirmation-number" size={30} style={styles.textIcons} />                        
                        <Text style={}>{this.props.exercise.currentReps}</Text>
                    </View>
                    <View style={styles.textArea}>
                        <Entypo name="reply" size={30} style={styles.textIcons} />                        
                        <Text style={}>{this.props.exercise.goalReps}</Text>
                    </View>
                    <View style={styles.textArea}>
                        <Entypo name="reply-all" size={30} style={styles.textIcons} />                       
                        <Text style={}>{this.props.exercise.url}</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image 
                                source={require('../images/call@2x.png.png')}
                                style={styles.actionImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                                source={require('../images/email@2x.png.png')}
                                style={styles.actionImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                                source={require('../images/sms@2x.png.png')}
                                style={styles.actionImage}
                            />
                        </TouchableOpacity>
                        <View style={styles.actionArea}>
                            <Text>Current</Text>
                            <Text>Goal</Text>
                            <Text>URL</Text>
                        </View>
                    </View>
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
