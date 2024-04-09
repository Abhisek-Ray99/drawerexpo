import { StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'
import { colors } from '../../constants/colors'

const ViewBox = ({
    children,
    height,
    width,
    viewBorderStyle,
    viewboxStyle,
    ...other
}) => {
  return (
    <View 
        style={[ {height: height, width: width, borderStyle: viewBorderStyle},styles.viewboxContainer, viewboxStyle]}
        {...other}
    >
      {children}
    </View>
  )
}

export default memo(ViewBox)

const styles = StyleSheet.create({
    viewboxContainer: {
        borderWidth: 1,
        borderColor: colors.grey500,
        backgroundColor: colors.white,
        borderRadius: 15,
    }
})