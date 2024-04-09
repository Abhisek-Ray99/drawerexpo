import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { colors } from '../../../constants/colors'
import { windowHeight, windowWidth } from '../../../utils/dimensions'

const OrderView = () => {
  return (
    <View style={styles.orderview}>
      
    </View>
  )
}

export default memo(OrderView)

const styles = StyleSheet.create({
    orderview:{
        height: windowHeight/4,
        width: windowWidth/1.06,
        backgroundColor: colors.grey2000,
        marginVertical: 20,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    }
})