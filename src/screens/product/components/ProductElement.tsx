import { StyleSheet, Pressable, View, Image } from 'react-native'
import React, { memo, useState } from 'react'

import { colors } from '../../../constants/colors'
import AppText from '../../../components/text/AppText'
import Tag from '../../../components/tags/Tag'
import BottomPopup from '../../../components/popup/BottomPopup'

import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ContentModal from './ContentModal'
import { windowHeight, windowWidth } from '../../../utils/dimensions'

const boxHeight = (windowHeight - 0 * 2)/12;
const boxWidth = (windowWidth - 0 * 2)/5;


const ProductElement = ({
  item,
  productStyle,
  onPress,
  onLongPress,
  activebar
}) => {

  const [show, setShow] = useState(false)
  const toggleModal = ()=> {
    setShow(!show)
  }
  const content = () => {
    return (
      <ContentModal productImg={item?.img} productName={item?.name} onClosePopup={toggleModal} />
    )
  }

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      delayLongPress={200}
    >
      <View style={[styles.productContainer, {backgroundColor: activebar ? colors.grey1500: colors.alice}]}>
        <View style={[styles.productContainer1, productStyle]}>
          <View>
            {item?.img ? 
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: item?.img,
                }}
              />
            : (
                <View style={styles.imgstyle}>
                  <MaterialCommunityIcons name="package" size={44} color={colors.grey1900} />
                </View>
              )
            }
          </View>
          <View style={styles.desc}>
              <AppText style={styles.idstyle}>{item?.id}</AppText>
              <AppText style={styles.productName}>{item?.name}</AppText>
              <View style={styles.tags}>
                <View style={styles.unitPrice}>
                  <Tag>{item?.count +" "+item?.unit}</Tag>
                  <AppText style={styles.amountStyle}>₹ {item?.price}</AppText>
                </View>
                <Tag boxColor={colors.green100} titleColor={colors.greenheavy} borderColor={colors.greenheavy} borderW={0.5}>{item?.category}</Tag>
              </View>
          </View>
        </View>
        <Pressable 
          style={{position: 'absolute', right: 10, top: 10}}
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
          android_ripple={{color: colors.grey1900, borderless: true, foreground: true}}
          pressRetentionOffset={100}
          onPress={toggleModal}
        >
            <MaterialIcons name="more-vert" size={26} color={colors?.grey300} />
        </Pressable>
      </View>
      <BottomPopup 
          show={show}
          toggleModal={toggleModal}
          renderContent={content}
          bottom={0}
      />
    </Pressable>

  )
}

export default memo(ProductElement)

const styles = StyleSheet.create({
  productContainer:{
    borderRadius: 7,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 4
  },
  productContainer1:{
    flexDirection: 'row'
  },
  imgstyle:{
    backgroundColor: colors.flashWhite,
    height: boxHeight,
    width: boxWidth,
    alignItems: 'center',
    justifyContent: 'center'
  },
  unitPrice:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 6
  },
  desc:{
    paddingHorizontal: 10
  },
  idstyle:{
    color: colors.grey1900,
    fontSize: 12,
  },
  productName:{
    fontSize: 16
  },
  amountStyle:{
    paddingHorizontal: 10
  },
  fill:{
    flex: 1,
  },
  tinyLogo: {
    height: boxHeight,
    width: boxWidth,
  },
  tags:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  
})