import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Colors from '../constants/colors';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                  source={require('../assets/success.png')}
                  style={styles.image}
                  resizeMode="cover" />
            </View>
            <View style={styles.resultContainer}>
            <BodyText style={styles.resultText}>
                The game needed
                <Text style={styles.highlight}> {props.roundsNumber} </Text>
                 rounds to guess
                 <Text style={styles.highlight}> {props.userNumber}</Text>
            </BodyText>
            </View>
            <MainButton
                color={Colors.accent}
                onPress={props.onRestart}>
                NEW GAME
            </MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    highlight: {
        color: Colors.accent,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default GameOverScreen;
