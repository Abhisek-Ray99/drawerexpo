import { StyleSheet, Text, View, Image, Platform } from 'react-native'
import React, {memo} from 'react'
import { Fontisto } from '@expo/vector-icons';

import { colors } from '../../constants/colors'
import AppText from '../../components/text/AppText';
import { LinearGradient } from 'expo-linear-gradient';
import AppBtn from '../../components/button/AppBtn';
import { windowHeight, windowWidth } from '../../utils/dimensions';
import IMAGES from '../../constants/images';
import { StatusBar } from 'expo-status-bar';

const Onboarding = ({navigation}) => {

  return (
    <View style={[styles.onboardContainer]}>
      <LinearGradient  colors={['#cfd9df', '#e2ebf0', '#e6dee9', '#fff']} style={styles.onboardSlider}>
        <AppText style={styles.text} adjustsFontSizeToFit={true} numberOfLines={1}>Drawer</AppText>
        <Image 
          source={IMAGES.img_hero}
          resizeMode='cover'
          style={styles.heroimg}
        />
      </LinearGradient>
      <View style={styles.descriptText}>
          <AppText style={styles.text1}>{`Picture this: a \ninventory management app`}</AppText>
          <AppText style={styles.word}>
            <AppText style={[{color: colors.royalblue}, styles.word]}>Create</AppText>,
            <AppText style={[{color: colors.redheavy200}, styles.word]}> Customize</AppText> & 
            <AppText style={[{color: colors.green300}, styles.word]}> Manage</AppText>
          </AppText>
      </View>
      <View style={styles.onboardView}>
        <AppBtn 
          title="Get Started" 
          BtnStyle={styles.onboardBtn} 
          titleStyle={styles.onboardTitle}
          color={colors.black}
          rightIcon={(
           <Fontisto name="arrow-right-l" size={30} color="#fff" />
          )} 
          onPress={()=> navigation.navigate('login')}
          />
      </View> 
    </View>
  )
}

export default memo(Onboarding)

const styles = StyleSheet.create({
  onboardContainer: {
    flex: 1,
  },
  onboardSlider: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  onboardView: {
    flex: 1,
  },
  onboardBtn: {
    marginHorizontal: 30,
    height: 60,
    elevation: 0,
    borderRadius: 0,
  },
  onboardTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  text:{
    flex: 1,
    position: 'absolute',
    textAlign: 'center',
    fontSize: 0.31*windowWidth,
    top: Platform.OS === 'android' ? 30 : 50,
    fontWeight: '700'
  },
  heroimg:{
    position:'absolute',
    width: 500,
    height: 500
  },
  descriptText:{
    position: 'absolute',
    bottom: 200,
    left: 0,
    right: 0,
    justifyContent: 'center', 
    alignItems: 'center',

  },
  text1:{
    width: windowWidth/1.2,
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },
  word:{
    width: windowWidth/1.2,
    fontSize: 20,
    fontWeight: 'bold'
  }
})