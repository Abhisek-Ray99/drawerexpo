import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import AppText from '../../../components/text/AppText'
import { colors } from '../../../constants/colors'

const IconText = ({
    title,
    icon,
    onPress
}) => {
  return (
    <View style={styles.container}>
        <Pressable onPress={onPress} style={styles.items}>
            {icon}
            <AppText style={styles.text}>{title}</AppText>
        </Pressable>
    </View>
  )
}

export default IconText

const styles = StyleSheet.create({
    container:{
        paddingVertical: 17,
        paddingHorizontal: 16
    },
    items:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    text:{
        fontSize: 15,
        color: colors.black,
        paddingHorizontal: 14
    }
})