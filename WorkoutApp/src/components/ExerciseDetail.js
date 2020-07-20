import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import DetailView from './DetailView';
import UpdateExercise from './UpdateExercise';

class ExerciseDetail extends Component {

    renderDetails() {
        // shows that youa re in edit mode
        if(this.props.toUpdate) {
            return <UpdateExercise />
        } else {
            return <DetailView />
        }
    }

    render() {
        return (
            <View>
                {this.renderDetails()}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { 
        toUpdate: state.toUpdate
    }
}

export default connect(mapStateToProps, actions)(ExerciseDetail);
