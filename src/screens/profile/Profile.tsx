import { StyleSheet, Text, View, Pressable, StatusBar, Image, ScrollView, BackHandler } from 'react-native'
import React, {memo, useEffect} from 'react'
import HeaderBar from './components/HeaderBar'
import ProfileImage from './components/ProfileImage'
import AppText from '../../components/text/AppText'
import TextBtn from '../../components/button/TextBtn'

import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../constants/colors'

import { LinearGradient } from 'expo-linear-gradient';

const boxHeight = (windowHeight - 0 * 2)/5;
const boxWidth = (windowWidth - 0 * 2)/2.4;

import { Feather } from '@expo/vector-icons';
import ViewBox from '../../components/view/ViewBox'
import { windowHeight, windowWidth } from '../../utils/dimensions'
import IMAGES from '../../constants/images'

const Profile = ({route, navigation}) => {

  const { fullname } = route.params

  StatusBar.setBarStyle('dark-content')

  function handleBackButtonClick() {
    navigation.navigate('dashboard');
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  }, []);

  return (
    <View style={styles.profileView}>
      <LinearGradient  colors={['#cfd9df', '#e2ebf0', '#e6dee9', '#fff']} style={styles.container1}>
        <HeaderBar/>
        <View style={styles.view1}>
          <View style={styles.profileview1}>
            <ProfileImage />
            <View style={styles.rightview}>
              <AppText style={styles.displayName}>{fullname}</AppText>
              <View style={styles.chatbtn}>
                <MaterialIcons name="verified" size={16} color={colors.greenheavy} />
                <AppText>verified</AppText>
              </View>
            </View>
          </View>
          <View style={styles.descript}>
            <View style={styles.itemcol}>
              <Feather name="package" size={24} color={colors.heavyblue} />
              <AppText style={styles.value}>234</AppText>
              <AppText>My Items</AppText>
            </View>
            <View style={styles.verticleLine}></View>
            <View style={styles.itemcol}>
              <Feather name="calendar" size={24} color={colors.heavyblue} />
              <AppText style={styles.value}>22 jan 2023</AppText>
              <AppText>Joined in</AppText>
            </View>
            <View style={styles.verticleLine}></View>
            <View style={styles.itemcol}>
              <Feather name="bar-chart-2" size={24} color={colors.heavyblue} />
              <AppText style={styles.value}>24 days</AppText>
              <AppText>My Activity</AppText>
            </View>
          </View>
          <View>
            <View style={styles.viewinventory}>
              <Image
                style={styles.tinyLogo1}
                source={IMAGES.mesh_51}
              />
            </View>
            <View style={styles.viewshop}>
              <Image
                style={styles.tinyLogo2}
                source={IMAGES.icons8}
              />
              <AppText style={styles.viewinventorytext}>View my Inventories</AppText>
            </View>
            
          </View>
        </View>
      </LinearGradient>
      <ScrollView contentContainerStyle={styles.container2} >
        <View style={styles.container12}>
          <ViewBox height={boxHeight} width={boxWidth} viewboxStyle={styles.boxview}>
            <Image
                style={styles.profilebanner}
                source={IMAGES.details}
            />
            <AppText style={styles.profiletext}>Your Details</AppText>
          </ViewBox>
          <ViewBox height={boxHeight} width={boxWidth } viewboxStyle={styles.boxview}>
            <Image
                  style={styles.profilebanner}
                  source={IMAGES.track_order}
            />
            <AppText style={styles.profiletext}>Track Orders</AppText>
          </ViewBox>
          <ViewBox height={boxHeight} width={boxWidth } viewboxStyle={styles.boxview}>
            <Image
                    style={styles.profilebanner}
                    source={IMAGES._export}
            />
            <AppText style={styles.profiletext}>Bulk Data export</AppText>
          </ViewBox>
          <ViewBox height={boxHeight} width={boxWidth } viewboxStyle={styles.boxview}>
            <Image
                    style={styles.profilebanner}
                    source={IMAGES.support}
            />
            <AppText style={styles.profiletext}>Help & Support</AppText>
          </ViewBox>
        </View>
      </ScrollView>
    </View>
  )
}

export default memo(Profile)

const styles = StyleSheet.create({
  profileView:{
    flex: 1,
  },
  container1:{
    flex: 1,
  },
  view1:{
    flexDirection: 'column',
    gap: 16,
    padding: 14
  },
  container2:{
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingBottom: 100
  },
  profileview1:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  displayName:{
    fontSize: 20,
  },
  chatbtn:{
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
    borderRadius: 50,
    paddingVertical: 2
  },
  descript:{
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.grey100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 16,
    // margin: 14
  },
  itemcol:{
    flexDirection: 'column',
    alignItems: 'center'
  },
  value:{
    fontSize: 12,
    fontWeight: '700',
    padding: 4
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: colors.grey100,
  },
  rightview:{
    paddingHorizontal: 10
  },
  viewinventory:{
    opacity: 0.6,
    backgroundColor: colors.white,
    borderRadius: 50
  },
  tinyLogo1:{
    width: '100%',
    height: 60,
    borderRadius: 50,
  },
  tinyLogo2:{
    width: 40,
    height: 40,
  },
  viewshop:{
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    left: 20,
    top: 7
  },
  viewinventorytext:{
    fontSize: 18,
    color: 'white',
    fontWeight: '700'
  },
  container12:{
    width: '95%',
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 6,
  },
  boxview:{
    marginTop: 26,
    borderWidth: 0,
    backgroundColor: colors.grey2100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilebanner:{
    width: 100,
    height: 100,
  },
  profiletext:{
    fontSize: 15,
    fontWeight: '700',
    paddingTop: 10
  }
})