import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'
import { colors } from '../../../constants/colors'

const CategoryElement = ({
    categoryName,
    totalItems,
    onPress
}) => {
  return (
    <Pressable 
      style={styles.category} 
      onPress={onPress} 
      android_ripple={{color: colors.grey1900, borderless: false, foreground: true}}>
      <Text style={styles.categoryText}>{categoryName}</Text>
      <Text>{totalItems}</Text>
    </Pressable>
  )
}

export default memo(CategoryElement)

const styles = StyleSheet.create({
    category:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: colors.grey100,
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    categoryText: {
        color: colors.black,
        fontSize: 16
    }
})