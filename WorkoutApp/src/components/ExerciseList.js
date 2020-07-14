import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ExerciseItem from './ExerciseItem';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 353,
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 20,
    }
});

class ExerciseList extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'user'} size={50} color={tintColor} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
            <FlatList
                data={this.props.exercise}
                renderItem={({item}) => <ExerciseItem exercise={item} />}
            />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { exercise: state.exercise }
}

export default connect(mapStateToProps)(ExerciseList);
