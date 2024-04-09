import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, {memo} from 'react'
import { colors } from '../../../constants/colors'

import AppText from '../../../components/text/AppText'
import { Ionicons } from '@expo/vector-icons';
import action from '../../../navigation/action'
import { windowHeight, windowWidth } from '../../../utils/dimensions'

const boxHeight = (windowHeight - 0 * 2)/23;
const boxWidth = (windowWidth - 0 * 2)/11;

const DashBoardHeader = ({
  ItemTitle,
  DrawerName="Drawer Shop"
}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerItems}>
        <Pressable onPressIn={()=> action.openDrawer()}>
          <View style={styles.imgstyle}>
              <AppText style={{fontSize: 22, fontWeight: '700', color: colors.white}}>{ItemTitle.charAt(0).toUpperCase()}</AppText>
          </View>
          <View style={styles.profileicon}>
            <Ionicons name="settings-sharp" size={14} color={colors.powderblue100} style={styles.icon} />
          </View>
        </Pressable>
        <AppText style={styles.headerStyle}>{DrawerName}</AppText>
      </View>
    </View>
  )
}

export default memo(DashBoardHeader)

const styles = StyleSheet.create({
  headerContainer:{
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerItems:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },
  imgstyle:{
    backgroundColor: colors.black,
    height: boxHeight,
    width: boxWidth,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 1
  },
  headerStyle:{
    fontSize: 16,
    fontWeight: '700',
  },
  profileicon:{
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    right: -4,
  },
  icon: {
    backgroundColor: colors.white,
    borderRadius: 50
  }
})