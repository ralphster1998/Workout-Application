import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
    },
    title: {
        top: 20,
        left: 100,
        fontSize: 24,
    },
    image: {
        height: 100,
    },
    action: {
        backgroundColor: 'black',
        color: 'white',
        paddingBottom: 5,
        paddingTop: 5,
    },
    icon: {
        position: 'absolute',
        top: 10,
        left: 10,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)',
    },
});

const CategoryItem = (props) => {
    console.log(props);
    return (
            <View style={ styles.card }>
                <Image 
                    source={require('../images/background.jpg')}
                    style={ styles.image }
                />
                <MaterialIcons
                    name={'business'}
                    size={100}
                    style={styles.icon}
                />
                <Text style={ styles.title }>{props.categories.category}</Text>
                    {props.categories.exercises.map((exercise) => {
                        return (
                            <Text key={exercise._id} style={ styles.action }>
                                {exercise.exerciseName} {exercise.url}
                            </Text>
                        )
                    })}
            </View>        
    )
}

export default CategoryItem;
