import { StyleSheet, Text, View, Image } from 'react-native'
import React, {memo, useEffect} from 'react'

import Animated, {
  Easing,
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import { windowHeight, windowWidth } from '../../utils/dimensions';
import IMAGES from '../../constants/images';

const SplashScreen = () => {

  const imageScale = useSharedValue(0.5);

  useEffect(() => {
    imageScale.value = withTiming(1, {
      duration: 1000,
      easing: Easing.ease,
    });
  }, []);

  const animatedImageStyle = useAnimatedStyle(() => {
    const scale = interpolate(imageScale.value, [0.5, 1], [0.5, 1]);
    return {
      transform: [{ scale }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.Image 
        source={IMAGES.splash} 
        style={[{ height: windowHeight - 10, width: windowWidth - 10 }, animatedImageStyle]}
        resizeMode='contain'
      />
    </View>
  )
}

export default memo(SplashScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 15
    },
})