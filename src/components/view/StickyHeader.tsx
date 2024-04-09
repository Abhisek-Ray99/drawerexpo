import { StyleSheet, View, Animated} from 'react-native'
import React, {useRef} from 'react'
import InputField from '../input/InputField'
import { colors } from '../../constants/colors'
import CustomHeader from './CustomHeader'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const StickyHeader = ({
  headerTitle,
  bgColor
}) => {
  const scrollY = useRef(new Animated.Value(0)).current
  const translateHeader = scrollY.interpolate({
    inputRange: [0, 56],
    outputRange: [0, -48],
    extrapolate: 'clamp'
  })
  const translateTitle = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -5],
    extrapolate: 'clamp'
  })
  const opacityTitle = scrollY.interpolate({
    inputRange: [0, 25],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  })
  const translateIconleft = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -20],
    extrapolate: 'clamp'
  })
  const translateIconRight = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, 20],
    extrapolate: 'clamp'
  })
  return (
    <>
      <Animated.View 
        style={[
          styles.header,
          {
            backgroundColor: bgColor
          },
          { transform: [{ translateY: translateHeader }] },
        ]}
      >
        <CustomHeader 
          headerTitle={headerTitle} 
          animateText={[
            styles.headertitle,
            { opacity: opacityTitle },
            { transform: [{ translateY: translateTitle }] }
          ]}
          animateIconleft={[
            { opacity: opacityTitle },
            { transform: [{ translateX: translateIconleft }] }
          ]}
          animateIconright={[
            { opacity: opacityTitle },
            { transform: [{ translateX: translateIconRight }] }
          ]}
        />
        <View style={styles.inputWrapper}>
          <InputField 
            placeholder="Jump to or search..." 
            placeholdercolor={colors.grey2100}
            InputViewStyle={styles.input} 
            InputStyle={styles.inputfield}
            InputLeftElement={
              <AntDesign name="search1" size={20} color={colors.grey1600} />
            }
            InputRightElement={
              <Ionicons name="barcode-outline" size={22} color={colors.grey1600} />
            }
          />
        </View>
      </Animated.View>
      <View
        style={styles.viewStyle}
      >
        <Animated.ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true },
          )}
        >
          <View style={styles.placeholder}>
            <View style={styles.placeholderInset}>
              {/* content goes here */}
            </View>
          </View>
        </Animated.ScrollView>
      </View>
    </>
  )
}

export default StickyHeader

const styles = StyleSheet.create({
    header:{
      height: 140,
      position: 'absolute',
      width: '100%',
      zIndex: 1,
      paddingHorizontal: 24,
      paddingVertical: 12,
      alignItems: "stretch",
      justifyContent: 'flex-end',
    },
    headertitle:{
      fontSize: 26,
      lineHeight: 36,
      fontWeight: 'bold',
      color: colors.white,
      textAlign: 'center'
    },
    inputWrapper:{
      position: 'relative',
      width: '100%',
    },
    input:{
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      height: 44,
      borderRadius: 14,
      borderWidth: 0
    },
    inputfield:{
      color: colors.grey100,
      fontSize: 14,
    },
    placeholder:{
      flex: 1,
      padding: 24,
      height: 1000,
    },
    viewStyle:{
      // borderTopLeftRadius: 12,
      // borderTopRightRadius: 12
      // paddingTop: 210
    },
    content:{
      padding: 24,
      // backgroundColor: colors.blue100
    },
    placeholderInset:{
      // borderWidth: 4,
      // borderColor: '#e5e7ef',
      // borderStyle: 'dashed',
      // borderRadius: 9,
      // flex: 1,
    }
})