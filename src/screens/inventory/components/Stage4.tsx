import { StyleSheet, View} from 'react-native'
import React, {memo, forwardRef} from 'react'
import LottieView from 'lottie-react-native';

import ImgBtn from '../../../components/button/ImgBtn'
import AppText from '../../../components/text/AppText'
import LottieAnimation from '../../../components/view/LottieAnimation';
import IMAGES from '../../../constants/images';
import { windowHeight } from '../../../utils/dimensions';

const Stage4 = forwardRef(({}, ref) => {
  return (
    <View style={styles.container}>
      <LottieView
        ref={ref}
        source={IMAGES.congratulation}
        autoPlay
        loop={false}
        style={styles.lottie}
        resizeMode='cover'
      />

      <AppText style={styles.stagetext}>Tada! Add your first Items to the Inventory</AppText>
      <View style={styles.view1}>
        <LottieAnimation
          imagesource={IMAGES.animation_4}
          size={500}
        />
      </View>
      <View style={styles.view2}>
        <ImgBtn
          Title="See your inventory in Drawer" 
          disabled={false} 
          style={{borderRadius: 7}} 
        />
      </View>
    </View>
  );
})

export default memo(Stage4)

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    paddingHorizontal: 24
  },
  view1:{
    flex: 2.4,
    marginLeft: 18
  },  
  view2:{
    flex: 1,
    alignItems: 'center',
  },
  stagetext:{
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '700'
  },
  lottie: {
    height: windowHeight,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    pointerEvents: 'none',
  },
})