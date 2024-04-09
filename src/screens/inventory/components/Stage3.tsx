import { StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../../../components/text/AppText'
import ImgBtn from '../../../components/button/ImgBtn'
import { colors } from '../../../constants/colors'
import GradientBtn from '../../../components/button/GradientBtn'

const Stage3 = ({
  changeStage
}) => {
  return (
    <View style={styles.stagecontainer}>
      <AppText style={styles.stageheader}>Who else is working on this inventory?</AppText>
      <AppText style={styles.stagedes}>
        Invite a few of your teammates to Drawer
      </AppText>
      <ImgBtn 
        Title="Share a Link" 
        disabled={false} 
        leftIcon={<Ionicons name="share-outline" size={24} color={colors.white} style={{fontWeight: '700'}} />}
        style={{borderRadius: 7}} 
      />
      <GradientBtn 
        title="Add from Contacts"  
        leftIcon={<MaterialCommunityIcons name="contacts-outline" size={24} color={colors.darkviolet100} />} 
        colors={[colors.darkviolet100, colors.royalblue100]}
      />
      <GradientBtn 
        title="Add by email"  
        leftIcon={<MaterialCommunityIcons name="email-plus-outline" size={24} color={colors.darkviolet100} />}
        colors={[colors.darkviolet100, colors.royalblue100]}
      />
    </View>
  )
}

export default memo(Stage3)

const styles = StyleSheet.create({
  stagecontainer:{
    flex: 1,
    flexDirection: 'column',
    gap: 25,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  stageheader:{
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '700'
  },
  stagedes:{
    textAlign: 'center',
    fontSize: 16
  }
})