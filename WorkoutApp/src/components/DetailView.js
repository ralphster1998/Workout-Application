import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import * as actions from '../actions';

const styles = StyleSheet.create({
    card: {
      marginTop: 10,
      paddingBottom: 20,
      marginBottom: 20,
      borderColor: 'lightgrey',
      borderWidth: 0.5,
    },
    title1: {
        top: 10,
        left: 80,
        fontSize: 24,
    },
    title2: {
        top: 35,
        left: 82,
        fontSize: 18,
    },
    image: {
        flex: 0,
        height: 100,
        width: 333,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeIcon: {
        position: 'absolute',
        top: 5,
        left: 295,
        color: 'rgba(233,166,154,0.8)',
        backgroundColor: 'rgba(255,255,255,0)',
    },  
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)',
    },
    textArea: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 10,
        width: 260,
    },
    textIcons: {
        color: '#26a69a',
    },
    actionArea: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
  });

class DetailView extends Component {
    updateTest() {
        this.props.updateExercise(this.props.exercise);

    }
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
                        <Text style={styles.title2}>{this.props.exercise.currentReps}</Text>
                    </View>
                    <View style={styles.textArea}>
                        <Entypo name="reply" size={30} style={styles.textIcons} />                        
                        <Text style={styles.title2}>{this.props.exercise.goalReps}</Text>
                    </View>
                    <View style={styles.textArea}>
                        <Entypo name="reply-all" size={30} style={styles.textIcons} />                       
                        <Text style={styles.title2}>{this.props.exercise.url}</Text>
                    </View>
                    <View style={styles.editArea}>
                        <TouchableOpacity style={styles.sections}
                            onPress={() => { this.updateTest(); }}>
                            <MaterialIcons name={'autorenew'} size={40} style={styles.editIcon} />
                            <Text>EDIT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sections}
                            onPress={() => {this.props.deleteExercise(this.props.exercise._id)}}>
                            <MaterialIcons name={'delete-forever'} size={40} style={styles.editIcon} />
                            <Text>DELETE</Text>
                        </TouchableOpacity>
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
        exercise: state.exerciseSelected,
        toUpdate: state.toUpdate
    }
}

export default connect(mapStateToProps, actions)(DetailView);
