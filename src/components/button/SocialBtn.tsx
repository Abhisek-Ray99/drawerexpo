import { StyleSheet, Pressable, ActivityIndicator, View } from 'react-native'
import React, {memo} from 'react'

import AppText from '../text/AppText'
import { colors } from '../../constants/colors'

const SocialBtn = ({
    title,
    titleStyle,
    BtnStyle,
    color = 'primary',
    leftIcon = null,
    disabled,
    onPress,
}) => {
  return (
    <View style={[styles.container,{backgroundColor: colors[disabled ? 'grey300' : color]}, BtnStyle]}>
            <Pressable
                android_ripple={{color: colors.grey1900, borderless: true}}
                style={[styles.button]}
                onPress={onPress}
            >
                <View style={{flex: 0.2,}}>
                    {leftIcon}
                </View>
                {title && <AppText style={[{flex: 1},styles.text, titleStyle]} >
                    {title}
                </AppText>}
            </Pressable>
    </View>
  )
}

export default memo(SocialBtn)

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.primary,
        elevation: 10, 
        height: 50,
        justifyContent: 'center',
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text:{
        color: colors.white,
        textAlign: 'center',
        fontSize: 16
    }
})