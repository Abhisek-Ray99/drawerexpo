import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppText from '../../../components/text/AppText'
import { colors } from '../../../constants/colors'

const Dataview = ({
    value,
    profile
}) => {

  return (
    <View style={styles.dataviewStyle}>
      <AppText style={styles.keyStyle}>{profile}</AppText>
      <AppText>{value}</AppText>
    </View>
  )
}

export default Dataview

const styles = StyleSheet.create({
    dataviewStyle:{
        flexDirection: 'column'
    },
    keyStyle:{
      color: colors.grey300,
    }
})