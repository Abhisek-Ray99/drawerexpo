import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {memo} from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { windowHeight, windowWidth } from '../../../utils/dimensions';

const ActionButton = ({onPress}) => {
  return (
    <TouchableOpacity 
        style={[styles.ABtn, styles.shadowProps]}
        onPress={onPress}
    >
      <MaterialIcons
        name='add'
        size={windowWidth / 14}
        color="#fff"
        style={styles.Actionstyle}
      />
    </TouchableOpacity>
  )
}

export default memo(ActionButton)

const styles = StyleSheet.create({
    ABtn: {
        position: 'absolute',
        width: windowWidth / 5.5,
        height: windowHeight / 11.5,
        backgroundColor: '#1D5DFF',
        justifyContent: 'center',
        bottom: 60,
        right: 25,
        alignItems: 'center',
        borderRadius: Math.round(windowWidth+windowHeight)
    },
    Actionstyle: {
        
    },
    shadowProps: {
        elevation: 2,
        shadowColor: '#000000'
    }
})  