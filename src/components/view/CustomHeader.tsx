import { Pressable, StyleSheet, Text, View, Animated } from 'react-native'
import React, {memo} from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../constants/colors'
import navigation from '../../navigation/action'

const CustomHeader = ({
    headerTitle,
    animateText,
    animateIconleft,
    animateIconright
}) => {
  return (
    <Animated.View style={[styles.headerContainer]}>
      <Pressable
        onPress={() => {
            navigation.goBack();
        }} 
      >
        <Animated.View style={[styles.headerbtn, animateIconleft]}>
            <MaterialCommunityIcons name="arrow-left-thin" size={24} color={colors.white} />
        </Animated.View>
      </Pressable>  
      <Animated.Text  style={animateText}>
        {headerTitle}
      </Animated.Text>
      <Pressable>
        <Animated.View style={[styles.headerbtn,animateIconright]}>
            <MaterialCommunityIcons name="plus" size={24} color={colors.white} />
        </Animated.View>
      </Pressable>
    </Animated.View>
  )
}

export default memo(CustomHeader)

const styles = StyleSheet.create({
    headerContainer:{
        height: 65,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerbtn:{
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        justifyContent: 'center'
    }
})