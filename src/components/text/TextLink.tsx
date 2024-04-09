import { StyleSheet, Pressable } from 'react-native'
import React, {memo} from 'react'
import AppText from './AppText'

import { colors } from '../../constants/colors'

const TextLink = ({
    title,
    onPress,
    titleStyle,
    lefticon,
}) => {
  return (
    <Pressable
        onPress={onPress}
        style={styles.container}
    >
        <AppText
            style={[styles.color, titleStyle]}
        >
            {title}
        </AppText>
        {lefticon}
    </Pressable>
  )
}

export default memo(TextLink)

const styles = StyleSheet.create({
    color: {
        color: colors.primary ,
    },
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    }
})