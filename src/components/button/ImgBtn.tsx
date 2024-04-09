import { StyleSheet, Text, View, Image, Pressable, Animated, Dimensions } from 'react-native'
import React, {useRef, memo} from 'react'
import AppText from '../text/AppText'
import { colors } from '../../constants/colors'
import { windowHeight, windowWidth } from '../../utils/dimensions'
import IMAGES from '../../constants/images'

const ImgBtn = ({
    onPress,
    Title,
    disabled,
    leftIcon,
    style
}: any) => {

  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    // Animate the button press effect
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: false, // Set to false when using layout properties like scale
    }).start();
  };

  const handlePressOut = () => {
    // Reset the button scale to its original size
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Pressable
        onPress={disabled ? null :onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={{height: windowHeight/13}}
    >
        <Animated.View style={[{opacity: disabled ? 0.4 : 1}, { transform: [{ scale: !disabled ?scaleValue: 1 }] }]}>
            <Image
            style={[{width: '100%', height: '100%'},styles.img, style]}
            source={IMAGES.mesh_51}
            />
            <View style={styles.textview}>
                {leftIcon}
                <AppText style={styles.text}>{Title}</AppText>
            </View>
        </Animated.View>
    </Pressable>
  )
}

export default memo(ImgBtn)

const styles = StyleSheet.create({
    img:{
        borderRadius: 15,
    },
    text:{
        color: colors.white,
        fontSize: 18,
        fontWeight: '700',
    },
    textview:{
        position: 'absolute', 
        flexDirection: 'row',
        alignItems: 'center',
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 12, 
        justifyContent: 'center',
        gap: 10,
        paddingTop: 10
    }
})