import React, { useRef, memo } from 'react';
import { Animated, TouchableOpacity, StyleSheet } from 'react-native';

const AnimatedPressable = ({ 
  onPress, 
  children 
}) => {
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
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.8} // This controls the opacity when pressed
    >
      <Animated.View style={[{ transform: [{ scale: scaleValue }] }]}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default memo(AnimatedPressable);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
  });
  