import { StyleSheet, View, Image, ScrollView } from 'react-native'
import React, {memo, useRef, useEffect} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../../../components/text/AppText'
import LottieView from '../../../components/view/LottieAnimation'
import ImgBtn from '../../../components/button/ImgBtn'
import TextBtn from '../../../components/button/TextBtn'
import IMAGES from '../../../constants/images';
import { windowWidth } from '../../../utils/dimensions';


const TEMPLATES = [
  {
    url: IMAGES.restaurant,
    name: "Restaurant",
  },
  {
    url: IMAGES.health,
    name: "Healthcare",
  },
  {
    url: IMAGES.electronics,
    name: "Electronic",
  },
  {
    url: IMAGES.ecommerce,
    name: "Ecommerce Sales",
  },
  {
    url: IMAGES.sports,
    name: "Sport Goods",
  },
  {
    url: IMAGES.vehicles,
    name: "Vehicles showrooms",
  }
]

const WelcomeStage = ({
  mailid,
  changeStage,
  isInventories
}) => {
  const animationRef = useRef(null)
  useEffect(() => {
    animationRef.current?.play();
  }, [animationRef.current]);

  return (
    <ScrollView>
      {
        !isInventories ? 
        <View style={styles.welcomecontainer}>
          <View style={styles.view1}>
            <AppText style={styles.welcometitle}>Let's get started!</AppText>
            <AppText style={styles.subtitle}>
              You have confirmed 
              <AppText style={{ fontWeight: 'bold'}}> {mailid} </AppText>
              You're all set to create your first online inventory for your shop
            </AppText>
          </View>
          <View style={styles.view2}>
            <LottieView
              imagesource={IMAGES.animation_3}
              size={250}
              ref={animationRef}
              loop={false}
            />
          </View>
          <View style={styles.btnview}>
            <ImgBtn 
              Title="Create a new Inventory" 
              onPress={changeStage} 
              disabled={false} 
              style={{borderRadius: 15, width: windowWidth/1.6}}
            />
          </View>
        </View>
        :
        <View style={styles.existingcontainer}>
          <AppText style={styles.welcometitle}>Create your Inventory</AppText>
          <AppText style={styles.subtitle}>Your inventory is where you and your teammates create, purchase and sale items</AppText>
          <TextBtn
            TextTitle="Create My Own"
            bg
            viewStyle={styles.txtbtn}
            leftImg={
              <Image source={IMAGES.first_inventory} style={{width: 40, height: 40}} />
            }
            rightIcon={
              <MaterialCommunityIcons name="chevron-right" size={24} />
            }
            TextStyle={{fontWeight: '700'}}
            onPress={changeStage}
          />
        </View>
      }
      <View style={styles.commonview}>
        <AppText style={styles.commonheader}>{"start from a template".toUpperCase()}</AppText>
        {
          TEMPLATES.map((item,index) => (
            <TextBtn
              TextTitle={item.name}
              bg
              viewStyle={styles.templatebtn}
              leftImg={
                <Image source={item.url} style={{width: 40, height: 40}} />
              }
              rightIcon={
                <MaterialCommunityIcons name="chevron-right" size={24} />
              }
              TextStyle={{fontWeight: '700'}}
              onPress={changeStage}
              key={index}
            />
          ))
        }
      </View>
    </ScrollView>
  )
}

export default memo(WelcomeStage)

const styles = StyleSheet.create({
  welcometitle:{
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  welcomecontainer:{
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  existingcontainer:{
    paddingHorizontal: 20,
  },
  view1:{
    flexDirection: 'column',
  },
  view2:{
    
  },
  btnview:{
    alignItems: 'center',
  },
  subtitle:{
    textAlign: 'center',
    fontSize: 14,
    padding: 10
  },
  txtbtn:{
    borderRadius: 7,
    marginVertical: 20
  },
  commonview:{
    paddingHorizontal: 20,
  },
  commonheader:{
    fontSize: 13,
    fontWeight: '700',
    paddingVertical: 10
  },
  templatebtn:{
    borderRadius: 7,
    marginVertical: 4
  }
})