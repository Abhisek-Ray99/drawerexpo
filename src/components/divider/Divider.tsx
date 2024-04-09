import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'

const Divider = ({
  dashed=false,
  style
}) => {
  return (
    <View 
      style={[{
        borderBottomWidth:1, 
        borderStyle: dashed ? 'dashed' : 'solid', 
        borderColor: colors.grey1500
       },
       style
      ]}
    />
  )
}

export default Divider;