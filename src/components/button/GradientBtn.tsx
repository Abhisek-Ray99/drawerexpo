import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'
import { windowHeight, windowWidth } from '../../utils/dimensions'
import { LinearGradient } from 'expo-linear-gradient'

const GradientBtn = ({
    title,
    height=windowHeight/15,
    width=windowWidth/1.18,
    leftIcon,
    colors
}) => {
  return (
    <LinearGradient  
        colors={[...colors]} 
        style={{borderRadius: 9}} 
        start={{x: 0, y: 0.5}} 
        end={{x: 1, y: 0.5}}
        locations={[0.5,0.6]}
    >
        <View style={[styles.circleGradient, {height: height, width: width}]}>
            {leftIcon}
            <Text style={styles.text}>{title}</Text>
        </View>
    </LinearGradient >
  )
}

export default GradientBtn

const styles = StyleSheet.create({
    circleGradient: {
        margin: 2.5,
        backgroundColor: "white",
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10
    },
    text:{
        color: colors.royalblue100,
        fontWeight: '700',
        fontSize: 16
    }
})