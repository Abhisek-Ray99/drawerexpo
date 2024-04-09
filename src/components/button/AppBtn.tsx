import { StyleSheet, Pressable, ActivityIndicator, View } from 'react-native'
import React, {memo} from 'react'

import AppText from '../text/AppText'
import { colors } from '../../constants/colors'

const AppBtn = ({
    title,
    titleStyle,
    BtnStyle,
    color = 'primary',
    leftIcon = null,
    rightIcon = null,
    isLoading = false,
    disabled,
    onPress,
    gap=10
}) => {
  return (
    <View style={[styles.container,{backgroundColor: colors[disabled ? 'grey300' : color]}, BtnStyle]}>
            <Pressable
                android_ripple={{color: colors.grey1900, borderless: true}}
                style={[styles.button, {gap: gap}]}
                onPress={onPress}
            >
                {leftIcon}
                {isLoading && <ActivityIndicator color={colors.white} />}
                {title && <AppText
                    fontWeight={'700'}
                    style={[styles.text, titleStyle]}
                >
                    {title}
                </AppText>}
                {rightIcon}
            </Pressable>
    </View>
  )
}

export default memo(AppBtn)

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.primary,
        elevation: 10, 
        height: 50,
        justifyContent: 'center',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: colors.white,
        textAlign: 'center'
    }
})