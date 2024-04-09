import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AppText from '../../../components/text/AppText'
import Divider from '../../../components/divider/Divider'
import IconText from '../../items/components/IconText'
import { colors } from '../../../constants/colors'

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { windowHeight, windowWidth } from '../../../utils/dimensions'

const boxHeight = (windowHeight - 0 * 2)/12;
const boxWidth = (windowWidth - 0 * 2)/5;

const ContentModal = ({
    productImg,
    productName,
    onClosePopup
}) => {
  return (
    <View>
          <View style={styles.optionheader}>
              <View style={styles.optionTitle}>
                  {productImg ? 
                      <Image
                          style={styles.tinyLogo}
                          source={{
                          uri: productImg,
                          }}
                      />
                  : (
                      <View style={styles.imgstyle}>
                          <MaterialCommunityIcons name="package" size={40} color={colors.grey1900} />
                      </View>
                      )}
                  <AppText style={styles.optiontext}>{productName}</AppText>
              </View>
              <View style={styles.hide}>
                  <Pressable 
                      android_ripple={{color: colors.grey1900, borderless: true, foreground: true}}
                      style={{padding: 6}}
                      onPress={onClosePopup}
                  >
                      <AntDesign name="close" size={18}  />
                  </Pressable>
              </View>
          </View>
          <Divider/>
          <View style={styles.optionview2}>
              <View style={styles.value}>
                  <MaterialCommunityIcons name="ballot-recount-outline" size={22} color={colors.black} style={styles.innericon}/>
                  <AppText style={styles.text}>Update Quantity</AppText>
              </View>
              <View style={styles.value}>
                  <MaterialCommunityIcons name="folder-move-outline" size={22} color={colors.black} style={styles.innericon}  />
                  <AppText style={styles.text}>Move</AppText>
              </View>
          </View>
          <Divider/>
          <View styles={styles.extraitems}>
              <IconText
                  title="History"
                  icon={
                      <MaterialIcons name="history" size={22} color={colors.black} />
                  }
              />
              <IconText 
                  title="Transactions"
                  icon={
                      <Ionicons name="wallet-outline" size={22} color={colors.black} />
                  }
              />
              <IconText 
                  title="Export"
                  icon={
                      <AntDesign name="export" size={22} color={colors.black} />
                  }
              />
              <IconText 
                  title="Set Alert"
                  icon={
                      <MaterialCommunityIcons name="bell-outline" size={22} color={colors.black} />
                  }
              />
              <IconText 
                  title="Create Labels"
                  icon={
                      <MaterialCommunityIcons name="barcode-scan" size={22} color={colors.black} />
                  }
              />
              <IconText 
                  title="Clone"
                  icon={
                      <MaterialIcons name="copy-all" size={22} color={colors.black} />
                  }
              />
              <IconText 
                  title="Details"
                  icon={
                      <MaterialCommunityIcons name="pencil-outline" size={22} color={colors.black} />
                  }
              />
              <IconText 
                  title="Delete"
                  icon={
                      <MaterialCommunityIcons name="delete-outline" size={22} color={colors.black} />
                  }
              /> 
          </View>
        </View>
  )
}

export default ContentModal

const styles = StyleSheet.create({
    hide:{
        position: 'absolute',
        backgroundColor: colors.grey200,
        borderRadius: 50,
        right: 12,
        top: 5
    },
    tinyLogo: {
        height: boxHeight/1.2,
        width: boxWidth/1.2,
    },
    imgstyle:{
        backgroundColor: colors.flashWhite,
        height: boxHeight/1.2,
        width: boxWidth/1.2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:3,
    },
    optionheader:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 16
    },
    optionTitle:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    optiontext:{
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 20
    },
    optionview2:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    value:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20
    },
    text:{
        fontSize: 15
    },
    innericon:{
        padding: 8
    },
    extraitems:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    }
})