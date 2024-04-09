import { StyleSheet, Text, View, Image } from 'react-native'
import React, {memo} from 'react'
import Animated from 'react-native-reanimated'

import AppBtn from '../button/AppBtn'
import { colors } from '../../constants/colors'

import { FontAwesome6 } from '@expo/vector-icons';
import { windowHeight, windowWidth } from '../../utils/dimensions'

const PurSaleView = ({
    bgColor="grey",
    BtnTitle,
    img,
    onPress
}) => {
  return (
    <Animated.View style={[{backgroundColor: bgColor}, styles.Container]}>

        <Image source={img} style={styles.img} />
        <View style={styles.viewbtn}>
            <AppBtn 
                BtnStyle={styles.btn} 
                title={BtnTitle}  
                onPress={onPress}
                rightIcon={
                    <View style={styles.icon}>
                        <FontAwesome6 name="arrow-right-long" color={colors.white} size={16}  />
                    </View>
                }
            />
        </View>
    </Animated.View>
  )
}

export default memo(PurSaleView)

const styles = StyleSheet.create({
    Container:{
        width: windowWidth/2.4,
        height: windowHeight/4,
        borderRadius: 17,
        overflow: 'hidden'
    },
    btn:{
        backgroundColor: colors.sapphire,
        opacity: 0.9,
    },
    icon:{
        backgroundColor: colors.asenic,
        padding: 4,
        borderRadius: 50,
    },
    img:{
        position: 'absolute',
        width: '40%',
        height: '60%',
        resizeMode: 'cover',
        bottom: -10,
        right: -4
    },
    viewbtn:{
        borderRadius: 10, 
        overflow: 'hidden', 
        position: 'absolute', 
        bottom: 4,
        left: 0,
        right: 0,
        margin: 12
    }
})