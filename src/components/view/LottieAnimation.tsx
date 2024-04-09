import { StyleSheet, View } from 'react-native'
import React, {memo, forwardRef} from 'react'
import LottieView from 'lottie-react-native';

import AppText from '../text/AppText'
import { colors } from '../../constants/colors';

const LottieAnimation = forwardRef(({
    imagesource,
    title,
    description,
    size=200,
    style,
    lottiestyle,
    loop,
    resizeMode,
}, ref) => {
  return (
    <View style={[styles.container, style]}>
        <LottieView
            source={imagesource}
            autoPlay
            loop={loop}
            style={[{width: size, height: size}, lottiestyle]}
            ref={ref}
            resizeMode={resizeMode}
        />
        {title && <AppText style={styles.title}>{title}</AppText>}
        {description && <AppText style={styles.desc}>{description}</AppText>}
    </View>
  )
})

export default memo(LottieAnimation)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 16,
        fontWeight: '700',
        paddingVertical: 10,
        color: colors.black,
    },
    desc:{
        color: colors.grey1800,
        textAlign: 'center',
        paddingVertical: 10
    }
})