import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { colors } from '../../../constants/colors'
import AppText from '../../../components/text/AppText'
import navigation from '../../../navigation/action'
import { windowWidth } from '../../../utils/dimensions'

const HeaderBar = () => {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.leftheader}>
        <View style={styles.backicon}>
          <Pressable 
            onPress={()=> navigation.goBack()} 
            android_ripple={{color: colors.grey1900, borderless: true, foreground: true}}>
            <Ionicons name="chevron-back" size={26} color={colors.black} />
          </Pressable>
        </View>
        <AppText style={styles.headerTitle}>Profile</AppText>
      </View>
      
      <View style={styles.icons}>
        <Pressable onPress={()=> navigation.navigate("settings")}>
              <Ionicons name="settings" size={26} color={colors.black} />
        </Pressable>
        <Pressable onPress={()=> navigation.navigate("profile-edit")}>
            <FontAwesome name="edit" size={26} color={colors.black} />
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default HeaderBar

const styles = StyleSheet.create({
    header:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 6,
      paddingVertical: 10,
    },
    icons:{
      width: windowWidth/4,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    backicon:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.grey1500,
      borderRadius: 7,
      paddingHorizontal: 5,
      paddingVertical: 5,
      marginLeft: 10
    },
    leftheader:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    headerTitle:{
      fontSize: 24,
      fontWeight: '700',
      paddingHorizontal: 16
    }
})